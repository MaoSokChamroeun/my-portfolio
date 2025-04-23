// import { createContext, useState, useEffect } from "react"
// export const ThemeContext = createContext();
// export const ThemeProvider = ({children}) => {
//     const [mode, setMode] = useState("dark")
//     const toggle = () => {
//         setMode((prev) => (prev === "dark" ? "light" : "dark"));
//     };
//     useEffect(() => {
//         document.body.style.backgroundColor = "dark" ? 'black' : 'white';
//       }, [mode]);

//     return(
//         <ThemeContext.Provider value={{ toggle,mode} }>
//             <div className={`theme ${mode}`}>
//                 {children}
//             </div>
//         </ThemeContext.Provider>
//     )
// }

import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState("dark");

  const toggle = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    document.body.style.backgroundColor = mode === "dark" ? "black" : "white";
  }, [mode]);

  return (
    <ThemeContext.Provider value={{ toggle, mode }}>
      <div className={`theme ${mode}`}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};
