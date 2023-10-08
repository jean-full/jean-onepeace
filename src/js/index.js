//objetivo clicar no botão do personage na lista, marcar o botão como selecionado.
//pegar os botoes no js pra poder verificar quando usuário clicar em cima de um bot


const botoes = document.querySelectorAll('.botao');

const personagens = document.querySelectorAll(".personagem")



//passo2 adcionar a classe"selecionado" no botão que o usuario clicou.
botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () =>{
        //passo 3 verificar se ja existe um botão selecionado, se sim, devemos remover a seleção dele.
        
        const botaoSelecionado = document.querySelector(".botao.selecionado");
        botaoSelecionado.classList.remove("selecionado")

         botao.classList.add("selecionado");


         const personagemSelecionado = document.querySelector(".personagem.selecionado");
         personagemSelecionado.classList.remove("selecionado");



         personagens[indice].classList.add("selecionado")      

    });
} );

