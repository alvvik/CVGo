import ClassicCV from "./ClassicCV";
import ModernCV from "./ModernCV";

type TemplateEntry = {
  id: string;
  name: string;
  description?: string;
  previewImage?: string;
  component: React.ComponentType<any>;
};

export const templates: TemplateEntry[] = [
  {
    id: "classic",
    name: "Klasyczne",
    description: "Prosty, czytelny układ",
    previewImage: "/classicCv.png",
    component: ClassicCV,
  },
  {
    id: "modern",
    name: "Nowoczesne",
    description: "Nowoczesny, kolorowy układ",
    previewImage: "/modernCv.png",
    component: ModernCV,
  },
];

export const templatesMap: Record<string, React.ComponentType<any>> = {};
templates.forEach((t) => {
  templatesMap[t.id] = t.component;
});

export default templates;
