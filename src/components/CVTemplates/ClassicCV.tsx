"use client";

import React from "react";

type Props = { data: any };

export default function ClassicCV({ data }: Props) {
  const p = data.personalInfo;
  return (
    <div className="w-full h-full flex flex-col text-sm sm:text-base bg-white text-slate-800">
      {/* Header - Dane osobowe */}
      <header className="border-b-2 border-slate-800 pb-4 mb-6">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          {p.photo && (
            <img
              src={p.photo}
              alt={p.fullName}
              className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover shrink-0"
            />
          )}

          <div className="flex-1">
            <h1 className="text-xl sm:text-2xl font-bold text-slate-900 font-serif">
              {p.fullName}
            </h1>
            <p className="text-base sm:text-lg font-semibold text-slate-700 mt-1">
              {p.title}
            </p>

            {/* Dane kontaktowe */}
            <div className="mt-3 text-xs sm:text-sm text-slate-600 space-y-1">
              {p.email && (
                <div className="flex items-center gap-2">
                  <span className="font-semibold">Email:</span>
                  <span>{p.email}</span>
                </div>
              )}
              {p.phone && (
                <div className="flex items-center gap-2">
                  <span className="font-semibold">Telefon:</span>
                  <span>{p.phone}</span>
                </div>
              )}
              {p.address && (
                <div className="flex items-center gap-2">
                  <span className="font-semibold">Adres:</span>
                  <span>{p.address}</span>
                </div>
              )}
              {p.linkedin && (
                <div className="flex items-center gap-2">
                  <span className="font-semibold">LinkedIn:</span>
                  <span>{p.linkedin}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Podsumowanie zawodowe */}
      {p.summary && (
        <section className="mb-6">
          <h2 className="text-base sm:text-lg font-bold text-slate-900 border-b border-slate-300 pb-1 mb-3 font-serif">
            Podsumowanie zawodowe
          </h2>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            {p.summary}
          </p>
        </section>
      )}

      {/* Doświadczenie zawodowe */}
      {data.experiences && data.experiences.length > 0 && (
        <section className="mb-6">
          <h2 className="text-base sm:text-lg font-bold text-slate-900 border-b border-slate-300 pb-1 mb-3 font-serif">
            Doświadczenie zawodowe
          </h2>
          <div className="space-y-4">
            {data.experiences.map((exp: any) => (
              <article key={exp.id} className="text-xs sm:text-sm">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                  <h3 className="font-bold text-slate-900">{exp.position}</h3>
                  {(exp.startDate || exp.endDate) && (
                    <span className="text-slate-600 text-xs">
                      {exp.startDate}{" "}
                      {exp.endDate ? `- ${exp.endDate}` : "- Obecnie"}
                    </span>
                  )}
                </div>
                <p className="font-semibold text-slate-700 mt-1">
                  {exp.company}
                </p>
              </article>
            ))}
          </div>
        </section>
      )}

      {/* Wykształcenie */}
      {data.education && data.education.length > 0 && (
        <section className="mb-6">
          <h2 className="text-base sm:text-lg font-bold text-slate-900 border-b border-slate-300 pb-1 mb-3 font-serif">
            Wykształcenie
          </h2>
          <div className="space-y-3">
            {data.education.map((edu: any) => (
              <article key={edu.id} className="text-xs sm:text-sm">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                  <h3 className="font-bold text-slate-900">{edu.degree}</h3>
                  {(edu.startDate || edu.endDate) && (
                    <span className="text-slate-600 text-xs">
                      {edu.startDate}{" "}
                      {edu.endDate ? `- ${edu.endDate}` : "- Obecnie"}
                    </span>
                  )}
                </div>
                <p className="text-slate-700 mt-1">{edu.school}</p>
              </article>
            ))}
          </div>
        </section>
      )}

      {/* Umiejętności */}
      {data.skills && data.skills.length > 0 && (
        <section className="mb-6">
          <h2 className="text-base sm:text-lg font-bold text-slate-900 border-b border-slate-300 pb-1 mb-3 font-serif">
            Umiejętności
          </h2>
          <ul className="text-xs sm:text-sm text-slate-700 space-y-1">
            {data.skills.map((skill: any) => (
              <li key={skill.id} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-slate-800 rounded-full shrink-0"></span>
                <span>
                  {skill.name} - {skill.level}
                </span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Języki obce */}
      {data.languages && data.languages.length > 0 && (
        <section className="mb-6">
          <h2 className="text-base sm:text-lg font-bold text-slate-900 border-b border-slate-300 pb-1 mb-3 font-serif">
            Języki obce
          </h2>
          <ul className="text-xs sm:text-sm text-slate-700 space-y-1">
            {data.languages.map((lang: any) => (
              <li key={lang.id} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-slate-800 rounded-full shrink-0"></span>
                <span>
                  {lang.language} - {lang.level}
                </span>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
