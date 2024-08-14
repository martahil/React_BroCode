/*function Button(){
    const styles = {        
        backgroundColor: "hsl(200, 100%, 50%)",
        color: "white",
        padding: "10px 20px",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer",         
    }

    return(<button style={styles}>Click me</button>);
}

export default Button*/ 

/* 7)*/ 

function Button(){
    
    //const handleClick = () => console.log('OUCH!');

    //const handleClick2 = (name) => console.log(`${name} stop clicking me`);
    //return(<button onClick={() => handleClick2('Bro')}>Click me 😄</button>);

    /*let count = 0;
    const handleClick = (name) => {
        if(count < 3) {
            count++;
            console.log(`${name} tou clicked me ${count} time/s`)
        }
        else{
            console.log(`${name} stop clicking me!`)
        }
    };
    return(<button onClick={() => handleClick('Bro')}>Click me 😄</button>);*/

    //const handleClick = (e) => console.log(e);
    const handleClick = (e) => e.target.textContent = "OUCH! 😢"; 
    //return(<button onClick={(e) => handleClick(e)}>Click me 😄</button>); //the console will show a lot of info about the click event
    return(<button onDoubleClick={(e) => handleClick(e)}>Click me 😄</button>); 

}

export default Button

