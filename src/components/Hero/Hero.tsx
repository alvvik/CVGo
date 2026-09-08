import { BadgeCheck, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ButtonCustom from "../ButtonCustom";
const zalety = ["Bezpłatny", "Szybki", "Prosty", "Bez zakladania konta"];
export default function Hero() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-center p-8">
      <div className="flex flex-col items-center justify-center gap-4 py-8">
        <h1 className="text-fluid-h1">Darmowy kreator CV</h1>
        <ul className="flex flex-col items-start justify-center gap-2">
          {zalety.map((zaleta, index) => (
            <li
              key={index}
              className="text-fluid-lead text-primary flex items-center justify-center gap-2 min-w-12"
            >
              <BadgeCheck className="inline-block w-4 h-4 mr-2" />
              {zaleta}
            </li>
          ))}
        </ul>
        <ButtonCustom className="flex justify-center items-center">
          <ExternalLink className="inline-block w-4 h-4 mr-2" />
          <Link href="/creator">Stwórz własne CV!</Link>
        </ButtonCustom>
      </div>
      <div className="flex flex-col items-center justify-center gap-4 py-8">
        <h2 className="text-fluid-h2">Stwórz swoje CV w kilka minut</h2>
        <p>Przykład stworzonego CV:</p>
        <Image
          src="/classicCv.png"
          alt="Przykład CV"
          width={400}
          height={150}
          className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
        />
      </div>
    </div>
  );
}
