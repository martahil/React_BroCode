import React, {useState} from "react";

/*function MyComponent(){
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
    </div>);*/

    /*const [name, setName] = useState("Guest");
    const [quantity, setQuantity] = useState(1);
    const [comment, setComment] = useState("");
    const [payment, setPayment] = useState("");
    const [shipping, setShipping] = useState("Delivery");

    function handleNameChange(event){
        setName(event.target.value);
    }
    
    function handleQuantityChange(event){
        setQuantity(event.target.value);
    }

    function handleCommentChange(event){
        setComment(event.target.value);
    }

    function handlePaymentChange(event){
        setPayment(event.target.value);
    }
    
    function handleShippingChange(event){
        setShipping(event.target.value);
    }

    return(
        <div>
            <input value={name} onChange={handleNameChange}/>
            <p>Name: {name}</p>

            <input value={quantity} onChange={handleQuantityChange} type="number"/>
            <p>Quantity: {quantity}</p>

            <textarea value={comment} onChange={handleCommentChange} placeholder="Enter delivery instruction"></textarea>
            <p>Comment: {comment}</p>

            <select value={payment} onChange={handlePaymentChange}>
                <option value="">Select an option</option>
                <option value="Visa">Visa</option>
                <option value="Mastercard">Mastercard</option>
                <option value="Giftcard">Giftcard</option>
                
            </select>
            <p>Payment: {payment}</p>

            <label>
                <input type="radio" value='Pick Up' 
                checked={shipping === "Pick Up"}
                onChange={handleShippingChange}/>

                Pick Up
            </label><br />
            <label>
                <input type="radio" value='Delivery' 
                checked={shipping === "Delivery"}
                onChange={handleShippingChange}/>

                Delivery
            </label>
            <p>Shipping: {shipping}</p>

        </div>
    );

}

export default MyComponent*/

/* 11)

function MyComponent(){
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(c => c+ 1); //"c" represent the previous count (and not the count)
        setCount(c => c+ 1);
        setCount(c => c+ 1); //with these three lines, it will increase by 3 times
    }

    const decrement = () => {
        setCount(c => c - 1);
        setCount(c => c - 1);
        setCount(c => c - 1);
    }

    const reset = () => {
        setCount(0);
        //setCount(c => c = 0); //here we won't need the previous state, so the updater function is unnecessary
    }

    return(<div className="counter-container">
        <p className="count-display">{count}</p>
        <button className="counter-button" onClick={decrement}>Drecrement</button>
        <button className="counter-button" onClick={reset}>Reset</button>
        <button className="counter-button" onClick={increment}>Increment</button>
    </div>);
}

export default MyComponent*/

/* 12) */

function MyComponent(){
    const [car, setCar] = useState({year: 2024, make: "Ford", model: "Mustang"});

    function handleYearChange(event){
        setCar(c => ({...c, year: event.target.value}));
    }
    function handleMakeChange(event){
        setCar(c => ({...c, make: event.target.value}))
    }
    function handleModelChange(event){
        setCar(c => ({...c, model: event.target.value}))
    }

    return (<div>
        <p>Your favorite car is: {car.year} {car.make} {car.model}</p>
        <input type="number" value={car.year} onChange={handleYearChange}/><br />
        <input type="text" value={car.make} onChange={handleMakeChange}/><br />
        <input type="text" value={car.model} onChange={handleModelChange}/><br />
        </div>);
}

export default MyComponent