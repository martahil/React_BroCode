//import React, {useState} from "react";

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

/* 12) 

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

export default MyComponent*/

/* 13)
function MyComponent(){
    const [foods, setFoods] = useState(["Apple", "Orange", "Banana"]);

    function handleAddFood(){
        const newFood = document.getElementById('foodInput').value;
        document.getElementById('foodInput').value = "";

        setFoods(f => [...f, newFood]);
    }
    function handleRemoveFood(index){
        setFoods(foods.filter((_, i) => i !== index)); //_ is uded for a parameter if you want to indicate that the parameter being past to the function is ignored
    }

    return(<div>
        <h2>List of Food</h2>
        <ul>
            {foods.map((food, index) => 
            <li key={index} onClick={() => handleRemoveFood(index)}>
                {food}
            </li>)}
        </ul>
        <input type="text" id="foodInput" placeholder="Enter food name"/>
        <button onClick={handleAddFood}>
            Add Food
        </button>

    </div>);
} 

export default MyComponent*/

/* 14) 
function MyComponent(){
    const [cars, setCars] = useState([]);
    const [carYear, setCarYear] = useState(new Date().getFullYear());
    const [carMake, setCarMake] = useState("");
    const [carModel, setCarModel] = useState("");

    function handleAddCar(){
        const newCar = {year: carYear,
                        make: carMake,
                        model: carModel};
        setCars(c => [...c, newCar]);

        setCarYear(new Date().getFullYear());
        setCarMake("");
        setCarModel("");
    
    }

    function handleRemoveCar(index){
        setCars(c => c.filter((_, i) => i !== index));
    }

    function handleYearChange(event){
        setCarYear(event.target.value);
    }

    function handleMakeChange(event){
        setCarMake(event.target.value);
    }

    function handleModelChange(event){
        setCarModel(event.target.value);
    }

    return(
        <div>
            <h2>List of Car Objects</h2>
            <ul>
                {cars.map((car, index) => 
                    <li key={index} onClick={() => handleRemoveCar(index)}>
                        {car.year} {car.make} {car.model}
                    </li>)}
            </ul>

            <input type="number" value={carYear} onChange={handleYearChange}/><br />
            <input type="text" value={carMake} onChange={handleMakeChange}
                placeholder="Enter car make"/><br />
            <input type="text" value={carModel} onChange={handleModelChange}
                placeholder="Enter car model"/><br />
            <button onClick={handleAddCar}>Add Car</button>
        </div>
    );
}

export default MyComponent*/

/* 16) 
import React, {useState, useEffect} from "react";

function MyComponent(){

    //const [count, setCount] = useState(0);
    //const [color, setColor] = useState('green');

    /*useEffect(() => {
        document.title = `Count: ${count}`;
    });*/
    /*useEffect(() => {
        document.title = `My Counter Program`;
    }, []);*/
    /*useEffect(() => {
        document.title = `Count: ${count}`;
    }, [count]);*/
    /*useEffect(() => {
        document.title = `Count: ${count} ${color}`;
    }, [count, color]);*/

    /*function addCount(){
        setCount(c => c + 1);
    }

    function subtractCount(){
        setCount(c => c - 1);
    }

    function changeColor(){
        setColor(c => c === "green" ? "red" : "green");
    }

    const [width, setWidth] = useState(window.innerWidth);
    const [heigth, setHeigth] = useState(window.innerHeight);

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        console.log("EVENT LISTENER ADDED");

        return () => {
            window.removeEventListener("resize", handleResize);
            console.log("EVENT LISTENER REMOVED");
        }
    }, []);  

    useEffect(() => {
        document.title = `Size:${width} X ${heigth}`;
    }, [width, heigth]);

    function handleResize(){
        setWidth(window.innerWidth);
        setHeigth(window.innerHeight);
    }

    return (<>
        {//<p style={{color: color}}>Count: {count}</p>
        //<button onClick={addCount}>Add</button>
        //<button onClick={subtractCount}>Subtract</button><br />
        //<button onClick={changeColor}>Change Color</button>}

        <p>Window Width: {width}px</p>
        <p>Window Heigth: {heigth}px</p>
    </>);
}

export default MyComponent */

/* 19) */
import React, {useState, useEffect, useRef} from "react";

function MyComponent(){

    //let [number, setNumber] = useState(0);
    //const ref = useRef(0);
    //const ref = useRef("Pizza");
    //const inputRef = useRef(null);
    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
    const inputRef3 = useRef(null);

    //console.log(ref);

    useEffect(() => {
        console.log('COMPONENT RENDERED')
        //console.log(inputRef);
    });

    //function handleClick(){
        //setNumber(n => n + 1);
        //ref.current++;
        //console.log(ref.current);
        //inputRef.current.focus();
        //inputRef.current.style.backgroundColor = 'yellow';
    //}
    function handleClick1(){
        inputRef1.current.focus();
        inputRef1.current.style.backgroundColor = 'yellow';
        inputRef2.current.style.backgroundColor = '';
        inputRef3.current.style.backgroundColor = '';
    }
    function handleClick2(){
        inputRef2.current.focus();
        inputRef2.current.style.backgroundColor = 'yellow';
        inputRef1.current.style.backgroundColor = '';
        inputRef3.current.style.backgroundColor = '';
    }
    function handleClick3(){
        inputRef3.current.focus();
        inputRef3.current.style.backgroundColor = 'yellow';
        inputRef1.current.style.backgroundColor = '';
        inputRef2.current.style.backgroundColor = '';
    }

    return(
        <div>
            <button onClick={handleClick1}>Click me 1!</button>
            <input ref={inputRef1}/>

            <button onClick={handleClick2}>Click me 2!</button>
            <input ref={inputRef2}/>

            <button onClick={handleClick3}>Click me 3!</button>
            <input ref={inputRef3}/>
        </div>
    );
}

export default MyComponent;