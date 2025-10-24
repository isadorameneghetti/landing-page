# Padaria Pão Quentinho - Landing Page

Uma landing page moderna e responsiva para padaria, desenvolvida com HTML, CSS e JavaScript puro.

## Link do Site
[Git Pages - Pão Quentinho](https://isadorameneghetti.github.io/landing-page)

## Descrição

Landing Page completa para a Padaria "Pão Quentinho", apresentando uma interface acolhedora que transmite tradição, qualidade e o sabor caseiro dos produtos. O design é totalmente responsivo e otimizado para todos os dispositivos.

## Funcionalidades

- **Design Responsivo** - Adaptação perfeita para mobile, tablet e desktop
- **Navegação Fixa** - Menu que permanece no topo durante o scroll
- **Scroll Suave** - Navegação fluida entre as seções
- **Formulário de Contato** - Validação em tempo real com feedback visual
- **Animações** - Efeitos suaves ao rolar a página
- **Menu Mobile** - Hamburguer menu funcional para dispositivos móveis
- **Otimização de Performance** - Código limpo e eficiente

## Tecnologias Utilizadas

- **HTML5** - Estrutura semântica
- **CSS3** - Estilização com variáveis CSS, Flexbox e Grid
- **JavaScript ES6** - Interatividade e funcionalidades
- **Font Awesome** - Ícones
- **Google Fonts** - Tipografia moderna

## Estrutura do Projeto

```
landing-padaria/
├── index.html
├── css/
│   ├── style.css          # Estilos globais e variáveis
│   ├── navbar.css         # Estilos da navegação
│   ├── hero.css           # Seção principal
│   ├── about.css          # Seção "Sobre nós"
│   ├── product.css        # Seção de produtos
│   ├── contact.css        # Seção de contato
│   ├── footer.css         # Rodapé
│   └── responsive.css     # Media queries
├── js/
│   ├── navbar.js          # Menu mobile
│   ├── scroll.js          # Scroll suave e efeitos
│   ├── form.js            # Validação de formulário
│   └── animations.js      # Inicialização de animações
└── assets/
    ├── img/               # Imagens do projeto
    └── icons/             # Ícones personalizados
```

## Como Executar

### Método 1: Servidor Local
```bash
# Clone o repositório
git clone https://github.com/isadorameneghetti/landing-page

# Acesse a pasta do projeto
cd padaria-pao-quentinho

# Execute com um servidor local (Python)
python -m http.server 8000

# Ou com Node.js (se tiver o http-server instalado)
npx http-server
```

### Método 2: Abrir Diretamente
```bash
# Basta abrir o arquivo index.html no navegador
open index.html
```

## Personalização

### Cores (Variáveis CSS)
```css
:root {
    --primary: #d35400;      /* Laranja principal */
    --primary-dark: #a84300; /* Laranja escuro */
    --secondary: #f39c12;    /* Amarelo/laranja */
    --accent: #8b4513;       /* Marrom */
    --light: #fef9f3;        /* Bege claro */
    --dark: #2c1810;         /* Marrom escuro */
}
```

### Conteúdo
Edite os arquivos para personalizar:
- **Texto**: Modifique o conteúdo no `index.html`
- **Cores**: Altere as variáveis no `css/style.css`
- **Imagens**: Substitua as SVGs por imagens reais
- **Contato**: Atualize informações no formulário

## Responsividade

O projeto utiliza a abordagem **Mobile First** e é compatível com:

- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1023px  
- **Desktop**: 1024px+

## Scripts JavaScript

### navbar.js
Controla o menu mobile com toggle e fechamento automático.

### scroll.js
Implementa scroll suave e efeitos de revelação ao rolar.

### form.js
Validação do formulário de contato com feedback visual.

## Navegadores Suportados

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Seções da Landing Page

1. **Hero** - Apresentação principal com call-to-action
2. **Sobre** - História e diferenciais da padaria
3. **Produtos** - Cards com pães, bolos e salgados
4. **Contato** - Formulário e informações de localização
5. **Footer** - Links e newsletter

## Próximas Melhorias

- [ ] Integração com API de envio de formulários
- [ ] Galeria de imagens dos produtos
- [ ] Sistema de avaliações de clientes
- [ ] Integração com WhatsApp para pedidos
- [ ] Mapa interativo da localização

## Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## Desenvolvido por

Isadora Meneghetti - [isadorammeneghetti@gmail.com]
