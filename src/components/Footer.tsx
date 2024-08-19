import * as React from "react";
import { SmallText } from "./Card";

export default function Footer() {
  return (
    <footer className="bg-white rounded-lg shadow mt-16 mx-5 lg:mx-16 dark:bg-gray-800">
      <div className="w-full flex justify-center p-4">
        <SmallText>Hosted with fly.io {"<3"}</SmallText>
      </div>
    </footer>
  );
}
