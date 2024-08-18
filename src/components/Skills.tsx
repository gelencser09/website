import * as React from "react";
import { Card, CardBody, CardHeader, SmallText } from "./Card";
import html from "../images/html.svg";
import css from "../images/css.svg";
import js from "../images/js.svg";
import ts from "../images/ts.svg";
import react from "../images/react.svg";
import python from "../images/python.svg";
import git from "../images/git.svg";
import docker from "../images/docker.svg";
import node from "../images/node.svg";

export default function Skills({ className }: { className?: string }) {
  return (
    <Card className={className}>
      <CardHeader>Hard skills</CardHeader>
      <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      <CardBody>
        <SmallText>Most experience</SmallText>
        <div className="flex">
          <img className="h-10 w-10 mx-1" src={html} alt="html" />
          <img className="h-10 w-10 mx-1" src={css} alt="css" />
          <img className="h-10 w-10 mx-1" src={js} alt="javascript" />
          <img className="h-10 w-10 mx-1" src={ts} alt="typescript" />
          <img className="h-10 w-10 mx-1" src={react} alt="react" />
          <img className="h-10 w-10 mx-1" src={node} alt="node" />
        </div>
        <SmallText>Confident usage</SmallText>
        <div className="flex">
          <img className="h-10 w-10 mx-1" src={git} alt="git" />
          <img className="h-10 w-10 mx-1" src={docker} alt="docker" />
          <img className="h-10 w-10 mx-1" src={python} alt="python" />
        </div>
      </CardBody>
    </Card>
  );
}
