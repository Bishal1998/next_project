'use client';
import { useContext, createContext, useState } from "react";

interface LoginProps {
    login: boolean
    handleChange: () => void
}

// export const handleChange = () => {

// }

export const AppContext = createContext<LoginProps>({
    login: true,
    handleChange: () => { }
});


