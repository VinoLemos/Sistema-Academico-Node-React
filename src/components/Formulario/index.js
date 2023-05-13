import { useState } from 'react'

function Formulario() {
    const [computador, setComputador] = useState({})
    const [json, setJson] = useState({})

    return (
        <div>
            <form onSubmit={enviar}>
                Marca<br />
                <input value={computador.marca}
                    onChange={(e) => setComputador({ ...computador, marca: e.target.value })} /><br />
                RAM<br />
                <input value={computador.ram}
                    onChange={(e) => setComputador({ ...computador, ram: e.target.value })} /><br />
                Disco<br/>
                <input value={computador.disco}
                    onChange={(e) => setComputador({...computador, disco: e.target.value })} /><br/>
                
                <button type="submit">Enviar</button>

                <h2>Obs.: JSON a ser enviado à API</h2>
            </form>
        </div>
    )

    function enviar(e) {
        e.preventDefault()
        setJson(JSON.stringify(computador))
    }
}

export default Formulario