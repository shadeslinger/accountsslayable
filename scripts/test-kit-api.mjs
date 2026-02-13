#!/usr/bin/env node
/**
 * Kit API diagnostic script — run locally to verify integration
 * Usage: node scripts/test-kit-api.mjs
 * Requires: KIT_FORM_ID and KIT_API_KEY in .env.local or environment
 */

import { readFileSync, existsSync } from "fs";
import { resolve } from "path";

function loadEnv() {
  const path = resolve(process.cwd(), ".env.local");
  if (existsSync(path)) {
    const content = readFileSync(path, "utf-8");
    for (const line of content.split("\n")) {
      const match = line.match(/^([^#=]+)=(.*)$/);
      if (match) {
        const key = match[1].trim();
        const val = match[2].trim().replace(/^["']|["']$/g, "");
        if (!process.env[key]) process.env[key] = val;
      }
    }
  }
}

loadEnv();

const formId = process.env.KIT_FORM_ID;
const apiKey = process.env.KIT_API_KEY;
const testEmail = process.argv[2] || `test-${Date.now()}@example.com`;

console.log("\n=== Kit API Diagnostic ===\n");
console.log("KIT_FORM_ID:", formId ? `${formId} (length: ${formId.length})` : "NOT SET");
console.log("KIT_API_KEY:", apiKey ? `set (length: ${apiKey.length}, prefix: ${apiKey.slice(0, 8)}...)` : "NOT SET");
console.log("Test email:", testEmail);

if (!formId || !apiKey) {
  console.error("\n❌ Missing env vars. Copy .env.example to .env.local and fill in values.");
  process.exit(1);
}

async function run() {
  // Step 1: List forms (verify API key and get form IDs)
  console.log("\n--- Step 1: List forms (verify API key) ---");
  const formsRes = await fetch(`https://api.convertkit.com/v3/forms?api_key=${apiKey}`);
  const formsBody = await formsRes.text();
  console.log("Status:", formsRes.status, formsRes.statusText);
  console.log("Response:", formsBody);

  if (!formsRes.ok) {
    console.error("\n❌ API key or request failed. Check your V3 key from Kit → Settings → Developer → V3 Key");
    process.exit(1);
  }

  let forms;
  try {
    forms = JSON.parse(formsBody);
  } catch {
    console.error("Could not parse forms response");
    process.exit(1);
  }

  const formIds = forms.forms?.map((f) => f.id) || [];
  console.log("\nYour form IDs:", formIds);
  if (formIds.length && !formIds.includes(Number(formId))) {
    console.warn(`\n⚠️  KIT_FORM_ID (${formId}) is not in your account's form list!`);
    console.warn("   Your forms:", formIds);
  }

  // Step 2: Subscribe test email
  console.log("\n--- Step 2: Subscribe to form ---");
  const url = `https://api.convertkit.com/v3/forms/${formId}/subscribe`;
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({ api_key: apiKey, email: testEmail }),
  });

  const body = await res.text();
  console.log("URL:", url);
  console.log("Status:", res.status, res.statusText);
  console.log("Response:", body);

  if (res.ok) {
    const data = JSON.parse(body);
    if (data.subscription) {
      console.log("\n✅ Success! Subscriber created. Check Kit dashboard → Subscribers.");
      console.log("   Subscription:", JSON.stringify(data.subscription, null, 2));
    } else {
      console.log("\n⚠️  Got 200 but unexpected response structure:", data);
    }
  } else {
    console.error("\n❌ Subscribe failed. Check form ID and that the form exists.");
  }
}

run().catch((err) => {
  console.error("Error:", err);
  process.exit(1);
});
