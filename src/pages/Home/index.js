import React from 'react';

function Home() {
  return (
    <div>
      <header>
        <h1>JobsNET</h1>
        <nav>
          <a href="/">Home</a>
          <a href="/cadastro">Cadastre-se</a>
        </nav>
      </header>

      <body>
        <p>Procure seu Job dos sonhos</p>
        <input type="text"></input>

        <main>
          <img src="" alt="" />
          <cite>Através da MyJob consegui minha recolocação no mercado de trabalho. É bom quando se preocupam com nossa experiencia e nos tratam como gente!</cite>
          <p>Porque escolher a MyJob</p>
        </main>

      </body>
    </div>
  );
}

export default Home;