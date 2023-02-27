import React, { useEffect, useState } from "react";
import {auth,provider} from "./firebase";
import {signInWithPopup} from "firebase/auth";
import Home from "./Home";

function SignIn(){
    const [value,setValue] = useState('')
    const handleClick =()=>{
        signInWithPopup(auth,provider).then((data)=>{
            setValue(data.user.email)
            localStorage.setItem("email",data.user.email)
        })
    }

    useEffect(()=>{
        setValue(localStorage.getItem('email'))
    })

return (
    <div>
        <center>
        {value?<Home/>:
        <button onClick={handleClick}><i class="ri-google-line"></i>&nbsp;Signin With Google</button>
        }
        </center>
    </div>
);
}
export default SignIn;