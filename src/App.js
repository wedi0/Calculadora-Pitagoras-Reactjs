import React, { useState } from 'react'
import './index.css'

function App() {


    //--------Back-end------------

    // Variáveis
    const [a, seta] = useState(0) // Variável a com uma função de set
    const [b, setb] = useState(0) // Variável b com uma função de set
    const [c, setc] = useState(0) // Variável c com uma função de set








    //Função de alerta para mostrar o resultado.
    function evento(){
        alert("Valores de A:" + a + ", de B: " + b + " e C: " + c)
    }


    // ------------Front-end---------------
    return (
        <div className='Janela-Principal'>

            <h1 className='Letra1'>Calculadora </h1>
            <h1 className='Letra2'>de </h1>
            <h1 className='Letra3'>pitagoras!</h1>



            <div className='bloco'>
                <p className="instrucao">
                    Insira dois valores para calcular o lado que falta do
                    triangulo:
                </p>


                <form class="form" id="form">
                    <label for="a">
                        a:
                        <input name="a" id="a" type="number" value={a} onChange={(e)=> seta(e.target.value)}/>
                    </label>
                    <label for="b">
                        b:
                        <input name="b" id="b" type="number" value={b} onChange={(e)=> setb(e.target.value)} />
                    </label>
                    <label for="c">
                        c:
                        <input name="c" id="c" type="number" value={c} onChange={(e)=> setc(e.target.value)} />
                    </label>
                    <button onClick={evento}>Calcular</button>

                </form>


                <div className='imagem'>

                    <img src="imagem/foto.png" alt='Imagem'></img>

                </div></div>



           

        </div>
    )

}







export default App;