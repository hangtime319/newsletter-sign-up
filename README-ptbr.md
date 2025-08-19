# Formulário de Inscrição para Newsletter

Um formulário de inscrição para newsletter responsivo e de dois estados com validação no lado do cliente.

## Descrição

Este projeto é uma solução para o desafio "Formulário de inscrição para newsletter" do Frontend Mentor. O objetivo principal foi criar um formulário funcional que valida a entrada do usuário e faz uma transição perfeita para uma mensagem de sucesso após a submissão. Este projeto demonstra o uso de **JavaScript** para lidar com a validação de formulário no lado do cliente e para gerenciar a interface do usuário, alternando entre dois estados diferentes: o formulário de inscrição inicial e a mensagem de sucesso final.

## Tecnologias Usadas

* **HTML5:** Para criar a estrutura semântica do formulário, seus campos de entrada e a mensagem de sucesso.
* **CSS3:** Para toda a estilização, incluindo o layout responsivo que muda de uma visualização de duas colunas em desktops para uma de coluna única em celulares. O CSS também lida com a estilização dos estados de erro.
* **JavaScript:** A tecnologia-chave que dá vida ao formulário. Ele lida com:
    * A lógica de validação de e-mail (verificando o formato válido e campos vazios).
    * Exibir e ocultar mensagens de erro com base na entrada do usuário.
    * Alternar a visibilidade do formulário e da mensagem de sucesso.

## Instalação

Este é um projeto de frontend estático, então não é necessária uma configuração complexa. Para obter uma cópia local, basta seguir estes passos:

1.  Clone o repositório:
    ```bash
    git clone [https://github.com/hangtime319/newsletter-sign-up.git](https://github.com/hangtime319/newsletter-sign-up.git)
    ```
2.  Abra o arquivo `index.html` no seu navegador da web preferido para visualizar o projeto.

## Uso

Este projeto serve como uma vitrine de um componente de UI prático e de dois estados. O usuário pode:
* Digitar um endereço de e-mail e clicar em "Subscrever".
* Ver uma mensagem de erro se o e-mail for inválido ou o campo estiver vazio.
* Ver uma mensagem de confirmação de sucesso após fornecer um e-mail válido.

## Funcionalidades

* **UI de Dois Estados:** O componente faz uma transição suave do formulário de inscrição para uma tela de confirmação.
* **Validação no Lado do Cliente:** O formulário valida a entrada de e-mail em tempo real antes da submissão.
* **Mensagens de Erro Dinâmicas:** Mensagens de erro claras são exibidas quando o usuário fornece uma entrada inválida.
* **Totalmente Responsivo:** O layout é otimizado para ficar ótimo em todos os dispositivos, de celulares a desktops.

## Contribuição

Contribuições são bem-vindas! Se você gostaria de melhorar este projeto, por favor, siga estes passos:

1.  Faça um "fork" do repositório.
2.  Crie uma nova branch (`git checkout -b feature/sua-nova-funcionalidade`).
3.  Faça o "commit" de suas alterações (`git commit -m 'feat: Adiciona uma nova funcionalidade'`).
4.  Faça o "push" para a sua branch (`git push origin feature/sua-nova-funcionalidade`).
5.  Abra um "Pull Request".

## Licença

Este projeto está licenciado sob a Licença MIT.
