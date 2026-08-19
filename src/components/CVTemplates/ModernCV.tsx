"use client";

import React from "react";

type Props = { data: any };

export default function ModernCV({ data }: Props) {
  const p = data.personalInfo;
  return (
    <div className="w-full h-full flex flex-col text-sm sm:text-base">
      <div className="bg-primary/5 p-3 sm:p-4 rounded-lg">
        <h2 className="text-lg sm:text-2xl font-extrabold">{p.fullName}</h2>
        <p className="text-sm sm:text-base text-primary/90">{p.title}</p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mt-4">
        <div className="w-full sm:w-1/3">
          {p.photo && (
            <img
              src={p.photo}
              alt={p.fullName}
              className="w-32 h-32 sm:w-full sm:h-auto rounded-lg object-cover mx-auto sm:mx-0"
            />
          )}
          <p className="text-xs sm:text-sm mt-2 text-center sm:text-left">
            {p.email}
          </p>
        </div>
        <div className="flex-1">
          <h4 className="font-semibold">Doświadczenie</h4>
          <div className="mt-2 space-y-2 text-xs sm:text-sm">
            {data.experiences?.map((exp: any) => (
              <div key={exp.id} className="p-2 border rounded">
                <div className="font-semibold">{exp.position}</div>
                <div className="text-muted text-xs">{exp.company}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
