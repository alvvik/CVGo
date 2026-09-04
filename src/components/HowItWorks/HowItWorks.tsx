import { FileText, Edit, Download, ArrowRight } from "lucide-react";

interface Step {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const steps: Step[] = [
  {
    number: 1,
    title: "Wybierz szablon",
    description: "Wybierz z naszej kolekcji profesjonalnych szablonów CV",
    icon: <FileText className="w-8 h-8" />,
  },
  {
    number: 2,
    title: "Wypełnij dane",
    description: "Dodaj swoje doświadczenie, umiejętności i dane osobowe",
    icon: <Edit className="w-8 h-8" />,
  },
  {
    number: 3,
    title: "Pobierz CV",
    description:
      "Eksportuj swoje CV w formacie PDF i aplikuj na wymarzoną pracę",
    icon: <Download className="w-8 h-8" />,
  },
];

export default function HowItWorks() {
  return (
    <section className="py-16 px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-fluid-h2 text-center mb-4 text-text">
          Jak to działa?
        </h2>
        <p className="text-center text-text/70 mb-12 max-w-2xl mx-auto">
          Stworzenie profesjonalnego CV nigdy nie było tak proste. Zrobisz to w
          trzech prostych krokach.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center text-center"
            >
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-primary">
                {step.icon}
              </div>
              <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-full hidden md:block">
                {index < steps.length - 1 && (
                  <ArrowRight className="w-6 h-6 text-primary/30 mx-auto mt-2" />
                )}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-text">
                {step.title}
              </h3>
              <p className="text-text/70 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
