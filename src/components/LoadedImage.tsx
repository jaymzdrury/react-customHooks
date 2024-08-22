import React from "react";
import useLoadImage from "../hooks/useLoadImage";
import { ImgProps } from "../types/types";

export default function LoadedImage({
  src,
  ...rest
}: { src: string } & ImgProps): JSX.Element {
  const loaded = useLoadImage(src);

  if (!loaded) return <p>Loading...</p>;

  return <img src={src} {...rest} />;
}

export function LoadedImageWithoutHook({
  src,
  ...rest
}: { src: string } & ImgProps): JSX.Element {
  const [loaded, loadedSet] = React.useState(false);

  if (!loaded) return <p>Loading...</p>;

  return (
    <img
      src={src}
      {...rest}
      onLoad={(e) => loadedSet(e.currentTarget.complete)}
    />
  );
}
