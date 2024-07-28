"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import Link from "next/link";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Next.JS</li>
        <li>React.JS</li>
        <li>JavaScript</li>
        <li>TypeScript</li>
        <li>Tailwind CSS</li>
        <li>SCSS</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>
          Bachelor of Technology (Information Technology) 2021 to 2025 at
          Acropolis Institute of Technology and Research, Indore, India
        </li>
        <li>
          Higher Secondary (12th MP Board) 2021 at M.P. Public Higher Secondary
          School, Mandsaur, India
        </li>
        <li>
          Senior Secondary (10th MP Board): 2018 at M.P. Public Higher Secondary
          School, Mandsaur, India
        </li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>
          <Link
            href="https://certificate.codingninjas.com/verify/bbb7d7b648aef9bd"
            target="_blank"
          >
            Introduction to C++ (Tap here)
          </Link>
        </li>
        <li>
          <Link
            href="https://certificate.codingninjas.com/verify/75902f9e7263e83a"
            target="_blank"
          >
            Data Structures & Algorithm (Tap here)
          </Link>
        </li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul className="list-disc pl-2">
        <li>Intern at RentPrompts [March 2024 – Present]</li>
        <li>Co-Lead at GDSC AITR [Aug 2023 – June 2024]</li>
        <li>Graphic Designer at GDSC AITR [AUG 2022 – AUG 2023]</li>
        <li>Video Editor at GDSC WOW 2023 [JAN 2023 - APRIL 2023]</li>
        <li>Video Editor at SFSG AITR [AUG 2022 - JULY 2023]</li>
        <li>Video Editor at Acropolis Blockchain Club [FEB 2023 - AUG 2023]</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/about-image.png"
          alt="about_image"
          width={500}
          height={500}
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, TypeScript, Next.js, Express,
            MongoDB, HTML, Tailwind CSS, and Git. Using frontend technologies, I
            create fast, modern websites. Let&apos;s collaborate on your next
            digital venture!
          </p>
          <div className="overflow-x-auto whitespace-nowrap over md:flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              {" "}
              Experience{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
