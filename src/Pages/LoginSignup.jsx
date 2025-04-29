

const LoginSignup = () => {
    return (
        <div className="flex justify-center gap-10">
        <div className="mt-10 mb-20">
             <h4 className="text-[16px] mb-3">Start Your Journey</h4>
             <h2 className="text-2xl font-semibold mb-10">Sign Up To SHOP Touch</h2>
            <fieldset className="fieldset w-[350px] bg-base-200 border-base-300 rounded-box border p-4">

                <label className="text-xl">Name</label>
                <input type="text" className="input" placeholder="Your Name" />

                <label className="text-xl">Email</label>
                <input type="email" className="input" placeholder="Email Address" />

                <label className="text-xl">Password</label>
                <input type="password" className="input" placeholder="Password" />

                <button className="btn text-base-100  bg-blue-600 hover:bg-base-100 hover:text-blue-600 mt-5 tracking-wide hover:tracking-normal">Continue</button>
                <h3 className="text-[16px]  mt-5">Already have an account? <span className="text-blue-600 cursor-pointer hover:underline">Sign In</span></h3>

                <div className="flex"><input type="checkbox" className="checkbox text-blue-600" />
                <p className="text-[13px] ml-2 font-light">By continuing, I agree to the terms of use</p>
                </div>
            </fieldset>
        </div>
        <div>
            <img src="/src/media/signup-cover.png" alt="signup-cover" />
        </div>
        </div>
    );
};

export default LoginSignup;