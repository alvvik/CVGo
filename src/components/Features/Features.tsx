import { FileText, Download, Share2, BarChart3, Lock } from "lucide-react";

interface FeaturesProps {
  description: string;
  icon: React.ReactNode;
}
const featuresData: FeaturesProps[] = [
  {
    description: "Gotowe szablony CV o eleganckim designie",
    icon: <FileText className="w-6 h-6" />,
  },

  {
    description: "Eksportuj CV w formatach PDF i DOCX",
    icon: <Download className="w-6 h-6" />,
  },
  {
    description: "Dziel się CV ze potencjalnymi pracodawcami",
    icon: <Share2 className="w-6 h-6" />,
  },
  {
    description: "Śledź widoki i kliknięcia na Twoje CV",
    icon: <BarChart3 className="w-6 h-6" />,
  },
  {
    description: "Twoje dane pozostają prywatne i bezpieczne",
    icon: <Lock className="w-6 h-6 " />,
  },
];
export default function Features() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-4 ">
      {featuresData.map((feature, index) => (
        <div
          key={index}
          className="flex items-center gap-3 w-2/3 min-h-24 md:min-h-30 md:w-64 px-4 py-3 rounded-xl  bg-secondary/60 shadow-sm"
        >
          <div>{feature.icon}</div>
          <p className="  text-left leading-snug">{feature.description}</p>
        </div>
      ))}
    </div>
  );
}
