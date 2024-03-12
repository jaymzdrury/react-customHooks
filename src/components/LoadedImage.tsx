import useLoadImage from "../hooks/useLoadImage";
import { ImgProps } from "../types/types";

export default function LoadedImage({
  src,
  ...rest
}: { src: string } & ImgProps): JSX.Element {
  const { loading, error, imgSrc } = useLoadImage(src);

  if (loading) return <div />;

  if (error) return <p>{error}</p>;

  return <img src={imgSrc} {...rest} />;
}
