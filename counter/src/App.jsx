import {useState} from 'react';
function App() {
  let [count,setCount]=useState(0)// set default value it can array, empty string. number and even function it gives us an array on ist index variable name and on 2nd index function to set it 
function increase(){
  if(count<20){
      setCount(count+1) //now it will reflect the changes at all places where it has been used
      //when I have to change the variable I will do it using set function
      //now if I want that in this count is increased so many times I will add more lines for it.It does not make sense but there are scenarios that we have to repeat the work and do it in the same function
  // setCount(count+1)
  // setCount(count+1)
  // setCount(count+1)
  //now I am expecting that when I click increase button it will my value 4 times because I increamented it 4 times but it don't because the fiber aldo makes up a bundle then update the UI so when it makes the bundle it'll se its the samething happening everytime so it considered one and change the value by 1 if we want to really increase it 4 time there is a callback function in set function we have to use that
setCount(prevCount=>prevCount+1)
setCount(prevCount=>prevCount+1)
setCount(prevCount=>prevCount+1) // callback brackets will be include since it is one line function so not included in this
    }
  else{
    setCount(0)
  }
   console.log('clicked',count)
  // count+=1
 
}
function decrease(){
  if(count>0){
    setCount(count-1) 
    // count-=1
    console.log('clicked',count) // it is changing the valur in console but not reflecting in UI
  }
  
  else{
    setCount(0)
  }
}
//here the major issue comes that React solves it reacts when any variable changes it will update in all the places where it has been used 
// if there is change in one variable at one place react will change it everywhere it is used
// so this will be done by react hooks. All the places updates where variable has used when its value changed
//react handles UI updation
//babel:
// State and UI syncup

  return (
    <>
    <h1>Counter: {count}</h1> 
    {/* it is not  changing the value of count in UI*/}
    <button onClick={increase}>Increase</button>
    <button onClick={decrease}>Decrease</button>
    <div><p>Footer : {count}</p></div>

     
    </>
  )
}

export default App
