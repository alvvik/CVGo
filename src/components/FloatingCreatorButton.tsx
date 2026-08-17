"use client";

import Link from "next/link";
import { ExternalLink } from "lucide-react";

import ButtonCustom from "@/components/ButtonCustom";

export default function FloatingCreatorButton() {
  return (
    <div className="fixed bottom-4 left-1/2 z-50 shadow-lg -translate-x-1/2">
      <ButtonCustom className="flex items-center justify-center">
        <ExternalLink className="inline-block w-6 h-6 mr-2" />
        <Link href="/creator">Stwórz własne CV!</Link>
      </ButtonCustom>
    </div>
  );
}
