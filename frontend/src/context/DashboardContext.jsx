import { createContext, useContext, useState } from "react";

const DashboardContext = createContext();

export function DashboardProvider({ children }) {

    const [dashboard, setDashboard] = useState(null);

    return (

        <DashboardContext.Provider
            value={{
                dashboard,
                setDashboard
            }}
        >

            {children}

        </DashboardContext.Provider>

    );

}

export function useDashboard() {
    return useContext(DashboardContext);
}