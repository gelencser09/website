import * as React from "react";

export function ListItem({ children }: { children?: React.ReactNode }) {
  return <li className="block flex">{children}</li>;
}
