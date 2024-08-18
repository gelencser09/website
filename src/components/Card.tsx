import * as React from "react";

export function Card({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <article
      className={`w-full p-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ${className}`}
    >
      {children}
    </article>
  );
}

export function CardHeader({ children }: { children: React.ReactNode }) {
  return (
    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      {children}
    </h5>
  );
}

export function CardBody({ children }: { children: React.ReactNode }) {
  return (
    <section className="font-normal text-gray-700 dark:text-gray-400 grid grid-col-1 gap-4">
      {children}
    </section>
  );
}

export function SmallText({ children }: { children: React.ReactNode }) {
  return <p className="text-sm font-medium text-gray-400">{children}</p>;
}
