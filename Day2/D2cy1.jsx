import React from 'react';
const D2cy=()=>{
    const imgurl="/smile_image.jpeg";
    const dstyle={
        backgroundColor:"lightblue",
        width:'300px',
        height:'350px',
        padding:'100px',
        border:'1px solid blue',
    };
    return(
        <center><div style={dstyle}><h1><b><center>Smile Component</center></b></h1>
        <p style={{height:"100px"}}><center>It is a functional component</center></p>
        <center><img src={imgurl} alt='Not found' height="100px" weight="100px"></img></center></div></center>
        
    )
}
export default D2cy;