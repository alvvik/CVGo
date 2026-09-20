import ClassicCV from "./ClassicCV";
import ModernCV from "./ModernCV";
import { CVState } from "@/store/cvStore";

type TemplateEntry = {
  id: string;
  name: string;
  description?: string;
  previewImage?: string;
  component: React.ComponentType<{ data: CVState["data"] }>;
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

export const templatesMap: Record<
  string,
  React.ComponentType<{ data: CVState["data"] }>
> = {};
templates.forEach((t) => {
  templatesMap[t.id] = t.component;
});

export default templates;
