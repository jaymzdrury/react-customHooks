import { z } from "zod";

export type ImgProps = React.ComponentPropsWithoutRef<"img">;

const Fetch = z.object({
  loading: z.boolean(),
  error: z.string().nullable(),
  data: z.object({ name: z.string() }),
});
export const FetchData = Fetch.shape.data.pick({ name: true });
export type FetchProps = z.infer<typeof Fetch>;

const Map = z.array(z.string().min(1));
export type MapElement = z.infer<typeof Map.element>;
export type Map = z.infer<typeof Map>;
