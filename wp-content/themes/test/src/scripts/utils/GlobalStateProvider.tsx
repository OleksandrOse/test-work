import React, { createContext, useState, useContext, Dispatch, SetStateAction } from "react";

export interface GlobalStateInterface {
  name: string;
  email: string;
  phone: string;
  quantity: string;
  isDataLoaded: boolean
}

export const GlobalStateContext = createContext({
  data: {
    name: '',
    email: '',
    phone: '',
    quantity: '',
    isDataLoaded: false,
  } as Partial<GlobalStateInterface>,
  setData: {} as Dispatch<SetStateAction<Partial<GlobalStateInterface>>>,
});

const GlobalStateProvider = ({
  children,
  value = {
    name: '',
    email: '',
    phone: '',
    quantity: '',
    isDataLoaded: false,
  } as GlobalStateInterface,
}: {
  children: React.ReactNode;
  value?: Partial<GlobalStateInterface>;
}) => {
  const [data, setData] = useState(value);
  return (
    <GlobalStateContext.Provider value={{ data, setData }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

const useGlobalState = () => {
  const context = useContext(GlobalStateContext);
  if (!context) {
    throw new Error("useGlobalState must be used within a GlobalStateContext");
  }
  return context;
};

export { GlobalStateProvider, useGlobalState };