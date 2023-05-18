import Image from "next/image"
import { useContext } from "react";
import { AppContext } from "@/context/Context";

const Footer = () => {

    const { login, handleChange } = useContext(AppContext);

    return (
        <footer>
            <div className="mt-4">
                <div className="flex justify-center items-center gap-3">
                    <hr className="w-1/2" />
                    <p className="text-2xl">Or</p>
                    <hr className="w-1/2" />
                </div>
                <div className="flex justify-center items-center gap-4 mt-3">
                    <Image
                        src='/Google.png'
                        width={48}
                        height={48}
                        alt="Google Logo"
                    />
                    <Image
                        src='/github.png'
                        width={48}
                        height={48}
                        alt="Github Logo"
                        className="bg-white rounded-full"
                    />
                </div>
                {
                    login ? (
                        <p className="text-2xl mt-2">
                            Don’t have an account? <span onClick={handleChange} className="text-login cursor-pointer">Sign Up</span>
                        </p>
                    )
                        :
                        (
                            <p className="text-2xl mt-2">
                                Already Have Account? <span onClick={handleChange} className="text-login cursor-pointer">Log in</span>
                            </p>
                        )
                }

            </div>
        </footer>
    )
}

export default Footer