import React from "react";
import LangCard from "../Component/Cards/LangCard";

const highlights = [
  "Built HRMS/ERP and Procurement platforms used across 150+ project sites.",
  "Developed 25+ REST APIs with Django REST Framework, JWT authentication and RBAC.",
  "Designed a 7-level sequential approval workflow for procurement.",
  "Added real-time notifications, GPS material tracking and biometric attendance integration.",
  "Built an AI employee-support assistant using LLMs, vector search and RAG.",
];

function Experience() {
  return (
    <section className="min-h-screen bg-back px-5 py-12 sm:px-8 md:px-12 lg:px-24">
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <h1 className="pb-10 font-fira text-sm text-white sm:text-base">
          .../Experience...
        </h1>

        {/* Company Details */}
        <div className="mb-10 w-full">

          <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
            <div>
              <h2 className="font-fira text-lg text-white sm:text-xl">
                Arshee Engineering & Innovations Pvt. Ltd.
              </h2>

              <p className="mt-1 text-sm text-blue-500">
                Software Engineer I (Backend / Full-Stack)
              </p>
            </div>

            <span className="text-xs text-gray sm:text-sm">
              Aug 2025 – Present
            </span>
          </div>

          {/* Overview */}
          <div className="mt-5 text-sm leading-7 text-gray sm:text-base">
            <p>
              Joined as a Software Engineer Trainee in August 2025 and
              promoted to{" "}
              <span className="font-semibold text-blue-500">
                Software Engineer I
              </span>{" "}
              in January 2026.
            </p>

            <ul className="mt-4 list-disc space-y-2 pl-5 marker:text-blue-500">
              {highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Main Technologies */}
        <div className="mt-12">

          <h2 className="font-fira text-lg text-white sm:text-xl">
            Technologies & Tools
          </h2>

          <p className="mt-2 text-xs text-gray sm:text-sm">
            Core technologies I use in my day-to-day work.
          </p>

          <div className="py-6 flex flex-wrap gap-3 sm:gap-4">

            {/* Languages & Backend */}
            <LangCard name="Python" />
            <LangCard name="Django" />
            <LangCard name="Django REST Framework" />

            {/* Frontend */}
            <LangCard name="HTML5" />
            <LangCard name="CSS" />
            <LangCard name="JavaScript" />
            <LangCard name="Django-templates" />

            {/* Databases */}
            <LangCard name="PostgreSQL" />
            <LangCard name="MongoDB" />
            <LangCard name="Redis" />
            <LangCard name="PostGIS" />
            <LangCard name="Elasticsearch" />

            {/* DevOps & Cloud */}
            <LangCard name="Docker" />
            <LangCard name="Git" />
            <LangCard name="AWS" />

            {/* AI */}
            <LangCard name="RAG" />

          </div>
        </div>

      </div>
    </section>
  );
}

export default Experience;