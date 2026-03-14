# 📰 Revista Timeline

A **Revista Timeline** é um portal de notícias dinâmico desenvolvido com React, que consome dados de uma API WordPress (WP-JSON) para entregar conteúdos sobre saúde, política, artigos e notícias em tempo real.

O projeto foca em uma experiência de leitura fluida, utilizando carrosséis interativos, carregamento via skeletons para melhor UX e um design responsivo elegante.

## SITE DEMO: https://ubiquitous-daifuku-3e9b55.netlify.app

## 🚀 Tecnologias Utilizadas

O projeto utiliza o que há de mais moderno no ecossistema de desenvolvimento web:

* **Core:** [React 19](https://react.dev/) & [Vite](https://vitejs.dev/)
* **Estilização:** [Sass](https://sass-lang.com/), [Tailwind CSS 4](https://tailwindcss.com/) & [Lucide React](https://lucide.dev/) (ícones)
* **Gerenciamento de Estado:** [Redux Toolkit](https://redux-toolkit.js.org/) & [Redux Persist](https://github.com/rt2zz/redux-persist)
* **Navegação:** [React Router DOM 7](https://reactrouter.com/)
* **Componentes de UI:** [Radix UI](https://www.radix-ui.com/) & [Shadcn/UI](https://ui.shadcn.com/)
* **Consumo de API:** [Axios](https://axios-http.com/)
* **Carrosséis:** [React Slick](https://react-slick.neostack.com/)
* **SEO:** [React Helmet](https://github.com/nfl/react-helmet)

## 📋 Funcionalidades

* **Integração com WordPress:** Consumo dinâmico de posts, categorias e autores via API REST do WordPress.
* **Carregamento Inteligente:** Uso de `PostItemSkeleton` para manter o layout estável enquanto os dados são buscados.
* **Navegação por Categorias:** Áreas dedicadas para Artigos, Notícias e Saúde.
* **Carrosséis Responsivos:** Listagem de posts e colunistas otimizada para Desktop, Tablet e Mobile.
* **Persistência de Dados:** Redux configurado para gerenciar o estado global da aplicação.
* **SEO Optimized:** Títulos e metadados dinâmicos para cada página.

## 📁 Estrutura de Pastas (Resumo)

```text
src/
├── components/     # Componentes reutilizáveis (Header, Footer, PostItem)
├── pages/          # Páginas principais (Home, Post, Categories, etc.)
├── redux/          # Configuração do Store e Slices
├── styles/         # Arquivos de estilização (.sass)
├── scripts/        # Arquivos JSON e scripts auxiliares
└── App.jsx         # Configuração de rotas e providers
