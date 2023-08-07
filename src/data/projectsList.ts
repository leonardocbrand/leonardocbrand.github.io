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
    image: 'https://i.imgur.com/xZx7IT2.png',
    name: 'Pixels Art',
    urlGithub: 'https://github.com/leonardocbrand/pixels-art',
    urlDeploy: 'https://leonardocbrand.github.io/pixels-art/',
    stacks: 'JavaScript - DOM - CSS',
    description: 'Projeto que simula um quadro de pixels, onde o usuário pode escolher uma cor e pintar os pixels.',
  },
];

export default projectsList;
