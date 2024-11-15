import React from 'react';
const Dy=()=>{
    const imgurl="https://tse3.mm.bing.net/th?id=OIP.lhWQQ55idlTwQwmsq6q7IQHaFY&pid=Api&P=0&h=180";
    
    const a={
        backgroundColor: 'lightblue',
        width: '500px',
        height: '400px',
        padding: '100px',
        border: '1px solid blue',
      borderradius:'5px'
    };
    const b={

        border :'1px solid black',
        width: '500px',
        height: '200px',
        backgroundColor:'lightgrey',
        borderradius:'15px'
        
    };
    const c=
    {
        border :'1px solid black',
        width: '500px',
        height: '120px',
        backgroundColor:'lightgrey',
        borderradius:'15px'

    };
    return (
      <center> <div style={a}>
        <h1>Car and Location Info</h1>
        <div style={b}>
        <h3><b><center>Tesla Model S</center></b></h3>
        <center><img src={imgurl} alt='Not found' height="100px" weight="100px"></img></center>
        </div>
        <br></br><br></br>
        <div style={c}>
        <h4><center>Testla</center> </h4>
        <h5><center>Palo Alto</center></h5>
       </div>
       </div>
      </center>

    )
}
export default Dy;