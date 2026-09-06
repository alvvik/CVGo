"use client";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Czy CVGo jest darmowe?",
    answer:
      "Tak, CVGo jest w 100% darmowe. Możesz tworzyć i pobierać CV bez żadnych ukrytych opłat.",
  },
  {
    question: "Czy muszę zakładać konto?",
    answer:
      "Nie, nie musisz zakładać konta. Możesz od razu przejść do tworzenia CV bez rejestracji.",
  },
  {
    question: "W jakich formatach mogę pobrać CV?",
    answer:
      "Obecnie obsługujemy eksport do formatu PDF. Wkrótce dodamy również możliwość eksportu do DOCX.",
  },
  {
    question: "Czy moje dane są bezpieczne?",
    answer:
      "Tak, Twoje dane są przetwarzane lokalnie w przeglądarce i nie są przechowywane na naszych serwerach.",
  },
  {
    question: "Czy mogę edytować CV po jego utworzeniu?",
    answer:
      "Tak, możesz wrócić do kreatora w dowolnym momencie i edytować swoje CV.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-fluid-h2 text-center mb-4 text-text">
          Najczęściej zadawane pytania
        </h2>
        <p className="text-center text-text/70 mb-12">
          Odpowiedzi na najczęstsze pytania o CVGo
        </p>
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="bg-background rounded-2xl border border-primary/10 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-primary/5 transition-colors"
              >
                <span className="font-semibold text-text">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-primary shrink-0 ml-4" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-primary shrink-0 ml-4" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 text-text/80 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
