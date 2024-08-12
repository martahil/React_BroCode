/* 1)
import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
import Food from "./Food.jsx"

function App() {
  return(
    <>
      <Header/>
      <Food/>
      <Food/>
      <Footer/>
    </>
  );
  
}

export default App*/

//import UserGreeting from "./UserGreeting";

/* 2)
import Card from './Card.jsx'

function App() {
  return(
    <>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
    </>
  );
  
}

export default App*/

//1. EXTERNAL
//2. MODULES
//3. INLINE

/* 3) 
import Button from './Button.jsx'

function App() {
  return(<><Button/></>);  
}

export default App*/

/* 4) 
import Student from './Student.jsx'

function App() {
  return(
    <>
      <Student name='Spongebob' age={30} isStudent={true}/>

      {//if age is nor a number ('30' is a string), the console will show a Warning:
      //<Student name='Spongebob' age='30' isStudent={true}/>
      //react-jsx-dev-runtime.development.js:87  Warning: Failed prop type: 
      //Invalid prop `age` of type `string` supplied to `Student`, expected `number`.}

      <Student name='Patrick' age={42} isStudent={false}/>
      <Student name='Squidward' age={50} isStudent={false}/>
      <Student name='Sandy' age={27} isStudent={true}/>
      <Student name='Larry'/>
    </>
  ); 
}

export default App*/

import UserGreeting from './UserGreeting.jsx'

function App() {
  return(
    <>
      <UserGreeting isLoggedIn={true} username="BroCode"/>      

      {//<UserGreeting isLoggedIn={false} username="BroCode"/>
      //if isLoggedIn={false}, "Please log in to continue" will appear in the webpage
      }    
    </>
  ); 
}

export default App



