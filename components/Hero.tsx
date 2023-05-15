"use client";

import Form from "./Form";
import Quotes from "./Quotes";

const Hero = () => {
    return (
        <main className="w-full max-w-screen-xl my-0 mx-auto ">
            <section className="flex justify-around items-center mt-12 gap-8">
                <div className="flex flex-col gap-12">
                    <p className="font-bold text-2xl text-left lg:text-left pt-8">Let’s get you started</p>
                    <Form />
                </div>
                <Quotes />
            </section>
        </main>
    )
}

export default Hero