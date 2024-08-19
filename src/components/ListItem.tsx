import * as React from "react";
import { SmallText } from "./Card";

export function ListItem({
  children,
  href,
  src,
  alt,
}: {
  children?: React.ReactNode;
  href?: string;
  src?: string;
  alt?: string;
}) {
  return (
    <li>
      <a className="w-fit flex items-center" href={href}>
        {src && <img className="w-5 h-5 m-3" src={src} alt={alt} />}
        <SmallText>{children}</SmallText>
      </a>
    </li>
  );
}
