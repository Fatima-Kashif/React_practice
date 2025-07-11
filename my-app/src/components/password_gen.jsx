import { useCallback, useEffect, useState, useRef } from "react";

function PasswordGenerator () {
  let [length, setLength] = useState(6);
  let [numcheck, setNumcheck] = useState(false);
  let [charcheck, setCharcheck] = useState(false);
  let [password, setPassword] = useState("");
  let passref=useRef('')
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  if (numcheck) {
    str += "1234567890"; // this is the logic if num s checked we add number to aour string so that it can also pick random randomly
  }
  if (charcheck) {
    str += "!@#$%^&*()/"; 
  }
  let char=''
  function pass_gen () {
    for (let i = 0; i <= length; i++) {
      let index=Math.floor(Math.random() * str.length + 1);// this is giving us a random number
      char+=str.charAt(index)  //picking up a character from the index that is randomly genrated
    }
    setPassword(char) // setting the password to char
  }
  function copy(){
    passref.current.select() //useRef gives us a current object in which the DOM element is there whose reference is given
    window.navigator.clipboard.writeText(password)

}
useEffect(pass_gen,[length,numcheck,charcheck])
useCallback(pass_gen,[length,numcheck,charcheck])
useCallback(copy,[password])
  return (
    <>
      <div className="h-screen width-full bg-gray-800 flex items-center justify-center ">
        <div className="p-15 bg-gray-600 rounded-3xl text-amber-50">
          <p className="text-2xl text-center mb-10">Password Generator</p>
          <div className="mb-10">
            <input
              className=" bg-gray-400 mr-4 w-[350px] rounded-md p-2"
              type="text"
              placeholder="Password"
              value={password}
              ref={passref}
            />
            <button className="cursor-pointer" onClick={copy}>Copy</button>
          </div>

          <div className="flex gap-3">
            <input
              type="range"
              value={length}
              min={6}
              max={16}
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label htmlFor="length">Length: {length}</label>
            <input type="checkbox" onChange={()=>{
                setNumcheck((prev)=>!prev) // prev is given by default it os not necessary to name the value prev it gives the previous value of the state so whatever the name we can give this
            }} />
            <label htmlFor="numbers">Numbers</label>
            <input type="checkbox" onChange={()=>{
                setCharcheck((prev)=>!prev)
            }}/>
            <label htmlFor="numbers">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}
export default PasswordGenerator;
