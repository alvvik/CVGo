import ButtonCustom from "@/components/ButtonCustom";
import { exportData, exportToPDF } from "@/utils/export";
import { handleImportJson } from "@/utils/import";
import { useRef } from "react";
import { CVState } from "@/store/cvStore";

interface ExportImportActionsProps {
  data: CVState["data"];
  cvRef: React.RefObject<HTMLDivElement | null>;
}

export default function ExportImportActions({
  data,
  cvRef,
}: ExportImportActionsProps) {
  return (
    <div className="mb-6 flex gap-3">
      <ButtonCustom onClick={() => exportData(data)} className="flex-1 text-sm">
        Eksportuj JSON
      </ButtonCustom>
      <ButtonCustom
        onClick={() => exportToPDF(cvRef)}
        className="flex-1 text-sm"
      >
        Eksportuj PDF
      </ButtonCustom>
      <label className="flex flex-1 cursor-pointer items-center justify-center rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-primary focus:outline-none focus:ring-4 focus:ring-primary/20">
        Importuj JSON
        <input
          type="file"
          accept="application/json"
          onChange={handleImportJson}
          className="hidden"
        />
      </label>
    </div>
  );
}
