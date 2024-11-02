
![banner](https://github.com/user-attachments/assets/057a9369-3d2c-4472-84e8-c3de4f511f1a)


"Strata é o plural de "stratum," um termo em latim que significa "camada" ou "nível." No contexto do design, Strata sugere algo com múltiplas camadas ou dimensões, o que pode remeter à ideia de formas sobrepostas, níveis de profundidade ou um sistema bem estruturado. É uma palavra que carrega uma sensação de organização e complexidade elegante."

# Strata UI

Strata UI é uma biblioteca de componentes construída com React e Tailwindcss, projetada para oferecer uma experiência de desenvolvimento rápida, moderna e leve. Nossa missão é fornecer componentes reutilizáveis e altamente customizáveis que facilitam a criação de interfaces de usuário coesas e acessíveis.

## Tabela de Conteúdos

- [Strata UI](#strata-ui)
  - [Tabela de Conteúdos](#tabela-de-conteúdos)
  - [Instalação](#instalação)
  - [Uso](#uso)
  - [Documentação](#documentação)
    - [Componentes](#componentes)
  - [Contribuindo](#contribuindo)
    - [Requisitos de Contribuição](#requisitos-de-contribuição)
  - [Licença](#licença)

---

## Instalação

Para instalar a biblioteca em seu projeto, use o npm ou o yarn:

```bash
npm i strata-ui
# ou
yarn add strata-ui
```

## Uso

```jsx
import React from 'react';
import { Button } from 'strata-ui';

function App() {
  return (
    <div>
      <h1>Bem-vindo ao Strata UI</h1>
      <Button variant="primary" onClick={() => alert('Olá, Strata!')} />
    </div>
  );
}

export default App;
```

## Documentação

Toda a documentação dos componentes e exemplos de uso estão disponíveis em nosso [Storybook](https://evandrocalado.github.io/strata-ui), onde você pode visualizar cada componente e suas propriedades.

### Componentes

- **Button**: Um botão acessível e altamente customizável.
- **Headind**: Componente de heading h1 a h6.

## Contribuindo

Contribuições são bem-vindas! Para contribuir, siga estes passos:

1. Faça um fork do projeto.
2. Crie uma nova branch com sua feature (`git checkout -b feature/nova-feature`).
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`).
4. Faça o push da branch (`git push origin feature/nova-feature`).
5. Abra um Pull Request.

### Requisitos de Contribuição

- Certifique-se de que todas as mudanças são testadas.
- Siga os padrões de código do projeto (usamos ESLint e Prettier).
- Documente quaisquer novas funcionalidades no Storybook.

## Licença

Strata UI é distribuído sob a licença MIT. Consulte o arquivo [LICENSE](./LICENSE) para mais informações.

---

**Strata UI** é seu aliado para interfaces simples, robustas e reutilizáveis. 🚀
