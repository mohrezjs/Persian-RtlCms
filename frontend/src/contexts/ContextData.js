import { createContext, useState } from "react";

export const contextData = createContext();

const DataProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(true);

    return (
        <contextData.Provider value={{ isDarkMode, setIsDarkMode }}>
            {children}
        </contextData.Provider>
    );
};

export default DataProvider;
