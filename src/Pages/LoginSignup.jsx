import { useState } from "react";

const LoginSignup = () => {

    const [state, setState] = useState("Login");
    const [formdata, setFormdata] = useState({
        username: "", password: "", email: ""
    })

    const changeHandler = (e) => {
        setFormdata({ ...formdata, [e.target.name]: [e.target.value] })
    }

    const login = async () => {
        console.log("Login Function Executed", formdata);
    }
    const signup = async () => {
        console.log("Login Function Executed", formdata);
        let responseData;
        await fetch('http://localhost:5000/signup', {
            method: 'POST',
            headers: {
                Accept: 'application/form-data',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formdata),
        }).then((response) => response.json())
            .then((data) => responseData = data)
        if (responseData.success) {
            localStorage.setItem('auth-token', responseData.token);
            window.location.replace("/");
        }
    }

    return (
        <div className="flex justify-center items-center flex-col md:flex-row gap-12 mx-4 md:mx-14 mb-10 md:mb-0">
            {/* form part */}
            <div className="mt-10 lg:mb-20 mb-5">
                <h4 className="text-[16px] mb-3">Start Your Journey</h4>
                <h2 className="text-xl sm:text-2xl font-medium sm:font-semibold mb-6 sm:mb-10">{state} To SHOP Touch</h2>
                <fieldset className="fieldset w-full max-w-[350px] bg-base-200 border-base-300 rounded-box border p-4">


                    {state === "Sign Up" ? <><label className="text-[18px] sm:text-xl">Name</label>
                        <input type="text" name="username" value={formdata.username} onChange={changeHandler} className="input w-full" placeholder="Your Name" /></> : <></>}

                    <label className="text-[18px] sm:text-xl">Email</label>
                    <input type="email" name="email" value={formdata.email} onChange={changeHandler} className="input w-full" placeholder="Email Address" />

                    <label className="text-[18px] sm:text-xl">Password</label>
                    <input type="password" name="password" value={formdata.password} onChange={changeHandler} className="input w-full" placeholder="Password" />

                    <button onClick={() => { state === "Login" ? login() : signup() }} className="btn text-base-100 bg-blue-600 hover:bg-base-100 hover:text-blue-600 mt-5 tracking-wide hover:tracking-normal w-full">Continue</button>

                    {state === "Sign Up" ? <><h3 className="text-[16px] mt-5">Already have an account? <span onClick={() => { setState("Login") }} className="text-blue-600 cursor-pointer hover:underline">Sign In</span></h3></> :
                        <><h3 className="text-[16px] mt-5">Create an account <span onClick={() => { setState("Sign Up") }} className="text-blue-600 cursor-pointer ml-2 hover:underline">Click Here</span></h3></>}

                    <div className="flex items-center">
                        <input type="checkbox" className="checkbox text-blue-600" />
                        <p className="text-[13px] ml-2 font-light">By continuing, I agree to the terms of use</p>
                    </div>
                </fieldset>
            </div>

            {/* image part */}
            <div className="hidden md:block">
                <img className="max-w-full h-auto" src="/Images/signup-cover.png" alt="signup-cover" />
            </div>
        </div>
    );
};

export default LoginSignup;