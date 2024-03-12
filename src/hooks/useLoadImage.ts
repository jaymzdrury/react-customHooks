import React from "react";
import { ImgLoaderProps } from "../types/types";

export default function useLoadImage(src: string): ImgLoaderProps {
  const [image, update] = React.useReducer(
    (data: ImgLoaderProps, partialData: Partial<ImgLoaderProps>) => ({
      ...data,
      ...partialData,
    }),
    { loading: true, error: null, imgSrc: "" }
  );

  const onLoad = React.useCallback(
    async () => update({ imgSrc: src, loading: false }),
    [src]
  );

  const onError = React.useCallback(
    async (e: ErrorEvent) => update({ loading: false, error: e.message }),
    []
  );

  React.useEffect(() => {
    const img = new Image();
    img.src = src;
    img.addEventListener("load", onLoad);
    img.addEventListener("error", onError);
    return () => {
      img.removeEventListener("load", onLoad);
      img.removeEventListener("error", onError);
    };
  }, [src, onLoad, onError]);

  const { loading, error, imgSrc } = image;
  return { loading, error, imgSrc };
}
