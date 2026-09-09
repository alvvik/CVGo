import { useRef } from "react";
import { useCVStore } from "@/store/cvStore";
import Header from "./Header";
import ExportImportActions from "./ExportImportActions";
import TemplateSelector from "./TemplateSelector";
import PersonalInfoForm from "./PersonalInfoForm";
import SummarySection from "./SummarySection";
import ExperienceSection from "./ExperienceSection";
import SkillsSection from "./SkillsSection";
import EducationSection from "./EducationSection";
import LanguagesSection from "./LanguagesSection";

interface SidebarProps {
  cvRef: React.RefObject<HTMLDivElement | null>;
}

export default function Sidebar({ cvRef }: SidebarProps) {
  const {
    data,
    templateId,
    updatePersonal,
    setTemplate,
    addExperience,
    removeExperience,
    updateExperience,
    addSkill,
    removeSkill,
    updateSkill,
    addEducation,
    removeEducation,
    updateEducation,
    addLanguage,
    removeLanguage,
    updateLanguage,
  } = useCVStore();

  return (
    <div className="h-full overflow-y-auto bg-background p-5 text-text print:hidden md:p-6">
      <Header />
      <ExportImportActions data={data} cvRef={cvRef} />
      <TemplateSelector templateId={templateId} setTemplate={setTemplate} />
      <PersonalInfoForm
        personalInfo={data.personalInfo}
        updatePersonal={updatePersonal}
      />
      <SummarySection
        summary={data.personalInfo.summary}
        updatePersonal={updatePersonal}
      />
      <ExperienceSection
        experiences={data.experiences}
        addExperience={addExperience}
        removeExperience={removeExperience}
        updateExperience={updateExperience}
      />
      <SkillsSection
        skills={data.skills}
        addSkill={addSkill}
        removeSkill={removeSkill}
        updateSkill={updateSkill}
      />
      <EducationSection
        education={data.education}
        addEducation={addEducation}
        removeEducation={removeEducation}
        updateEducation={updateEducation}
      />
      <LanguagesSection
        languages={data.languages}
        addLanguage={addLanguage}
        removeLanguage={removeLanguage}
        updateLanguage={updateLanguage}
      />
    </div>
  );
}
