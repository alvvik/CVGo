"use client";

import React from "react";

type Props = { data: any };

export default function ModernCV({ data }: Props) {
  const p = data.personalInfo;
  return (
    <div className="w-full h-full flex flex-col sm:flex-row text-sm sm:text-base bg-white text-slate-800">
      <aside className="w-full sm:w-1/3 bg-indigo-900 text-white p-4 sm:p-6 order-2 sm:order-1">
        {/* Photo */}
        {p.photo && (
          <div className="mb-6">
            <img
              src={p.photo}
              alt={p.fullName}
              className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover mx-auto border-4 border-indigo-700"
            />
          </div>
        )}

        {/* Contact Info */}
        <section className="mb-6">
          <h2 className="text-base sm:text-lg font-bold text-indigo-200 mb-3">
            Kontakt
          </h2>
          <div className="space-y-2 text-xs sm:text-sm">
            {p.email && (
              <div className="flex items-start gap-2">
                <span className="text-indigo-300">Email:</span>
                <span className="break-all">{p.email}</span>
              </div>
            )}
            {p.phone && (
              <div className="flex items-start gap-2">
                <span className="text-indigo-300">Telefon:</span>
                <span>{p.phone}</span>
              </div>
            )}
            {p.address && (
              <div className="flex items-start gap-2">
                <span className="text-indigo-300">Adres:</span>
                <span>{p.address}</span>
              </div>
            )}
            {p.linkedin && (
              <div className="flex items-start gap-2">
                <span className="text-indigo-300">LinkedIn:</span>
                <span className="break-all">{p.linkedin}</span>
              </div>
            )}
          </div>
        </section>

        {/* Languages */}
        {data.languages && data.languages.length > 0 && (
          <section className="mb-6">
            <h2 className="text-base sm:text-lg font-bold text-indigo-200 mb-3">
              Języki
            </h2>
            <ul className="space-y-2 text-xs sm:text-sm">
              {data.languages.map((lang: any) => (
                <li key={lang.id} className="flex justify-between">
                  <span>{lang.language}</span>
                  <span className="text-indigo-300">{lang.level}</span>
                </li>
              ))}
            </ul>
          </section>
        )}
      </aside>

      {/* Right Column - Main Content */}
      <main className="flex-1 p-4 sm:p-6 order-1 sm:order-2">
        {/* Header */}
        <header className="mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-indigo-900">
            {p.fullName}
          </h1>
          <p className="text-base sm:text-lg text-indigo-700 font-semibold mt-1">
            {p.title}
          </p>
        </header>

        {/* Summary */}
        {p.summary && (
          <section className="mb-6">
            <h2 className="text-base sm:text-lg font-bold text-indigo-900 border-b-2 border-indigo-200 pb-1 mb-3">
              Podsumowanie
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {p.summary}
            </p>
          </section>
        )}
        {/* Skills */}
        {data.skills && data.skills.length > 0 && (
          <section className="mb-6">
            <h2 className="text-base sm:text-lg font-bold text-indigo-200 mb-3">
              Umiejętności
            </h2>
            {data.skills.map((skill: any) => (
              <article
                key={skill.id}
                className="text-xs sm:text-sm border-l-4 border-indigo-300 pl-4"
              >
                <h3 className=" text-slate-900">
                  <span className="font-bold">{skill.name}</span> -{" "}
                  {skill.level}
                </h3>
              </article>
            ))}
          </section>
        )}
        {/* Experience */}
        {data.experiences && data.experiences.length > 0 && (
          <section className="mb-6">
            <h2 className="text-base sm:text-lg font-bold text-indigo-900 border-b-2 border-indigo-200 pb-1 mb-3">
              Doświadczenie zawodowe
            </h2>
            <div className="space-y-4">
              {data.experiences.map((exp: any) => (
                <article
                  key={exp.id}
                  className="text-xs sm:text-sm border-l-4 border-indigo-500 pl-4"
                >
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                    <h3 className="font-bold text-slate-900">{exp.position}</h3>
                    {(exp.startDate || exp.endDate) && (
                      <span className="text-indigo-600 text-xs font-semibold">
                        {exp.startDate}{" "}
                        {exp.endDate ? `- ${exp.endDate}` : "- Obecnie"}
                      </span>
                    )}
                  </div>
                  <p className="font-semibold text-indigo-700 mt-1">
                    {exp.company}
                  </p>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* Education */}
        {data.education && data.education.length > 0 && (
          <section className="mb-6">
            <h2 className="text-base sm:text-lg font-bold text-indigo-900 border-b-2 border-indigo-200 pb-1 mb-3">
              Wykształcenie
            </h2>
            <div className="space-y-3">
              {data.education.map((edu: any) => (
                <article
                  key={edu.id}
                  className="text-xs sm:text-sm border-l-4 border-indigo-300 pl-4"
                >
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                    <h3 className="font-bold text-slate-900">{edu.degree}</h3>
                    {(edu.startDate || edu.endDate) && (
                      <span className="text-indigo-600 text-xs font-semibold">
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
      </main>
    </div>
  );
}
