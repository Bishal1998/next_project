'use client';

import { FaEnvelopeOpen } from "react-icons/fa";
import { RiLockPasswordFill } from 'react-icons/ri'
import { BsFillPersonFill } from 'react-icons/bs'
import { useContext } from "react";
import { AppContext } from "@/context/Context";
import { useForm } from 'react-hook-form'

interface RegisterProps {
    name?: String,
    email: String,
    password: String
}

interface LoginProps {
    email: String,
    password: String
    // name?: String
}

const Form = () => {

    const { login } = useContext(AppContext);


    const form = useForm<LoginProps | RegisterProps>();

    const { register, handleSubmit, formState } = form;
    const { errors } = formState;


    const handledata = (data: LoginProps | RegisterProps) => {
        console.log(login ? 'Login' : 'Register', data)
    }

    const handleLogin = (data: LoginProps) => {
        console.log('Login Form Submitted', data)
    }

    const handleRegister = (data: RegisterProps) => {
        console.log('Register Form Submitted', data)
    }


    return (
        <form className="flex flex-col items-center justify-center gap-8" onSubmit={handleSubmit(login ? handleLogin : handleRegister)} noValidate>
            {
                !login && (
                    <section className="flex flex-col">
                        <label htmlFor="name" className="text-2xl mb-2">Full Name</label>
                        <div className="w-full flex md:w-[507px] h-16 items-center gap-3 border-4 rounded-2xl pl-6">
                            <BsFillPersonFill size={25} />
                            <div className="border-r-2 h-7 mt-1" />
                            <input type="text" placeholder="John Doe" className="text-2xl border-none outline-none text-white" id="name" {...register('name', { required: 'Name is required' })} />
                        </div>
                        {/* <p>{errors.}</p> */}
                    </section>
                )
            }
            <section className="flex flex-col">
                <label htmlFor="email" className="text-2xl mb-2">Email</label>
                <div className="w-full flex md:w-[507px] h-16 items-center gap-3 border-4 rounded-2xl pl-6">
                    <FaEnvelopeOpen size={25} />
                    <div className="border-r-2 h-7 mt-1" />
                    <input type="email" placeholder="example@gmail.com" className="text-2xl border-none outline-none text-white" id="email" {...register('email', { required: 'Email is required' })} />
                </div>
                <p>{errors.email?.message}</p>
            </section>
            <section className="flex flex-col">
                <label htmlFor="password" className="text-2xl text-password mb-2">Password</label>
                <div className="w-full flex md:w-[507px] h-16 items-center gap-3 border-4 rounded-2xl pl-6 border-password">
                    <RiLockPasswordFill size={25} />
                    <div className="border-r-2 h-7 mt-1 border-password" />
                    <input type="password" placeholder="********" className="text-2xl border-none outline-none text-password" id="password" {...register('password', { required: 'Password is required' })} />
                </div>
                <p>{errors.password?.message}</p>
                {
                    login && <p className="text-right text-login text-xl cursor-pointer">Forgot Password?</p>
                }
            </section>

            <button className="bg-login w-full md:w-[490px] h-[68px] rounded-2xl text-2xl md:text-3xl">{login ? 'Log in' : 'Register'}</button>
        </form>
    )
}

export default Form