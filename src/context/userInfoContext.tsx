"use client";
import React, { createContext, useState, useContext } from "react";

const UserInfoContext = createContext<any | undefined>(undefined);

export const UserInfoProvider = ({ children }: any) => {
  const [userInfoValue, setUserInfoState] = useState();

  return (
    <UserInfoContext.Provider value={{ userInfoValue, setUserInfoState }}>
      {children}
    </UserInfoContext.Provider>
  );
};

export const userInfoState = () => useContext(UserInfoContext);
