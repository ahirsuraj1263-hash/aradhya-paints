import type { Metadata } from "next";
import { BRAND } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy for ${BRAND.name} (${BRAND.domain}).`,
};

import { redirect } from "next/navigation";

export default function PrivacyPolicyPage() {
  // Page removed — redirecting to home
  redirect("/");
}
