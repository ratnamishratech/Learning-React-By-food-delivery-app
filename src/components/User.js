import { useState, useEffect } from "react";

const User = ( {name} ) => {
    // 5. API call in useeffect and setinterval like things or cleanup is in return 
    useEffect(() => {
        //Api calls
        const timer = setInterval(() => {
            console.log(hey);
        }, 1000);
        console.log("useEffect");

        return () => {
            clearInterval(timer);
            console,log("useEffect Return");
           };
    }, []);

    console.log("render");

    //2. if more than one state variable
    const [count] = useState(0);
    const [count2] = useState(1);
    return (
        <div className="user-card">
            <h1>Count = {count}</h1>
            <h1>Count2 = {count2}</h1>
            <h2>Name: {name}</h2>
            <h3>Location: New-Delhi</h3>
            <h4>Contact: @vishu12march</h4>
        </div>
    );
};

export default User;