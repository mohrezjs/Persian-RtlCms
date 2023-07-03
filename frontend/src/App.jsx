import React, { useContext } from "react";
import routes from "./routes";
import TopBar from "./components/TopBar";
import SideBar from "./components/SideBar";
import { useRoutes } from "react-router-dom";

import { contextData } from "./contexts/ContextData";

const App = () => {
    const router = useRoutes(routes);

    const isDark = useContext(contextData);

    return (
    
            <div className={`${isDark.isDarkMode ? "dark" : null}`}>
                <main className="flex w-full h-full fixed z-0 overflow-y-auto dark:bg-darkBack bg-lightBack transition-all duration-200">
                    <SideBar />
                    <div className="bg-opacity-20 w-full flex flex-col p-4 ">
                        <TopBar />

                        {router}
                    </div>
                </main>
            </div>
       
    );
};

export default App;
