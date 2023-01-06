import { createContext, useContext } from 'react';

type UserContextProps = {
	children: React.ReactNode;
};

const UserDataContext = createContext({});
export const useUserData = () => {
	return useContext(UserDataContext);
};

// return calculate: number of users, number of active users, number of users with savings, users with savings
// pass this data to
// retrieve all the

export const UserContextProvider = ({ children }: UserContextProps) => {
	return (
		<UserDataContext.Provider value={{}}>{children}</UserDataContext.Provider>
	);
};
