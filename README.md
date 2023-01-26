# Projeto calculadora de Pitagoras

**Autor**: Weslley Augusto de Oliveira

**Resumo:** O desafio é desenvolver uma calculadora que será capaz de calcular a relação entre os lados de um triângulo
retângulo. Tudo isso utilizando **Javascript**, **HTML5**, **CSS3**  e uma API em **Python** utilizando **Flask** ou **Django**.



## Observações

* A maioria destas tecnologias tive pouco ou nenhum contato.
* Irão ser 4 dias de desenvolvendo, começando 21/01/2023 e acabando 25/01/2023.
* Nesse repositório vou documentar minha jornada mais ou menos passo a passo de como tudo foi feito.



# Front-end

Pois bem, neste começo como o desafio pedia front-end usando javascript, optei por aprender e utilizar o framework ReactJS. Então tive que pesquisar como instalar e usar, logo a seguir vou mostar como foi feita essa parte. 

## React-js
  
-----------------
### O QUE É REACT-JS?
   

````
O React é uma biblioteca front-end JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.
````

### COMO BAIXAR, INSTALAR E USAR? 
   
* 1º passo, é baixar e instalar o [NodeJS](https://nodejs.org/en/download/).

* 2º passo, criar um diretório para seu projeto.

* 3º passo, instalar o React com o comando: `npm create-react-app my-app ` 

* 4º passo, para começar a usar, basta digitar o seguinte comando(dentro do diretório my-app que criou): `npm start`

* 5º passo, colocar a mão na massa e começar a programar.

### Imagem de como ficou o disign:

![image](https://user-images.githubusercontent.com/84606803/214723213-15c2d9bb-cd59-4da0-b028-421fef418db9.png)
obs:*esse "Resposta" adicionei mais tarde no projeto para testar a API e não formatei ele :D*


### Links que me ajudaram:

* Site oficial do [React](https://pt-br.reactjs.org/docs/getting-started.html) porque lá tem a documentação e tutorias muito bons.
* Esse [video](https://www.youtube.com/watch?v=tPdoxF0kunU) fala sobre a instalação.


# Back-end

Nesta parte tive bastante dificuldade porque não estou acostumado a programar com JavaScript. Mas consegui fazer o básico, em resumo o que fiz no back end foi:
* Pegar os dados dos inputs e colocar em variáveis.
* Criar um evento ao clicar no botão para exibir o resultado.
* Chamar uma API.

Obs: Não consegui pegar o valor gerado pela API para exibir na tela ainda.

links úteis:

* [Pegar informação dos inputs no ReactJs](https://www.youtube.com/watch?v=0705NnPVDfU)
* [Criação de evento para o botão usando Reactjs](https://www.youtube.com/watch?v=UihbmA0pTCE)


# API

A API criada para realizar o calculo foi feita no framework Django e é responsável por pegar o valor das variáveis enviadas e retornar uma resposta em formato json do resultado. 

[Link para API]()

------------

## Fim



*Se chegou até aqui é porque se interessou pelo trabalho, portanto muito obrigado pela atenção :D*




