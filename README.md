src/
├── app/
│   ├── core/                     # Centraliza recursos compartilhados e infraestrutura
│   │   ├── components/           # Componentes globais reutilizáveis (ex: Navbar, Footer)
│   │   ├── layouts/              # Layouts globais (ex: BaseLayout, AuthLayout)
│   │   │   ├── base-layout/      # Layout principal (após login)
│   │   │   │   ├── base-layout.component.ts
│   │   │   │   ├── base-layout.component.html
│   │   │   │   └── base-layout.component.scss
│   │   │   ├── auth-layout/      # Layout para páginas de autenticação
│   │   │   │   ├── auth-layout.component.ts
│   │   │   │   ├── auth-layout.component.html
│   │   │   │   └── auth-layout.component.scss
│   │   ├── guards/               # Guards para proteção de rotas (ex: AuthGuard)
│   │   ├── interceptors/         # Interceptadores HTTP (ex: TokenInterceptor)
│   │   ├── services/             # Serviços globais e específicos de módulos
│   │   │   ├── auth.service.ts   # Serviço de autenticação
│   │   │   ├── dashboard.service.ts  # Serviço para tela de entrada
│   │   │   └── api.service.ts    # Serviço genérico para chamadas HTTP
│   │   └── core.module.ts              # Utilitários gerais (ex: Validadores, Helpers)
│   ├── features/                 # Funcionalidades específicas da aplicação
│   │   ├── auth/                 # Tela de login
│   │   │   ├── components/       # Componentes específicos do módulo (ex: LoginFormComponent)
│   │   │   ├── pages/            # Páginas principais (ex: LoginPageComponent)
│   │   │   └── auth.routes.ts
│   │   │   └── auth.module.ts
│   │   ├── dashboard/            # Tela de entrada (lista e modais)
│   │   │   ├── components/       # Componentes específicos (ex: Tabela, Modais)
│   │   │   │   ├── list/         # Lista com ações
│   │   │   │   │   ├── list.component.ts
│   │   │   │   │   ├── list.component.html
│   │   │   │   │   └── list.component.scss
│   │   │   │   ├── modals/       # Modais para visualização e edição
│   │   │   │   │   ├── edit-modal.component.ts
│   │   │   │   │   ├── edit-modal.component.html
│   │   │   │   │   ├── view-modal.component.ts
│   │   │   │   │   ├── view-modal.component.html
│   │   │   ├── pages/            # Páginas principais (ex: DashboardPageComponent)
│   │   │   │   ├── dashboard.component.ts
│   │   │   │   ├── dashboard.component.html
│   │   │   │   ├── dashboard.component.scss
│   │   │   └── dashboard.module.ts
│   │   │   └── dashboard.routes.ts
│   ├── shared/                   # Recursos compartilhados em toda a aplicação
│   │   ├── components/           # Componentes globais (ex: Botões, Modais padrão)
│   │   ├── directives/           # Diretivas personalizadas (ex: HighlightDirective)
│   │   ├── pipes/                # Pipes reutilizáveis (ex: DatePipe, CurrencyPipe)
│   │   └── shared.module.ts      # Módulo para consolidar componentes globais
│   └── app-routing.module.ts     # Configuração de rotas principais
│── environments/             # Configurações de ambiente (ex: environment.ts, environment.prod.ts)