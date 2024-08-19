import * as React from "react";

export default ({ className }: { className?: string }) => (
  <hr
    className={`h-px my-4 bg-gray-200 border-0 dark:bg-gray-700 ${className}`}
  ></hr>
);
