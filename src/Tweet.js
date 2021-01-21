import React from 'react';
import "./App.css";
function Tweet({name,message}){//pops are like argument which we get when <Tweet propName="value">is used
    const AlertStuff=()=>{
        alert("Hello");
    }
    return(
        <div className="tweet">
            <h1>{name}</h1>
            {/* //{} for usin js and props.propname to use the prop found in app.js */}
            <button onClick={AlertStuff}>Alert</button> 
            <p>This is a random tweet</p>
            <h2>{message}</h2>
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta iste ipsum voluptatibus quae tempora cumque dolore unde repudiandae et nemo animi.</h3>
        </div>
    );
}

// function Tweet(props){//pops are like argument which we get when <Tweet propName="value">is used
//     const AlertStuff=()=>{
//         alert("Hello");
//     }
//     return(
//         <div className="tweet">
//             <h1>{props.name}</h1>
//             {/* //{} for usin js and props.propname to use the prop found in app.js */}
//             <button onClick={AlertStuff}>Alert</button> 
//             <p>This is a random tweet</p>
//             <h2>{props.message}</h2>
//             <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta iste ipsum voluptatibus quae tempora cumque dolore unde repudiandae et nemo animi.</h3>
//         </div>
//     );
// }
export default Tweet;