import * as React from "react";
import { SmallText } from "./Card";
import close from "../images/close.svg";

export function ListItem({
  children,
  href,
  src,
  alt,
  hide = false,
}: {
  children?: React.ReactNode;
  href?: string;
  src?: string;
  alt?: string;
  hide?: boolean;
}) {
  const [hidden, setHidden] = React.useState<boolean>(hide);

  return (
    <li
      className={`w-fit flex items-center p-2 ${!href && "cursor-not-allowed"}`}
    >
      {src && <img className="w-7 h-7 mr-3" src={src} alt={alt} />}
      {hidden ? (
        <button
          type="button"
          className="p-1.5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          onClick={() => setHidden(!hidden)}
        >
          Show
        </button>
      ) : (
        <>
          <a href={href} target="_blank">
            <SmallText>{children}</SmallText>
          </a>
          {hide && <CloseButton onClick={() => setHidden(!hidden)} />}
        </>
      )}
    </li>
  );
}

function CloseButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      className="ms-auto -mx-1.5 -my-1.5 bg-blue-50 text-blue-500 rounded-lg focus:ring-2 focus:ring-blue-400 p-1.5 hover:bg-blue-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-blue-400 dark:hover:bg-gray-700"
      aria-label="Close"
      onClick={onClick}
    >
      <span className="sr-only">Close</span>
      <svg
        className="w-3 h-3"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 14 14"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
        />
      </svg>
    </button>
  );
}
