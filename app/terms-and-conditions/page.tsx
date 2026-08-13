import type { Metadata } from "next";
import { BRAND, DELIVERY } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: `Terms and Conditions for ordering from ${BRAND.name} (${BRAND.domain}).`,
};

import { redirect } from "next/navigation";

export default function TermsPage() {
  // Page removed — redirecting to home
  redirect("/");
}
