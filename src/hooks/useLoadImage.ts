import React from "react";

export default function useLoadImage(src: string) {
  const [loaded, loadedSet] = React.useState(false);

  const onLoad = (srcset: string) => {
    const img = new Image();
    img.src = srcset;
    loadedSet(img.complete);
  };

  React.useEffect(() => onLoad(src), []);

  return loaded;
}
