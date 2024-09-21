import { ChangeEvent, useState } from "react";
import Qoute from "../components/Qoute";
import { signupInput } from "rayan9064_medium-common";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { BACKEND_URL } from "../config";

export function Auth({ type }: { type: "signin" | "signup" }) {
    const navigate = useNavigate();
    const [postInputs, setPostInputs] = useState<signupInput>({
        email: "",
        name: "",
        password: "", 
    });

    async function sendRequest() {
        try {
            const response = await axios.post(`${BACKEND_URL}/api/user/${type === "signin" ? "signin" : "signup"}`, postInputs);
            const jwt = response.data.jwt;
            localStorage.setItem("token", jwt);
            navigate("/blogs");
        } catch(e) {
            console.log(e)
        } 
    }

    return (
        <div className=" grid grid-cols-2">
            <div className=" flex flex-col items-center justify-center">
                <div>
                    <div className=" px-4">
                        {/* {JSON.stringify(postInputs)} */}
                        <div className=" text-3xl font-bold">
                            {type === "signin"
                                ? "Login to your account"
                                : "Create an account"}
                        </div>
                        <div className=" text-slate-700 text-center">
                            {type === "signin"
                                ? "Dont have an account?"
                                : "Already have an account?"}
                            <Link
                                className=" px-1 underline  font-normal"
                                to={type === "signin" ? "/signup" : "/signin"}
                            >
                                {type === "signin" ? "Sign up" : "Sign in"}
                            </Link>
                        </div>
                    </div>
                    <div>
                        <LabelledInput
                            label="Email"
                            placeholder="Enter email"
                            onChange={(e) => {
                                setPostInputs({
                                    ...postInputs,
                                    email: e.target.value,
                                });
                            }}
                        />
                        {type === "signup" ? (
                            <LabelledInput
                                label="Name"
                                placeholder="Enter your name"
                                onChange={(e) => {
                                    setPostInputs({
                                        ...postInputs,
                                        name: e.target.value,
                                    });
                                }}
                            />
                        ) : (
                            ""
                        )}
                        <LabelledInput
                            label="Password"
                            placeholder="Enter password"
                            onChange={(e) => {
                                setPostInputs({
                                    ...postInputs,
                                    password: e.target.value,
                                });
                            }}
                        />
                    </div>
                <button
                    type="button"
                    onClick={sendRequest}
                    className="text-white w-full my-3 bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
                    //  dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700
                >
                    {type === "signin" ? "Login" : "Signup"}
                </button>
                </div>
            </div>
            <Qoute />
        </div>
    );
}

interface LabelledInputType {
    label: string;
    placeholder: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

function LabelledInput({ label, placeholder, onChange }: LabelledInputType) {
    return (
        <div className=" my-2">
            <label
                htmlFor={label}
                className="block mb-0.5 pl-1 font-medium text-gray-900"
            >
                {label}
            </label>
            <input
                id={label}
                type="text"
                onChange={onChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
                //  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500
                placeholder={placeholder}
                required
            />
        </div>
    );
}
