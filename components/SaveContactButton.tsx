"use client";

import { UserPlus } from "lucide-react";

import { PROFILE, SOCIALS } from "@/lib/profile";

// Builds a vCard (.vcf) on the fly and downloads it — the "save to contacts"
// move from digital business cards. Client-only (uses Blob + DOM).
function buildVCard(): string {
  const lines = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `N:${PROFILE.lastName};${PROFILE.firstName};;;`,
    `FN:${PROFILE.name}`,
    `TITLE:${PROFILE.title}`,
    `EMAIL;TYPE=INTERNET:${SOCIALS.email}`,
    `ADR;TYPE=WORK:;;${PROFILE.location};;;;`,
    "URL:https://qori.land",
    `X-SOCIALPROFILE;TYPE=linkedin:${SOCIALS.linkedin}`,
    `X-SOCIALPROFILE;TYPE=github:${SOCIALS.github}`,
    "END:VCARD",
  ];
  return lines.join("\r\n");
}

export function SaveContactButton() {
  function handleSave() {
    const blob = new Blob([buildVCard()], { type: "text/vcard;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "Lucas-Ruiz.vcf";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  return (
    <button
      type="button"
      onClick={handleSave}
      className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
    >
      <UserPlus className="h-4 w-4" aria-hidden="true" />
      Save contact
    </button>
  );
}
