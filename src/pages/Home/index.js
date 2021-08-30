import React from 'react';
import InputLabel from '../../components/InputLabel';
import * as S from './styled';

import Header from '../../components/Header';

import meuJob from '../../images/meuJob.png';
import student from '../../images/student.png';
import trainee from '../../images/trainee.png';
import valorizacao from '../../images/valorizacao.png';

function Home() {
  return (
    <S.Container>
      <Header />
      <InputLabel type="text" title="Procure seu Job dos sonhos" ></InputLabel>

      <main>
        <img src="" alt="" />
        <cite>Através da MyJob consegui minha recolocação no mercado de trabalho. É bom quando se preocupam com nossa experiencia e nos tratam como gente!</cite>

        <S.Secao>
          <p>Buscando um estágio<br></br>para ingressar no mercado de<br></br>trabalho e garantir uma boa experiência?</p>
          <img src={student} />
        </S.Secao>

        <S.Secao>
          <img src={trainee} />
          <p>Acabou de se formar e está a procura<br></br>de uma vaga trainee?</p>
        </S.Secao>

        <S.Secao>
          <p>Ou é uma pessoa experiente,<br></br>que busca uma recolocação no mercado?</p>
          <img src={meuJob} />
        </S.Secao>

        <S.Secao>
          <img src={valorizacao} />
          <p>A JobsNET é para você que está<br></br>cansado de tentar se moldar ao trabalho.<br></br>Aqui nos damos o match entre a empresa<br></br>e o colaborador, valorizando as diferenças.</p>
        </S.Secao>


        <p>Porque escolher a MyJob</p>
      </main>


    </S.Container>
  );
}

export default Home;