import React from 'react'

const Welcome=(props)=> {
  return (
   <>
    <p>Name: {props.name}</p>
    <p>Age: {props.age}</p>
    <img width={250} height={150} src={props.src} alt={props.name}/>

   <p>hobby:  {props.hobbies.map((hobby)=>{
        return <span> {hobby}</span>
    })}</p>

   
   </>
  )
}

export default Welcome