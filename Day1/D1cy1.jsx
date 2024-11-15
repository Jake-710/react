import React from 'react';
function Chall(){
    const name1="Priya";
    const name2="Priya";
    const primitive=name1===name2;
    const object1={name:"Sanmitra"};
    const object2={name:"Sanmitra"};
    const reference=object1===object2;
    console.log(primitive);
    console.log(reference);
} 
function Cy1(){
    return(
        <div>
            <button onClick={Chall}>Cy1</button>
        </div>
    )
}
export default Cy1;