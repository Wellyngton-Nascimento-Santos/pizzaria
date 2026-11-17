# Sistema de Pedidos — Pizzaria

Projeto de estudo de um sistema de pedidos para pizzaria, construído em Node.js.

## A proposta

Reproduzir o fluxo completo de um pedido: o cliente monta a pizza, escolhe tamanho
e adicionais, o sistema calcula o preço e registra o pedido.

A ideia era chegar até o pagamento pela própria página, funcionando como um
aplicativo, mas em formato web.

## Arquitetura

O projeto foi organizado em camadas, em vez de concentrar tudo num arquivo só:

- `controllers` — recebem a requisição e coordenam a resposta
- `services` — regras de negócio do pedido
- `views` — telas renderizadas no servidor com EJS
- `router.js` — definição das rotas
- `databases` — camada de dados
- `teste` — testes

## Tecnologias

- Node.js
- Express
- EJS
- JavaScript
- CSS

## Status

Projeto **em desenvolvimento**. A base e a estrutura estão montadas, e o fluxo de
pedido ainda não está completo até o fechamento.

## Autor

**Wellyngton Nascimento Santos**

[LinkedIn](https://www.linkedin.com/in/wellyngton-nascimento-santos-44944322b/) · [Portfólio](https://wellyngtondev.com.br)
