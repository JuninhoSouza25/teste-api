import { useState } from 'react'

function Contador(){
    const [contador, setContador] = useState(1)

    function adicionarContador(){
        setContador(contador + 1)
    }

    return (
        <div>
            <div>{contador}</div>
            <button onClick={adicionarContador}>Contador</button>
        </div>
    )
}

function Home(){
    return (
        <div>
            <div>Home</div>
            <Contador />
        </div>
    )
}

export default Home