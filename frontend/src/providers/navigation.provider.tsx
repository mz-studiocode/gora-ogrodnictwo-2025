'use client'

import {
    createContext,
    useContext,
    type PropsWithChildren
} from "react";

const NavigationContext = createContext({});

export const NavigationProvider = ({
	children,
}: {
	children: PropsWithChildren["children"];
}) => {
	return (
		<NavigationContext.Provider value={{}}>
			{children}
		</NavigationContext.Provider>
	);
};

export const useNavigationContext = () => useContext(NavigationContext);