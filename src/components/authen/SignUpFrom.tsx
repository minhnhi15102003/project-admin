import { Link } from "react-router-dom"
import Label from "../from/Label"
import InputField from "../from/input/InputField"
import { useState } from "react"
import { ChevronLeftIcon, EyeCloseIcon, EyeIcon } from "../../icon"
import Button from "../ui/Button/Button"

const SignUpFrom = () => {
    const [showPassword, setShowPassword] = useState(true)
    return (
        <div className="flex">
            <div className="flex flex-col flex-1 w-full overflow-y-auto lg:w-1/2 no-scrollbar">
                <div className="w-full max-w-md mx-auto mb-15 sm:pt-10">
                    <Link
                        to="/"
                        className="inline-flex items-center text-sm text-gray-500 transition-colors hover:text-gray-700"
                    >
                        <ChevronLeftIcon className="size-5 mr-1" />
                        Back to dashboard
                    </Link>
                </div>

                <div className="flex flex-col flex-1 mb-10 w-full max-w-md mx-auto">
                    <div className="flex flex-col gap-2 mb-10 w-full">
                        <h1 className="mb-2 lg:text-black lg:text-4xl font-medium sm:text-3xl">Sign Up</h1>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            Enter your email and password to sign up!
                        </p>
                    </div>

                    <form className="space-y-5">
                        {/* USERNAME + PHONE */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full">
                            <div className="sm:col-span-1">
                                <Label htmlFor="fname" className="block font-medium mb-3">
                                    User Name <span className="text-red-800">*</span>
                                </Label>
                                <InputField
                                    onChange={() => { }}
                                    type="text"
                                    id="fname"
                                    name="fname"
                                    placeholder="Enter your user name"
                                    className=""
                                />
                            </div>

                            <div className="sm:col-span-1">
                                <Label htmlFor="lname" className="block font-medium mb-3">
                                    Phone <span className="text-red-800">*</span>
                                </Label>
                                <InputField
                                    onChange={() => { }}
                                    type="text"
                                    id="lname"
                                    name="lname"
                                    placeholder="Enter your phone"
                                    className=""
                                />
                            </div>
                        </div>

                        {/* EMAIL */}
                        <div>
                            <Label htmlFor="email" className="block font-medium mb-3">
                                Email <span className="text-red-800">*</span>
                            </Label>
                            <InputField
                                onChange={() => { }}
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Enter your email"
                                className=""
                            />
                        </div>

                        {/* PASSWORD */}
                        <div>
                            <Label htmlFor="password" className="block font-medium mb-3">
                                Password <span className="text-red-800">*</span>
                            </Label>
                            <div className="relative ">
                                <InputField
                                    onChange={() => { }}
                                    type={showPassword ? "text" : "password"}
                                    id="password"
                                    name="password"
                                    placeholder="Enter your password"
                                    className=""
                                />
                                <span
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"

                                >
                                    {showPassword ? (
                                        <EyeIcon className="fill-gray-500 size-5" />
                                    ) : (
                                        <EyeCloseIcon className="fill-gray-500 size-5" />
                                    )}
                                </span>
                            </div>
                        </div>

                        {/* BUTTON */}
                        <div className="bg-[#4056e6] rounded-xl hover:bg-blue-800 focus:bg-blue-800">
                            <Button
                                // type="submit"
                                className="cursor-pointer w-full px-4 py-2 text-white bg-brand-500 rounded-lg hover:bg-brand-900 transition"
                            >
                                Sign Up
                            </Button>
                        </div>
                    </form>

                    {/* SIGN IN LINK */}
                    <div className="mt-5">
                        <p className="text-sm font-normal text-center text-gray-700">
                            Already have an account?{" "}
                            <Link
                                to="/signin"
                                className="text-blue-600 hover:text-blue-700 font-medium"
                            >
                                Sign In
                            </Link>
                        </p>
                    </div>
                </div>

            </div>
            <div className="items-center h-screen w-full lg:w-1/2 bg-blue-950 lg:grid sm:hidden"></div>
        </div>
    )
}

export default SignUpFrom