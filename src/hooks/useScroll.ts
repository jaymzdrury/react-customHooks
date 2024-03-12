import React from "react";

export default function useScroll(): { scroll: number } {
  const [scroll, scrollSet] = React.useState(0);
  React.useEffect(() => {
    const handleScroll = () => scrollSet(window.pageYOffset);
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return { scroll };
}
