"use client";

import React from "react";

type Props = { data: any };

export default function ClassicCV({ data }: Props) {
  const p = data.personalInfo;
  return (
    <div className="w-full h-full flex flex-col text-sm sm:text-base">
      {/* Dane osobowe */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
        {p.photo && (
          <img
            src={p.photo}
            alt={p.fullName}
            className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover shrink-0"
          />
        )}

        <div>
          <h1 className="text-lg sm:text-2xl font-extrabold">{p.fullName}</h1>
          <p className="text-sm sm:text-base font-semibold">{p.title}</p>
          <p className="text-xs sm:text-sm mt-2">{p.email}</p>
        </div>
      </div>

      {/* Doświadczenie zawodowe */}
      <div className="mt-6">
        <h3 className="font-semibold text-sm sm:text-base">Doświadczenie</h3>
        <ul className="mt-2 space-y-2 text-xs sm:text-sm">
          {data.experiences?.map((exp: any) => (
            <li key={exp.id} className="">
              <div className="font-semibold">{exp.position}</div>
              <div className="text-muted text-xs">{exp.company}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
