───src
    │   index.html
    │   main.ts
    │   styles.less
    │
    ├───app
    │   │   app.component.html
    │   │   app.component.less
    │   │   app.component.spec.ts
    │   │   app.component.ts
    │   │   app.config.ts
    │   │   app.module.ts
    │   │   app.pre-routes.ts
    │   │   app.routes.ts
    │   │
    │   ├───core
    │   │   │   core.module.ts
    │   │   │
    │   │   ├───guards
    │   │   │       auth.guard.spec.ts
    │   │   │       auth.guard.ts
    │   │   │
    │   │   ├───interceptors
    │   │   │       http-interceptor.service.spec.ts
    │   │   │       http-interceptor.service.ts
    │   │   │
    │   │   └───services
    │   │       ├───activity
    │   │       │       activity.service.spec.ts
    │   │       │       activity.service.ts
    │   │       │
    │   │       ├───auth
    │   │       │       auth.service.spec.ts
    │   │       │       auth.service.ts
    │   │       │
    │   │       ├───person
    │   │       │       person.service.spec.ts
    │   │       │       person.service.ts
    │   │       │
    │   │       ├───person_activity
    │   │       │       person-activity.service.spec.ts
    │   │       │       person-activity.service.ts
    │   │       │
    │   │       └───user
    │   │               user.service.spec.ts
    │   │               user.service.ts
    │   │
    │   ├───features
    │   │   ├───auth
    │   │   │   │   auth.module.ts
    │   │   │   │   auth.routes.ts
    │   │   │   │
    │   │   │   └───pages
    │   │   │       ├───login
    │   │   │       │       login.component.html
    │   │   │       │       login.component.less
    │   │   │       │       login.component.spec.ts
    │   │   │       │       login.component.ts
    │   │   │       │
    │   │   │       └───register
    │   │   │               register.component.html
    │   │   │               register.component.less
    │   │   │               register.component.spec.ts
    │   │   │               register.component.ts
    │   │   │
    │   │   └───dashboard
    │   │       │   dashboard.module.ts
    │   │       │   dashboard.routes.ts
    │   │       │
    │   │       └───pages
    │   │           ├───activity
    │   │           │       activity.component.html
    │   │           │       activity.component.less
    │   │           │       activity.component.spec.ts
    │   │           │       activity.component.ts
    │   │           │
    │   │           ├───details
    │   │           │       details.component.html
    │   │           │       details.component.less
    │   │           │       details.component.spec.ts
    │   │           │       details.component.ts
    │   │           │
    │   │           ├───menu
    │   │           │       menu.component.html
    │   │           │       menu.component.less
    │   │           │       menu.component.spec.ts
    │   │           │       menu.component.ts
    │   │           │
    │   │           └───person
    │   │                   person.component.html
    │   │                   person.component.less
    │   │                   person.component.spec.ts
    │   │                   person.component.ts
    │   │
    │   └───shared
    │       │   shared.module.ts
    │       │
    │       └───interfaces
    │               activity.ts
    │               address.ts
    │               auth.ts
    │               person.ts
    │               person_activity.ts
    │               register.ts
    │               user.ts
    │
    └───env
            env.ts

            Documentação do Frontend
Este documento descreve o processo de instalação, configuração e inicialização do frontend do projeto.

Pré-requisitos
Antes de começar, certifique-se de ter os seguintes softwares instalados no seu ambiente de desenvolvimento:

Node.js (versão LTS recomendada)
Yarn (gerenciador de pacotes)
Angular CLI (para rodar e gerenciar o projeto Angular)
Passo a Passo
1. Instalar as dependências
Após clonar o repositório do frontend, navegue até o diretório correspondente e execute um dos seguintes comandos para instalar as dependências do projeto:

bash
 
npm install
ou, se preferir usar Yarn:

bash
  
yarn install
2. Configurar o Ambiente
Verifique se as configurações necessárias estão presentes no arquivo de ambiente (src/env/env.ts ou outro local especificado). Um exemplo típico de configuração:

typescript
  
export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000/api' // URL do backend
};
Certifique-se de que a URL da API corresponde ao endereço do servidor backend configurado.

3. Iniciar o Servidor de Desenvolvimento
Após instalar as dependências e configurar o ambiente, inicie o servidor de desenvolvimento com o comando:

bash
  
ng serve
Por padrão, o servidor será iniciado no endereço http://localhost:4200. Você pode acessá-lo no navegador.

Caso queira alterar a porta padrão:

bash
  
ng serve --port=4300
4. Testar a Aplicação
Certifique-se de que o backend também está em execução.
Acesse a URL do frontend (http://localhost:4200) e interaja com a aplicação para verificar se está tudo funcionando corretamente.
Resumo de Comandos
Aqui está um resumo dos comandos para facilitar o uso:

Instalar dependências: npm install ou yarn install
Iniciar o servidor de desenvolvimento: ng serve

Dúvidas Frequentes

Erro ao conectar ao backend:

Verifique se a URL da API no arquivo de configuração está correta.
Certifique-se de que o backend está em execução e acessível.
Comando ng serve não encontrado:

Certifique-se de que o Angular CLI está instalado globalmente:
bash
  
npm install -g @angular/cli
Alterar configurações específicas do ambiente:

Utilize o arquivo de ambiente (environment.ts) ou crie um para produção (environment.prod.ts).
