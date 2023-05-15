"use client";

import Link from "next/link"


const Navbar = () => {
    return (
        <header className="w-full px-4 flex justify-between items-center max-w-7xl my-0 mx-auto py-4">
            <div className="font-bold text-2xl bg-clip-text bg-gradient-to-r from-slate-500 to-slate-700 text-transparent">Kreativ</div>
            <nav className="flex gap-4 text-base font-bold text-white">
                <Link href='/'>Home</Link>
                <Link href='/'>Contact</Link>
            </nav>
        </header>
    )
}

export default Navbar