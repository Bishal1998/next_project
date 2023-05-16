'use client';

import { FaEnvelopeOpen } from "react-icons/fa";
import { RiLockPasswordFill } from 'react-icons/ri'

const Form = () => {
    return (
        <form className="flex flex-col items-center justify-center gap-8">
            <section className="flex flex-col">
                <label htmlFor="email" className="text-2xl mb-2">Email</label>
                <div className="w-full flex md:w-[507px] h-16 items-center gap-3 border-4 rounded-2xl pl-6">
                    <FaEnvelopeOpen size={25} />
                    <div className="border-r-2 h-7 mt-1" />
                    <input type="email" placeholder="example@gmail.com" className="text-2xl border-none outline-none text-white" />
                </div>
            </section>
            <section className="flex flex-col">
                <label htmlFor="password" className="text-2xl text-password mb-2">Password</label>
                <div className="w-full flex md:w-[507px] h-16 items-center gap-3 border-4 rounded-2xl pl-6 border-password">
                    <RiLockPasswordFill size={25} />
                    <div className="border-r-2 h-7 mt-1 border-password" />
                    <input type="password" placeholder="********" className="text-2xl border-none outline-none text-password" />
                </div>
                <p className="text-right text-login text-xl cursor-pointer">Forgot Password?</p>
            </section>

            <button className="bg-login w-full md:w-[490px] h-[68px] rounded-2xl text-2xl md:text-3xl">Log in</button>
        </form>
    )
}

export default Form