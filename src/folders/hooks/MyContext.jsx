import { createContext, useContext, useState } from "react";
import { demoStudents } from "../../Data";

const MyContext = createContext();

export const MyContextProvider = ({ children }) => {
  const [students, setStudents] = useState(demoStudents);

  return (
    <MyContext.Provider value={{ students, setStudents }}>
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = () => {
  return useContext(MyContext);
};
