import React, { useState } from 'react';
import InputLabel from './Components/InputLabel';
import InputLabelSelect from './Components/InputLabelSelect';

function Home(props) {

  const [userSexo, setuserSexo] = useState('');
  const [userVeiculo, setuserVeiculo] = useState('');
  const [userCNH, setuserCNH] = useState('');

  return (
    <form>
      <fieldset>
        <legend>Dados Pessoais</legend>
        <InputLabel type="text" title="Nome Completo *" ></InputLabel>
        <InputLabel type="text" title="Cargo Pretendido"></InputLabel>
        <InputLabelSelect title="Estado Civil"></InputLabelSelect>
        <InputLabel type="date" title="Data de Nascimento *"></InputLabel>

        <label>
          <p>Sexo</p>
          <select value={userSexo} onChange={e => setuserSexo(e.target.value)}>
            <option>Feminino</option>
            <option>Masculino</option>
          </select>
        </label>

        <InputLabel type="text" title="Endereço *" placeholder="ex.: Nome da Rua, Bloco 202, Apt. 302"></InputLabel>
        <InputLabel type="text" title="Bairro *"></InputLabel>
        <InputLabel type="text" title="Cidade *"></InputLabel>

        <InputLabel title="Cep"></InputLabel>
        <InputLabel title="Telefone Fixo 1"></InputLabel>
        <InputLabel title="Telefone Fixo 2"></InputLabel>
        <InputLabel title="Celular"></InputLabel>
        <InputLabel title="Contato"></InputLabel>
        <InputLabel type="email" title="E-mail" placeholder="ex.: meunome@exemplo.com"></InputLabel>
      </fieldset>

      <fieldset>
        <legend>Documentos</legend>
        <InputLabel title="Identidade *"></InputLabel>
        <InputLabel title="CPF *"></InputLabel>

        <label>
          <p>Possui Veículo</p>
          <select value={userVeiculo} onChange={e => setuserVeiculo(e.target.value)}>
            <option>Sim</option>
            <option>Não</option>
          </select>
        </label>

        <label>
          <p>Habilitação</p>
          <select value={userCNH} onChange={e => setuserCNH(e.target.value)}>
            <option>ACC</option>
            <option>A</option>
            <option>B</option>
            <option>AB</option>
            <option>C</option>
            <option>D</option>
            <option>E</option>
          </select>
        </label>
      </fieldset>

      <button type="button">Enviar</button>
    </form>
  );
}

export default Home;
