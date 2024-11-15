import React from 'react';
function Class2(){
    let age=18;
    let name="Sanmitra";
    let setStatus=false;
    let userDefault=undefined;
    let responseValue=null;
    console.log(age+" "+name+" "+setStatus+" "+userDefault+" "+responseValue);
    let oldage=age;
    age=25;
    let status=setStatus;
    setStatus=true;
    console.log(age+" "+name+" "+setStatus+" "+userDefault+" "+responseValue);
    alert("Check the console output");
}
function Hw2(){
    return(
        <div>
            <button onClick={Class2}>Hw2</button>
        </div>
    )
}
export default Hw2;