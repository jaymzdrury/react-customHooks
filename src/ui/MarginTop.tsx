import React from "react";

function MarginTop({ children }: { children: React.ReactNode }): JSX.Element {
  return <div style={{ marginTop: 20 }}>{children}</div>;
}
export default MarginTop;
