import React from 'react'
import {createContext, useEffect, useState } from "react"

export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("light")

    const toggleTheme = () => {
        setTheme(prev => (prev === "light" ? "dark" : "light"))
    }

    //Applying theme to whole app
    useEffect (() => {
        document.documentElement.setAttribute("data-theme", theme)
    }, [theme])

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme}} >
            {children}
        </ThemeContext.Provider>
    )
}
