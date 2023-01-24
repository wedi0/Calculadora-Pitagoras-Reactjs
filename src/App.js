import React from 'react'
import './index.css'

class App extends React.Component {

    render() {
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
                            <input name="a" id="a" type="number" />
                        </label>
                        <label for="b">
                            b:
                            <input name="a" id="a" type="number" />
                        </label>
                        <label for="c">
                            c:
                            <input name="c" id="c" type="number" />
                        </label>
                        <button>Calcular</button>

                    </form>


                    <div className='imagem'>

                        <img src="imagem/foto.png" alt='Imagem'></img>

                    </div></div>



                <footer className="footer">
                    <p>
                        Feito por{" "}
                        <a href="https://github.com/wedi0">
                            Weslley Augusto
                        </a>
                    </p>
                </footer>

            </div>
        )

    }
}



export default App;