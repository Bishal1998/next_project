import Image from "next/image"

const Footer = () => {
    return (
        <footer>
            <div className="mt-4">
                <div className="flex justify-center items-center gap-3">
                    <hr className="w-1/2" />
                    <p className="text-2xl">Or</p>
                    <hr className="w-1/2" />
                </div>
                <div className="flex justify-center items-center gap-4">
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
                    />
                </div>
                <p className="text-2xl mt-2">
                    Don’t have an account? <span className="text-login cursor-pointer">Sign Up</span>
                </p>
            </div>
        </footer>
    )
}

export default Footer