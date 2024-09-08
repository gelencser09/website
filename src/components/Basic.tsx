import * as React from "react";
import { Card, CardBody, CardHeader, SmallText } from "./Card";
import ButtonLink from "./ButtonLink";
import profile from "../images/profile-cropped.jpg";
import Separator from "./Separator";

export default function Basic({ className }: { className?: string }) {
  return (
    <Card className={className}>
      <section className="flex flex-wrap flex-col items-center md:flex-row">
        <div className="rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 p-0.5">
          <img
            className="w-32 h-32 rounded-lg"
            src={profile}
            alt="Profile picture"
          />
        </div>
        <div className="mx-5 flex flex-col justify-center items-center py-5">
          <CardHeader>Ákos Gelencsér</CardHeader>
          <SmallText>Software engineer</SmallText>
        </div>
      </section>
      <Separator />
      <CardBody>
        <p className="dark:text-white font-medium">
          Hey, welcome to my page! Let me introduce myself:
        </p>
        <p className="dark:text-white">
          I am a Hungarian computer science MSc student at the Technical
          University of Denmark.
        </p>
        <p className="dark:text-white">
          I participated in several software development projects during my BSc
          internship and activity at the Special Interest Group for Computer
          Science in Schönherz Dormitory (KSZK). I mainly worked on web-based
          applications, where my responsibility generally was front-end
          development. Despite this, I have also had the chance to work on REST
          or full-stack applications, so I have gained a comprehensive
          understanding of web-based software. I have also experimented with
          DevOps techniques, implementing various CI/CD solutions.
        </p>
        <p className="dark:text-white">
          I have worked with developers of all experience, gaining the skills to
          learn from, teach, and cooperate with them. I always focus on
          executing my tasks precisely while keeping up with the deadlines.
          During my previous work, I gained decent communication and
          problem-solving skills.
        </p>

        <ButtonLink href="/cv-v2.pdf">Download CV</ButtonLink>
      </CardBody>
    </Card>
  );
}
