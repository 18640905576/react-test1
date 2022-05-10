import React, { useState } from "react";

interface AppStateValue {
  username: string;
  shoppingCart: {
    items: {
      id: number;
      name: string;
    }[];
  };
}

// 合并 type PropsWithChildren
type Props = React.PropsWithChildren<{}>;

const defaultContextValue: AppStateValue = { username: "carryxx666", shoppingCart: { items: [] } };

export const appContext = React.createContext(defaultContextValue);
export const appSetStateContext = React.createContext<React.Dispatch<React.SetStateAction<AppStateValue>> | undefined>(undefined);

export const AppStateProvider: React.FC<Props> = (props) => {
  const [state, setState] = useState(defaultContextValue);
  console.log(setState);
  return (
    <appContext.Provider value={state}>
      <appSetStateContext.Provider value={setState}>{props.children}</appSetStateContext.Provider>
    </appContext.Provider>
  );
};
