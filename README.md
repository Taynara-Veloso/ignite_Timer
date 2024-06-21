# React + TypeScript + Vite

## Styled Components

```
npm install styled-components
npm i @types/styled-components
```
### O Styled Components é uma biblioteca de CSS-in-JS que permite que a gente utilize o CSS dentro do JavaScript e em um formato parecido com os do React, adicionando muitas funcionalidades à estilização da nossa aplicação.

## Eslint

```
npm i eslint -D
npm i @rocketseat/eslint-config -D
npx eslint --init
npx eslint src --ext .ts,.tsx (para testar)
npx eslint src --ext .ts,.tsx --fix (Para corrigir todos os erros de sintaxe)
```
### O que é Styled Components?
```
É uma biblioteca que permite a gente criar componentes estilizados com as features do JavaScript no ReactJS.
```
### Como podemos recuperar as propriedades passadas para um componente do Styled Components?
```
Fazendo uma interpolação na string de estilização, e isso retornará uma função que tem como primeiro parâmetro todas as propriedades recebidas pelo componente.
```

### Qual o tipo de arquivo ideal quando precisamos apenas das definições de tipos no TypeScript?
```
.d.ts
```

### Qual alternativa que melhor descreve o ESLint.
```
É um linter de código que nos ajuda a definir regras e padrões de escrita de código.
```
Assim como o <BrowserRouter /> do react-router-dom e o <ThemeProvider /> do styled-components, é correto afirmar que:
```
Eles são Context Providers e servem para compartilhar informações entre os componentes que estão dentro deles e não produzem nada em tela.
```

Qual o componente que usamos do react-router-dom quando precisamos criar layouts em que esse componente será substituído pelo conteúdo da rota?
```
<Outlet />
```

Qual o componente do react-router-dom que podemos utilizar para criar navegação entre as rotas?
```
<NavLink />
```

No styled-components, como podemos utilizar outros componentes estilizados como base para novos componentes?
```
styled(baseComponent)
```

### forma de trabalho

## Controlled
  * Controlled mantém guardado em tempo real no estado(a informação que o usuário insere na aplicação). 

  * Toda vez que o `estado` mudar, o React precisa renderizar a pág inteira com o novo valor.

  * Melhor fluidez.
    * Habilita e desabilita alguma coisa dependendo do `estado`.

  * QUANDO UTILIZAR 
    * Formulário simples.
    * Formulário com poucos campos. 
      * Formulário de login.
      * Formulário de cadastro.

#### Quando estamos utilizando inputs controlados (controlled) em um formulário?
```
Quando mantemos em tempo real as informações dos inputs do usuário guardadas no estado da nossa aplicação
```

`Exemplo:`
```js
const [task, setTask] = useState('')

<form action="">
  <FormContainer>
    <label htmlFor="task">Vou trabalhar em</label>
    <TaskInput
      id="task"
      type="task-suggestions"
      placeholder="Dê um nome para o seu projeto"
      onChange={(e) => setTask(e.target.value)} //Controlled
      value={task}
    />
    <StartCountdownButton disabled={!task} type="submit" /* caso tenha algo escrito no TaskInput o button volta a funcionar somente no método Controlled */ > 
      <Play size={24} />
        Começar
    </StartCountdownButton>
  </FormContainer>
```

## Uncontrolled
  * Uncontrolled (é quase a mesma coisa) porém só buscamos a informação que o usuário insere no 'input' da aplicação QUANDO realmente precisarmos dela. 

  * Não monitora o valor digitado em tempo real.

  * Melhor performance.

  * Não utiliza UseState. Não é fluido.

  * QUANDO UTILIZAR 
    * Formulário complexos.
    * Formulário com muitos campos. 
      * Deshboard.

`Exemplo:`
```js
function handleSubmit(event) {
  event.target.task.value;
}

  <form onSubmit={handleSubmit} action="" /* Uncontrolled usa função para controlar o input */> 
    <FormContainer>
      <label htmlFor="task">Vou trabalhar em</label>
      <TaskInput
        id="task"
        name="task"
        type="task-suggestions"
        placeholder="Dê um nome para o seu projeto"
      />
    </FormContainer>
  </form>  
```

---
### React Hook Form (Lib)

Para adicionar funcionalidade ao nosso formulário, vamos utilizar uma das principais bibliotecas de formulários para o react, a `react-hook-form`.

`instalando`
```
npm i react-hook-form
```

`react-hook-form` utiliza os dois conceitos anteriores(Controlled e Uncontrolled) fazendo a nossa aplicação ter performance e fluidez.
---
#### Na biblioteca React Hook Form, o que precisamos fazer para começar a manipular/lidar com os inputs através dela?
```
Utilizar a função "register" vinda do hook useForm nos inputs
```

#### Na biblioteca React Hook Form, qual a função que devemos utilizar para observar as alterações vindas de um input?
```
watch
```
---
### Bibliotecas de validação de formulário.

## Yup
[Documentação](https://www.jsdocs.io/package/yup)

```
npm i yup
```
## Joi

[Documentação](https://joi.dev/)
```
npm i joi
```
## Zod

[Documentação](https://zod.dev/)
```
npm i zod
```
---
### Para integrar essas libs de validação com o React e necessário instalar também outra biblioteca chamada: `hookform/resolvers`

[Documentação](https://react-hook-form.com/)

```
npm i @hookform/resolvers
```
---
# Hooks:
  Hooks são funções que começam com o prefixo `use` e tem o intúito de adicionar algum funcionamento à um componente na nossa aplicação.
### useEffect (side-effect) -> Efeito Colateral
  Permite o dev ficar monitorando mudanças em uma variável e toda vez que essa variável mudar, independente do motivo, uma função é disparada.

  #### Recebe dois parâmetros:
  * 1° parâmetro: Qual função será executada?
  * 2° parâmetro: Quando será executada?
    * É um Array.
      * Qual variável eu quero monitorar?
      * toda vez que a variável `[list]` mudar será executada a função `avisarAPI()`.
  * Quando não usar?
    * atualizar estado

  ### Sobre o hook useEffect, é correto afirmar que:
  ```
    O useEffect, quando possui um array de dependencias, executará na montagem do componente e sempre que uma variável no array de dependências mudar
  ```
  ### Quando devemos utilizar o useEffect?
  ```
    Quando precisamos lidar com efeitos colaterais externos e sincronizar a nossa aplicação com essas informações
  ```

  ```js
  import { useEffect, useState } from 'react'

  function avisarAPI(){
    console.log('Lista salva');
  }

  export function App(){
    const [list, setList] = useState<string[]>([])
    const [filter, setFilter] = useState('')

    useEffect(() => {
      avisarAPI();
    }, [list])

    useEffect(() => {
      fetch('https://api.github.com/users/taynara_veloso/repos')
        .then(response => response.json())
        .then(data => {
          setList(data.map((item: any) => item.full_name))
        })
    }, []) //quando o array de dependência está vazio o useEffect só é executado uma única vez na nossa aplicação.

    const filteredList = list.filter(item => item.includes(filter))

    function addToList() {
      setList(state => [...state, 'Novo item'])
    }

    // adicionar à um input onChange={e => setFilter(e.target.value)} e value={filter}
    // adicionar o addToList à um botão no onClick 
  }
  ```
### useState 
  É um hook que conseguimos armazenar variáveis que quando tem seu valor alterado provocam uma nova renderização no componente, assim conseguimos exibir em tempo real uma informação conforme ela for atualizada por um clique do usuário ou por uma função.

---
#### Prop Drilling
  O Prop Drilling é um termo utilizado para quando temos propriedades que estão se repassando em diversas camadas da nossa árvore de componentes.
