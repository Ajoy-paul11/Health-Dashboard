import { useState, useEffect } from "react";

import Input from "./components/Input.jsx";
import Dropdown from "./components/Dropdown.jsx";
import Document from "./components/Document.jsx";
import { ThemeProvider } from "./context/theme.js";
import ThemeBtn from "./components/ThemeBtn.jsx";

function App() {
  const [themeMode, setThemeMode] = useState("light");

  const lightTheme = () => {
    setThemeMode("light");
  };
  const darkTheme = () => {
    setThemeMode("dark");
  };

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <div className=" h-screen bg-[url('https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center bg-no-repeat pt-10 font-serif">
        <div className=" absolute right-[22%] top-[12px]">
          <ThemeBtn />
        </div>
        <div className=" max-w-screen-md bg-[#F5F5DC] dark:bg-[#202829] p-4 mx-auto rounded-xl">
          <h1 className=" font-bold text-4xl text-center p-4 text-[#202829] dark:text-[#fffff9]">
            Healthcare Dashboard
          </h1>
          <Input />
          <Dropdown />
          <Document />
          <div className=" flex justify-center p-4">
            <button className=" bg-blue-600 text-[#fffff9] text-lg font-medium py-3 px-2 rounded-lg">
              Submit Patient Information
            </button>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
