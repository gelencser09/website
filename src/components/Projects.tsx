import * as React from "react";

import { Card, CardBody, CardHeader } from "./Card";
import links from "../images/links.svg";
import github from "../images/github.svg";
import rocket from "../images/rocket.svg";
import react from "../images/react.svg";
import nextjs from "../images/nextjs.svg";
import postgres from "../images/postgres.png";
import question from "../images/question.svg";
import recycle from "../images/recycle.svg";
import openai from "../images/openai.svg";
import getotp from "../images/getotp.png";

export default function Projects() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      <Project name={"Links App"} iconSrc={links}>
        <p>
          A very simple but fully functional linktr.ee imitation where users can
          upload links to all their socials, websites, etc. and share them all
          at once by sharing a link to their Links App page.
        </p>
        <p className="flex items-center gap-3">
          <span>Tech stack:</span>
          <img src={react} alt="React" className="w-5 h-5" />
          <img
            src={nextjs}
            alt="Next.JS"
            className="w-5 h-5 bg-white rounded-full"
          />
          <img src={postgres} alt="PostgreSQL" className="w-5 h-5" />
        </p>
        <ProjectLink
          iconSrc={rocket}
          label="Try it now!"
          href="https://links.gelencser.eu/"
        />
        <ProjectLink
          iconSrc={github}
          label="View source code"
          href="https://github.com/gelencser09/links-app"
        />
      </Project>

      <Project name={"Recycle! 🇩🇰 (beta)"} iconSrc={recycle}>
        <p>
          A web-based application to help people who have freshly moved to
          Denmark sort their trash with the help of AI image recognition. The
          app uses GetOTP and OpenAI as external secivces.
        </p>
        <p className="flex items-center gap-3">
          <span>Tech stack:</span>
          <img src={react} alt="React" className="w-5 h-5" />
          <img
            src={nextjs}
            alt="Next.JS"
            className="w-5 h-5 bg-white rounded-full"
          />
          <img src={getotp} alt="GetOTP" className="w-5 h-5 rounded-md" />
          <img
            src={openai}
            alt="OpenAI"
            className="w-5 h-5 bg-white rounded-md"
          />
        </p>
        <ProjectLink
          iconSrc={rocket}
          label="Try it now!"
          href="https://recycle.fly.dev/"
        />
        <ProjectLink
          iconSrc={github}
          label="View source code"
          href="https://github.com/gelencser09/recycle"
        />
      </Project>

      <div className="hidden lg:block">
        <Project name={"Placeholder"} iconSrc={question}>
          <p>To be released...</p>
        </Project>
      </div>
    </div>
  );
}

function Project({
  children,
  name,
  iconSrc,
}: {
  children: React.ReactNode;
  name: string;
  iconSrc: string;
}) {
  return (
    <Card>
      <section>
        <div className="flex items-center gap-3">
          <img
            src={iconSrc}
            alt={`${name} project icon`}
            className="w-10 h-10"
          />
          <CardHeader>{name}</CardHeader>
        </div>
        <ProjectDescription>{children}</ProjectDescription>
      </section>
    </Card>
  );
}

function ProjectDescription({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-normal text-gray-700 dark:text-gray-400 mt-3 flex flex-col gap-3">
      {children}
    </div>
  );
}

function ProjectLink({
  iconSrc,
  label,
  href,
}: {
  iconSrc: string;
  label: string;
  href: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <img src={iconSrc} alt="Project link icon" className="h-5 w-5" />
      <a href={href} className="underline" target="_blank">
        {label}
      </a>
    </div>
  );
}
