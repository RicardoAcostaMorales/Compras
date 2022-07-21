import React from 'react'

function Header(props){
   /*  const edad=18
    let mensaje
        if(edad>=18){
            mensaje="eres mayor"
            }else{
            mensaje='no eres mayor'
        }
        return(
            <div>
            <h1>{mensaje}</h1>
            <h2>{mensaje}</h2>
            <h3>es un texto pequeño</h3>
            <h4>{edad}</h4>
            </div>
            )
        } */
        return(
            <h1 className='encabezado'>{props.titulo}</h1>
        )  
}
export default Header