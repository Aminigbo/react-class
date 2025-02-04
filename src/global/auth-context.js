import React, { createContext, useState } from "react";

// create context
const AuthContext = createContext()

export function AuthProvider({children}) {
    const [isAuth, setisAuth] = React.useState(false)
    const [userData, setuserData] = useState({
        name: 'John Doe',
        age: 25,
        email: "test@gmail.com"
    })
    const login = () => { setisAuth(true) }
    const logout = () => { setisAuth(false) }
    let updateUserData = (newData) => {
        setuserData({
            ...userData,
            ...newData
        })
    }

    return (
        <AuthContext.Provider value={{ isAuth, login, logout, updateUserData, userData }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;