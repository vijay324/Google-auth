import React from "react";

function Home(){
    const logout =()=>{
        localStorage.clear()
        window.location.reload()
    }
    return (
        <div>
            <center>
            <h1>Here your Main Website interface.</h1>
            <button onClick={logout}>Logout</button>
            </center>
        </div>
    );
}
export default Home;