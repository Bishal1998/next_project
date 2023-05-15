'use client';

import { useState } from 'react'
import Link from "next/link";
import { BiHide, BiShow } from 'react-icons/bi'

const Form = () => {


    const [show, setShow] = useState(false)

    return (
        <form action="" className="flex flex-col  justify-center items-center">
            <p className="mb-4 flex flex-col">
                <label htmlFor="name" className="font-normal text-base">Full Name</label>
                <input type="text" name="name" id="name" placeholder="Ade Tiger" className="text-xs font-normal text-placeholder shadow-box w-[400px] h-10 rounded p-4 border border-placeholder outline-none
                mt-1" />
            </p>
            <p className="mb-4 flex flex-col">
                <label htmlFor="email" className="font-normal text-base">Email address</label>
                <input type="email" name="email" id="email" placeholder="yourname@email.com" className="text-xs font-normal text-placeholder shadow-box w-[400px] h-10 rounded p-4 border border-placeholder outline-none
                mt-1"  />
            </p>
            <p className="mb-4 flex flex-col">
                <label htmlFor="phone" className="font-normal text-base">Phone Number</label>
                <input type="phone" name="phone" id="phone" placeholder="80027389700" className="text-xs font-normal text-placeholder shadow-box w-[400px] h-10 rounded p-4 border border-placeholder outline-none
                mt-1"  />
            </p>
            <div className="mb-4 flex flex-col">
                <label htmlFor="password" className="font-normal text-base">Create pasword</label>
                <div className='flex relative'>
                    <input type={show ? 'text' : 'password'} name="password" id="password" defaultValue='password' className="text-xs font-normal text-placeholder shadow-box w-[400px] h-10 rounded p-4 border border-placeholder outline-none
                mt-1 mb-2 "  />
                    {
                        show ? <BiShow className='absolute right-2 top-3 cursor-pointer' size={20} onClick={() => setShow((prev) => !prev)} /> : <BiHide className='absolute right-2 top-3 cursor-pointer' size={20} onClick={() => setShow((prev) => !prev)} />
                    }
                </div>
                <p className="text-xs text-placeholder">Password must contain a minimum of 8 characters</p>
                <p className="text-xs text-placeholder">Password must contain at least one symbol e.g. @, !</p>
            </div>
            <p className="mb-4 flex flex-col">
                <label htmlFor="location" className="font-normal text-base">Location <span className="text-xs text-placeholder">(Optional)</span> </label>
                <select name="location" id="location" className="text-xs font-normal shadow-box text-placeholder px-4 w-[400px] h-10 rounded  border border-placeholder outline-none
                mt-1" >
                    <option value="Nepal">Nepal</option>
                    <option value="India">India</option>
                    <option value="China">China</option>
                    <option value="England">England</option>
                </select>
            </p>

            <button className="w-full shadow-rectangle bg-rectange text-white rounded p-2 mt-4 border-rectange">Sign Up</button>

            <p className="text-center mt-5 text-placeholder font-bold">Already a user? <Link href='/' className="text-link underline">Login</Link> </p>

        </form>
    )
}

export default Form