import React, {useState} from "react";

function MyComponent(){
    const [name, setName] = useState('Guest');
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false);

    const updateName = () => {
        //name = "Spongebob";
        //console.log(name);
        setName('Spongebob');
    }

    const incrementAge = () => {       
        //setAge(age + 1);
        setAge(age + 2);
    }

    const toggleEmployedstatus = () => {   
        setIsEmployed(!isEmployed);
    }

    return (<div>
        <p>Name: {name}</p>
        <button onClick={updateName}>Set name</button>

        <p>Age: {age}</p>
        <button onClick={incrementAge}>Increment Age</button>

        <p>Is employed: {isEmployed ? "Yes" : "No"}</p>
        <button onClick={toggleEmployedstatus}>Toggle Status</button>
    </div>);
}

export default MyComponent