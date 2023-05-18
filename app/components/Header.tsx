'use client';

import { useContext } from "react";
import { AppContext } from "@/context/Context";

const Header = () => {

    const { login } = useContext(AppContext)

    return (
        <header className="text-5xl pb-2">
            {
                login ? 'Log in' : 'Register'
            }
        </header>
    )
}

export default Header