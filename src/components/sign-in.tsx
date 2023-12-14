'use client';

import { signIn } from "@/auth";




const SignIn = () => {
    return <div>
        <button onClick={() => signIn()}>sign in</button>
    </div>;
};

export default SignIn;
