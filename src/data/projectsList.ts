type Project = {
  image: string,
  name: string,
  urlGithub: string,
  urlDeploy?: string,
  stacks: string,
  description: string,
}

const projectsList: Project[] = [
  {
    image: 'https://i.imgur.com/eFZfRNr.jpg',
    name: 'OZmap Challenge',
    urlGithub: 'https://github.com/leonardocbrand/ozmap-challenge',
    stacks: 'TypeScript - Node - Express - Chai - MongoDB - Mongoose - Swagger - Docker',
    description: 
      `API Restful voltada para o gerenciamento de usuários e regiões,
       utiliza a API do Google para transformar o endereço do usuário em coordenadas, 
       utiliza georreferenciamento para permitir a listagem de regiões por um ponto específico e 
       também a listagem de regiões a uma certa distância de um ponto. A API também apresenta toda sua documentação
       e cobertura de testes. `
  },
  {
    image: 'https://i.imgur.com/pCmDwNV.png',
    name: 'Kukac Challenge',
    urlGithub: 'https://github.com/leonardocbrand/kukac-challenge',
    stacks: 'TypeScript - Node - Express - React - MUI - Jest - Docker',
    description: 
      `Aplicação web dividida em frontend e backend, 
      com o processamento de dados ocorrendo exclusivamente no backend. 
      O projeto engloba a resolução de quatro problemas distintos.`
  },
  {
    image: 'https://i.imgur.com/n85ZDLI.png',
    name: 'Azapfy Challenge',
    urlGithub: 'https://github.com/leonardocbrand/kukac-challenge',
    urlDeploy: 'https://azapfy-challenge.vercel.app/',
    stacks: 'TypeScript - Next - React - TailwindCSS - MUI - Zustand',
    description: 
      `Frontend de uma aplicação Web que abraça 
      a temática de heróis e possui um minigame com sistema de batalha entre os heróis.`
  },
  {
    image: 'https://i.imgur.com/6ICxT4U.png',
    name: 'Recipes App',
    urlGithub: 'https://github.com/leonardocbrand/recipes-app',
    urlDeploy: 'https://recipes-app-weld.vercel.app/',
    stacks: 'React - TypeScript - MUI - Context API - RTL',
    description: 
      'Projeto que usa duas APIs de receitas,' +
      ' uma de comidas e uma de bebidas.' +
      ' O aplicativo oferece uma ampla gama de recursos aos usuários,'+
      'permitindo que eles visualizem, pesquisem, filtrem e '+
      'favoritem receitas de comida e bebidas.'+
      ' Além disso, é possível acompanhar detalhadamente o processo de preparação das receitas, passo a passo.'
  },
  {
    image: 'https://i.imgur.com/OAoQORE.png',
    name: 'Random Users',
    urlGithub: 'https://github.com/leonardocbrand/random-users-project',
    urlDeploy: 'https://random-users-project-teal.vercel.app/',
    stacks: 'React - TypeScript - MUI',
    description: 
      'Projeto que usa a API Random User para mostrar uma lista de usuários e seus detalhes.',
  },
  {
    image: 'https://i.imgur.com/enlK07w.png',
    name: 'Online Store',
    urlGithub: 'https://github.com/leonardocbrand/Online_Store_React_TS',
    urlDeploy: 'https://online-store-react-ts.vercel.app/',
    stacks: 'React - TypeScript - MUI',
    description: 'App que simula uma loja virtual com produtos gerados a partir da API do Mercado Livre.',
  },{
    image: 'https://i.imgur.com/klgsQ4Y.png',
    name: 'Trybe Wallet',
    urlGithub: 'https://github.com/leonardocbrand/TrybeWallet',
    urlDeploy: 'https://trybewallet-portf.vercel.app/',
    stacks: 'React - TypeScript - Redux - MUI',
    description: 'Projeto frontend de uma carteira de gastos, onde o usuário pode adicionar, remover e editar gastos.',
  },{
    image: 'https://i.imgur.com/xZx7IT2.png',
    name: 'Pixels Art',
    urlGithub: 'https://github.com/leonardocbrand/pixels-art',
    urlDeploy: 'https://leonardocbrand.github.io/pixels-art/',
    stacks: 'JavaScript - DOM - CSS',
    description: 'Projeto que simula um quadro de pixels, onde o usuário pode escolher uma cor e pintar os pixels.',
  },
];

export default projectsList;
