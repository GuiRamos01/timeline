# 📰 Revista Timeline

A **Revista Timeline** é um portal de notícias dinâmico desenvolvido com React, que consome dados de uma API WordPress (WP-JSON) para entregar conteúdos em tempo real.

O projeto foca em uma experiência de leitura fluida, utilizando carrosséis interativos, carregamento via skeletons para melhor UX e um design responsivo.

### SITE DEMO: https://ubiquitous-daifuku-3e9b55.netlify.app

## 🚀 Tecnologias Utilizadas

* **Frontend:** React (Vite), Javascript ES6+, Redux e React Router DOM.
* **Estilização:** Sass, Tailwind CSS, Radix UI (via Shadcn/UI) e Lucide React (ícones)
* **Consumo de API:** Axios
* **Carrosséis:** React Slick
* **SEO:** React Helmet

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
