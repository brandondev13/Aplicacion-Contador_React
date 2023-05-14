import { useState } from "react";

export const ContadorApp = ({valor}) => {
    const [ contador, setContador ] = useState(valor);
    const contadorIncrementador = () => {
        setContador(contador+1)
    }
    return <>
        <h2>El valor del contador es { contador }</h2>
        <button onClick={ () => { 
            contadorIncrementador() 
        } }>incrementar contador +1</button>
    </>
}