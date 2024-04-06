"use client";
import type { AppStore } from "@/redux/store";
import { makeStore } from "@/redux/store";
import { setupListeners } from "@reduxjs/toolkit/query";
import type { PropsWithChildren } from "react";
import { useEffect, useRef } from "react";
import { Provider } from "react-redux";


export const StoreProvider = ({ children }: PropsWithChildren) => {
  const storeRef = useRef<AppStore | null>(null);

  if (!storeRef.current) {
    storeRef.current = makeStore();
  }

  useEffect(() => {
    if (storeRef.current != null) {
      return setupListeners(storeRef.current.dispatch);
    }
  }, []);

  return <Provider store={storeRef.current}>{children}</Provider>;
};
