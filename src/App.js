import React, { useState } from 'react';
import { marked } from 'marked';
import './App.css';

// Markdown inicial que se mostrará al cargar la página.
const initialMarkdown = `
# Encabezado H1

## Subtítulo H2

Este es un [enlace](https://www.google.com).

\`Código en línea\`

\`\`\`
Bloque de código:
function ejemplo() {
  return "Hola mundo!";
}
\`\`\`

- Elemento de lista 1
- Elemento de lista 2
- Elemento de lista 3

> Cita en bloque.

![Imagen de ejemplo](https://via.placeholder.com/150)

**Texto en negrita**
`;

const App = () => {
  // Estado para almacenar el contenido Markdown.
  const [markdown, setMarkdown] = useState(initialMarkdown);

  // Función que se ejecuta cuando el usuario cambia el contenido del textarea.
  const handleChange = (e) => {
    setMarkdown(e.target.value);
  };

  return (
    <div className="container">
      <textarea
        id="editor"
        value={markdown}
        onChange={handleChange}
      />
      <div
        id="preview"
        dangerouslySetInnerHTML={{ __html: marked(markdown) }}
      />
    </div>
  );
};

export default App;
