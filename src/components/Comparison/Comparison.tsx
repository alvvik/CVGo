import { Check, X } from "lucide-react";

interface ComparisonItem {
  feature: string;
  cvgo: boolean;
  competitors: boolean;
}

const comparisonData: ComparisonItem[] = [
  { feature: "Darmowe użytkowanie", cvgo: true, competitors: false },
  { feature: "Bez rejestracji", cvgo: true, competitors: false },
  { feature: "Profesjonalne szablony", cvgo: true, competitors: true },
  { feature: "Eksport do PDF", cvgo: true, competitors: true },
  { feature: "Eksport do DOCX", cvgo: false, competitors: true },
  { feature: "Prywatność danych", cvgo: true, competitors: false },
  { feature: "Szybkość tworzenia", cvgo: true, competitors: true },
  { feature: "Wsparcie polskie", cvgo: true, competitors: false },
];

export default function Comparison() {
  return (
    <section className="py-16 px-8 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-fluid-h2 text-center mb-4 text-text">
          Dlaczego CVGo?
        </h2>
        <p className="text-center text-text/70 mb-12">
          Porównaj nas z innymi kreatorami CV
        </p>
        <div className="bg-background rounded-2xl overflow-hidden shadow-sm border border-primary/10">
          <table className="w-full">
            <thead>
              <tr className="bg-primary/10">
                <th className="px-6 py-4 text-left font-semibold text-text">
                  Funkcja
                </th>
                <th className="px-6 py-4 text-center font-semibold text-primary">
                  CVGo
                </th>
                <th className="px-6 py-4 text-center font-semibold text-text/70">
                  Inne kreatory
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((item, index) => (
                <tr
                  key={index}
                  className="border-t border-primary/10 hover:bg-primary/5"
                >
                  <td className="px-6 py-4 text-text">{item.feature}</td>
                  <td className="px-6 py-4 text-center">
                    {item.cvgo ? (
                      <Check className="w-6 h-6 text-green-500 mx-auto" />
                    ) : (
                      <X className="w-6 h-6 text-red-500 mx-auto" />
                    )}
                  </td>
                  <td className="px-6 py-4 text-center">
                    {item.competitors ? (
                      <Check className="w-6 h-6 text-green-500 mx-auto" />
                    ) : (
                      <X className="w-6 h-6 text-red-500 mx-auto" />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
