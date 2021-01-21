import React,{useState} from 'react';
import Tweet from './Tweet';
import "./App.css";

function App() {
  // const Hello= ()=>{
  //   console.log('hello');
  // }
  const [isRed,setRed]=useState(false);//declaring states. States baiscally can render change in the html
  const [count,setCount]=useState(0);
  const increment=()=>{// changing state variablse
    setCount(count+1);
    setRed(!isRed);
  }
  const [users,setUsers]= useState([
    {
      name:"Ed",message: "Hello there",
    },
    {
      name:"Edd",message: "Hello Bro",
    },
    {
      name:"Eddd",message: "Yooooooooo",
    },
    {
      name:"Edddy",message: "Ssup",
    }
  ]);

  return (
    <div className="app">
      {/* //Adding stule form app.js we provide a classname */}
      {/* <h1>Hello React</h1>
      <button onClick={Hello}>Hello</button>   */}

      {/* <Tweet name="Srv" message="Yo yoy yo" />   <Tweet name="Rv" message="Beta baap" /> <Tweet name="Sr" message="Wada wau" /> <Tweet name="Ram" message="Rahs" /> */}
      {/* how we use external Tweet js */}
      {/* <h1 className={isRed? "red":""}>
        Change Color!!
      </h1>

      <button onClick={increment}>Increment</button>
      <h1>{count}</h1> */}
      {
        users.map(user=>(
          <Tweet name={user.name} message={user.message}/>// As users is the name of our state variable that provides us values of useState which is a list of maps. Tweets is ours js where we send the state data in props
        ))
      }

    
    </div>
    
  );
}

export default App;