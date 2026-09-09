import templates from "@/components/CVTemplates/templates";
import {
  Popover,
  PopoverButton,
  PopoverPanel,
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";

interface TemplateSelectorProps {
  templateId: "classic" | "modern";
  setTemplate: (id: "classic" | "modern") => void;
}

export default function TemplateSelector({
  templateId,
  setTemplate,
}: TemplateSelectorProps) {
  return (
    <div className="mb-6 space-y-4 rounded-2xl border border-primary/15 bg-background/90 p-4">
      <h2>Szablon CV</h2>
      <div className="flex gap-3">
        <div className="flex-1">
          <Listbox value={templateId} onChange={setTemplate}>
            <div className="relative">
              <ListboxButton className="relative w-full cursor-pointer rounded-xl border border-primary/15 bg-background px-4 py-3 text-left text-sm text-text focus:outline-none focus:ring-2 focus:ring-primary/20 hover:border-primary/30 flex items-center justify-between">
                <span className="flex items-center gap-3">
                  {templates.find((t) => t.id === templateId)?.previewImage && (
                    <img
                      src={
                        templates.find((t) => t.id === templateId)?.previewImage
                      }
                      alt="Podgląd szablonu"
                      className="h-10 w-10 rounded-lg object-cover"
                    />
                  )}
                  <span className="font-semibold">
                    {templates.find((t) => t.id === templateId)?.name}
                  </span>
                </span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </ListboxButton>
              <ListboxOptions className="absolute z-10 mt-2 w-full rounded-xl border border-primary/15 bg-background/90 p-2 shadow-lg focus:outline-none">
                {templates.map((template) => (
                  <ListboxOption
                    key={template.id}
                    value={template.id}
                    className="relative cursor-pointer rounded-lg px-3 py-2 text-sm text-text transition-colors hover:bg-primary/10 focus:bg-primary/10 focus:outline-none"
                  >
                    <span className="flex items-center gap-3">
                      {template.previewImage && (
                        <img
                          src={template.previewImage}
                          alt={template.name}
                          className="h-10 w-10 rounded-lg object-cover"
                        />
                      )}
                      <div className="flex flex-col">
                        <span className="font-semibold">{template.name}</span>
                        <span className="text-xs text-text/60">
                          {template.description}
                        </span>
                      </div>
                    </span>
                  </ListboxOption>
                ))}
              </ListboxOptions>
            </div>
          </Listbox>
        </div>
        <Popover className="relative">
          <PopoverButton className="rounded-xl border border-primary/15 bg-background px-4 py-3 text-sm text-text focus:outline-none focus:ring-2 focus:ring-primary/20 hover:border-primary/30 transition-colors">
            Podgląd
          </PopoverButton>
          <PopoverPanel className="absolute right-0 z-20 mt-2 w-80 rounded-xl border border-primary/15 bg-background/90 p-4 shadow-lg focus:outline-none">
            {templates.find((t) => t.id === templateId)?.previewImage && (
              <div className="space-y-3">
                <h3 className="font-semibold text-text">
                  {templates.find((t) => t.id === templateId)?.name}
                </h3>
                <img
                  src={templates.find((t) => t.id === templateId)?.previewImage}
                  alt="Podgląd szablonu"
                  className="w-full rounded-lg object-cover"
                />
                <p className="text-xs text-text/60">
                  {templates.find((t) => t.id === templateId)?.description}
                </p>
              </div>
            )}
          </PopoverPanel>
        </Popover>
      </div>
    </div>
  );
}
