import React, { useEffect, createContext, useContext, useState, useRef, useReducer } from 'react';
import ReactDOM from 'react-dom/client';
import Car from './Car.js';
import './my-sass.scss';

class Cars extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favoritecolor: "red"
    }; 
}



  componentDidMount() {
    setTimeout(() => {
      this.setState({favoritecolor: "yellow"});
    }, 1000)
}


  getSnapshotBeforeUpdate(prevProps, prevState) {
    document.getElementById("div1").innerHTML =
    "Before the update, the favorite was" + prevState.favoritecolor;
}

  componentDidUpdate() {
    document.getElementById("div2").innerHTML = 
    "The updated favorite is " + this.state.favoritecolor;
}

  render() {
    return (
      <div>
      <h1>My Favorite Color is {this.state.favoritecolor}</h1>
      <div id="div1"></div>
      <div id="div2"></div>
      </div>
    );
  }
}




function Auto(props) {
  return <h2>Hi, I am a {this.props.color} Car!</h2>;

}


class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = {show: true};
    }


    delHeader = () => {
        this.setState({show: false});
    }


    render() {
        let myheader;
        if (this.state.show) {
            myheader = <Child />;
        };
    return (
        <div> 
        {myheader}
        <button type="button" onClick={this.delHeder}>Delete</button>
        </div>
    );
  }
}


class Child extends React.Component {
    componentWillUnmount() {
        alert("The component named Header is about to be unmounted.");
    }

    render() {
        return (
            <h1>Hello World!</h1>
        );
    }
}


function Automobile(props) {
  return <li>I am a { props.brand } </li>;
}
  
function Garages() {
  const cars = ['Ford', 'Bmw', 'Audi'];
    return (
      <>
        <h1>Who lives in my garage?</h1>
        <ul>
          {cars.map((car) => <Automobile brand={car} />)}
        </ul>
      
      </>
    );
}



function MyForm() {
  const [inputs, setInputs] = useState({});


  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
    
  }  

  const handleSumbit = (event) => {
    event.preventDefault();
    alert(inputs);
  }

  return (
    <form onSubmit={handleSumbit}>
      <label>Enter your name:
        <input 
        type="text" 
        name="username"
        value={inputs.username || ""}
        onChange={handleChange}
        />
      </label>
      <input type="submit" />
    </form>
  )
}


const  App = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState(["todo 1", "todo 2"]);


  const increment = () => {
      setCount((c) => c + 1);

    };


  return (
    <>
      <Todos todos={todos} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
        </div>
    </>
    );

  };


  const Header = () => {
    const myStyle = {
      color: "white",
      backgroundColor: "DodgerBlue", 
      padding: "10 px",
      fontFamily: "Sans-Sefif"
    };

    return  (
      <>
        <h1 style={myStyle}>Hello Style!</h1>
        <p>Add a little style! </p>
      </>
    )
  }

  const Headers = () => {
    return (
      <>
        <h1>Hello Style!</h1>
        <p>Add a little style!.</p>
      </>
    );
  }



function FavoriteColor() {
  const [color, setColor] = useState("");

  return (
    <>
      <h1>My favorite color is {color}! </h1>
      <button
        type="button"
        onClick={() => setColor("blue")}>Blue</button>
    
    </>
  )
}



function Tank() {
  const [tank, setTank] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "red"
  });


  const updateColor = () => {
    setTank(previousState => {
      return {...previousState, color:"blue"}
    });
  }


  return (
    <>
      <h1>My {tank.brand}</h1>
      <p>
         It is a {tank.color} {tank.model} from {tank.year}
         </p>
        <button
          type="button"
          onClick={updateColor}>blue</button>
    
    
    
    
    </>
  )
}


function Counter() {
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);


  useEffect(() => {
    setCalculation(() => count * 2);
  }, [count]);  

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>+</button>
      <p>Calculation: {calculation}</p>
    
    
    </>
  )
}


const UserContext = createContext();


function Component1() {
  const [user, setUser] = useState("Jesse Hall");

  return (
    <UserContext.Provider value={user}>
      <h1>{`Hello ${user}!`}</h1>
      <Component2 />
    </UserContext.Provider>
  );
}


function Component2() {
  return (
    <>
      <Component3 />
    
    </>
  )
}

function Component3() {
  const user = useContext(UserContext);


  return (
    <>
      <h1>Component 3</h1>
      <h1>{`Hello ${user} again !`}</h1>
    
    </>
  );

}


function Apps() {
  const [inputValue, setInputValue] = useState("");
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  });


  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(current) => setInputValue(current.target.value)}
    
    
      />
      <h1>Render Count: {count.current}</h1>
  
</>
  );
}


function Focus() {
  const inputElement = useRef();

  const focusInput = () => {
    inputElement.current.focus();
  } 



  return (
    <>
      <input type="text" ref={inputElement} />
      <button onClick={focusInput}>Focus Input</button>
    </>
  )


};

const initialTodos = [
  {
    id: 1,
    title: "Todo 1",
    complete: false,
  },
  {
    id: 2,
    title: "Todo 2",
    complete: false,
  },
];

const reducer = (state, action) => {
  switch (action.type) {
    case "COMPLETE":
      return state.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, complete: !todo.complete };
        } else {
          return todo;
        }
      });
    default:
      return state;
  }
};

function Todos() {
  const [todos, dispatch] = useReducer(reducer, initialTodos);

  const handleComplete = (todo) => {
    dispatch({ type: "COMPLETE", id: todo.id });
  };

  return (
    <>
      {todos.map((todo) => (
        <div key={todo.id}>
          <label>
            <input
              type="checkbox"
              checked={todo.complete}
              onChange={() => handleComplete(todo)}
            />
            {todo.title}
          </label>
        </div>
      ))}
    </>
  );
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Todos />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
