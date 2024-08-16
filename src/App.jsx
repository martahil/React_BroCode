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

/* 5) 
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

export default App*/

/* 6) 
import List from "./List.jsx";

function App() {

  const fruits = [{id: 1, name: 'apple', calories: 95}, 
                  {id: 2, name: 'orange', calories: 45}, 
                  {id: 3, name: 'banana', calories: 105}, 
                  {id: 4, name: 'coconut', calories: 159}, 
                  {id: 5, name: 'pineapple', calories: 37}];

  const vegetables = [{id: 6, name: 'potatoes', calories: 110}, 
                      {id: 7, name: 'celery', calories: 15}, 
                      {id: 8, name: 'carrots', calories: 25}, 
                      {id: 9, name: 'corn', calories: 63}, 
                      {id: 10, name: 'broccoli', calories: 50}];

  return(
    <>
      {//<List items={fruits} category="Fruits"/>}
      {//fruits.length > 0 ? <List items={fruits} category="Fruits"/> : null}
      {fruits.length > 0 && <List items={fruits} category="Fruits"/>}
      {vegetables.length > 0 ? <List items={vegetables} category="Vegetables"/> : null}

    </>
  ); 
}

export default App*/

/* 7)
import Button from "./Button.jsx";
import ProfilePicture from "./ProfilePicture.jsx";

function App() {  

  return(       
    //<Button/>
    <ProfilePicture/>
  ); 
}

export default App*/ 

/* 8) & 9)
import MyComponent from "./MyComponent.jsx";
import Counter from "./Counter.jsx";

function App() {  

  return(      
    <MyComponent/>
    //<Counter/>
  ); 
}

export default App*/

/* 10)
import ColorPicker from "./ColorPicker.jsx"

function App() {  

  return(      
    <ColorPicker/>
  ); 
}

export default App*/ 

/* 11) 12) 13) 14)
import MyComponent from "./MyComponent.jsx"

function App() {  

  return(      
    <MyComponent/>
  ); 
}

export default App */

/* 15)*/
import ToDoList from "./ToDoList.jsx"

function App() {
  return(<ToDoList />)
}

export default App





