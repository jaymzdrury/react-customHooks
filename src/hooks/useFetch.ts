import React from "react";
import { FetchProps, FetchData } from "../types/types";
import errMsg from "../lib/errMsg";

export default function useFetch(
  url: string,
  options: RequestInit | undefined
): FetchProps {
  const [fetched, update] = React.useReducer(
    (data: FetchProps, partialData: Partial<FetchProps>) => ({
      ...data,
      ...partialData,
    }),
    { loading: true, error: null, data: { name: "" } }
  );

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, options);
        const data = await response.json();
        FetchData.safeParse(data);

        update({
          error: !response.ok ? data.message : undefined,
          data,
          loading: false,
        });
      } catch (error) {
        update({ error: errMsg(error), loading: false });
      }
    };
    fetchData();
  }, [url, options]);

  const { loading, error, data } = fetched;

  return { data, loading, error };
}
