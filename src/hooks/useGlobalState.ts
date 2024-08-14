import React from "react";

let globalState = 0;

type SetState = React.Dispatch<React.SetStateAction<typeof globalState>>;

const listeners: Array<SetState> = [];

export default function useGlobalState() {
  const [state, _setState] = React.useState(globalState);

  const setState = (newState: typeof globalState) =>
    listeners.forEach((l) => l(newState));

  React.useEffect(() => {
    listeners.push(_setState);

    return () => {
      listeners.filter((l) => l !== _setState);
    };
  }, []);

  return [state, setState] as const;
}

export function useGlobalStateVersion18() {
  const setState = (newState: typeof globalState) => {
    globalState = newState;
    for (const listener of listeners) listener(globalState);
  };

  const state = React.useSyncExternalStore(
    (listener: SetState) => {
      listeners.push(listener);

      return () => {
        listeners.filter((l) => l !== listener);
      };
    },
    () => globalState
  );

  return [state, setState] as const;
}
