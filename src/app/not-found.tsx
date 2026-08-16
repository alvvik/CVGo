import ButtonCustom from "@/components/ButtonCustom";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-8 h-screen">
      <h1 className="text-fluid-h1 font-bold">
        Nie znalezziono strony (HTTP 404)
      </h1>
      <h2 className="text-fluid-h2 font-semibold">
        Ups! Strona, której szukasz, nie istnieje.
      </h2>
      <ButtonCustom>
        <Link href="/">Wróć do strony głównej</Link>
      </ButtonCustom>
    </div>
  );
}
