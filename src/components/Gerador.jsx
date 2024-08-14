import React, { useState } from "react";
import "./Gerador.css";

const Gerador = () => {
  // Declarando as variaveis do gerador
  const [senhaGerada, setSenhaGerada] = useState("Selecione as opções");
  const [qtdCaracteres, setQtdCaracteres] = useState(8);
  const [chkMaiusculas, setChkMaiusculas] = useState(false);
  const [chkMinusculas, setChkMinusculas] = useState(false);
  const [chkNumeros, setChkNumeros] = useState(false);
  const [chkSimbolos, setChkSimbolos] = useState(false);

  // Função que gera um número aleatório
  const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);

  // Gerando caracteres
  const geraMaiscula = () => String.fromCharCode(rand(65, 91));
  const geraMinuscula = () => String.fromCharCode(rand(97, 123));
  const geraNumeros = () => String.fromCharCode(rand(48, 58));
  const simbolos = "!@#$%^&*";
  const geraSimbolo = () => simbolos[rand(0, simbolos.length)];

  // função que gera senha
  const geraSenha = () => {
    const senhaArray = [];
    const totalCaracteres = qtdCaracteres;

    for (let i = 0; i < totalCaracteres; i++) {
      if (chkMaiusculas) senhaArray.push(geraMaiscula());
      if (chkMinusculas) senhaArray.push(geraMinuscula());
      if (chkNumeros) senhaArray.push(geraNumeros());
      if (chkSimbolos) senhaArray.push(geraSimbolo());
    }

    senhaArray.sort(() => 0.5 - Math.random());
    setSenhaGerada(senhaArray.join("").slice(0, totalCaracteres));
  };

  return (
    <div className="container">
      <h1>Gerador de senha</h1>
      <p className="senha-gerada">{senhaGerada}</p>
      <div>
        <label>
          <span>Quantidade de caracteres</span>
          <input
            value={qtdCaracteres}
            type="number"
            min="1"
            max="50"
            className="qtd-caracteres"
            name="qtdCaracteres"
            onChange={(e) => setQtdCaracteres(e.target.value)}
          />
        </label>
        <label>
          <span>Adicionar maiúsculas</span>
          <input
            type="checkbox"
            name="chkMaiusculas"
            checked={chkMaiusculas}
            onChange={(e) => setChkMaiusculas(e.target.checked)}
          />
        </label>

        <label>
          <span>Adicionar minusculas</span>
          <input
            type="checkbox"
            name="chkMinusculas"
            checked={chkMinusculas}
            onChange={(e) => setChkMinusculas(e.target.checked)}
          />
        </label>

        <label>
          <span>Adicionar números</span>
          <input
            type="checkbox"
            name="chkNumeros"
            checked={chkNumeros}
            onChange={(e) => setChkNumeros(e.target.checked)}
          />
        </label>

        <label>
          <span>Adicionar símbolos</span>
          <input
            type="checkbox"
            name="chkSimbolos"
            checked={chkSimbolos}
            onChange={(e) => setChkSimbolos(e.target.checked)}
          />
        </label>
        <button onClick={geraSenha}>Gerar Senha</button>
      </div>
    </div>
  );
};

export default Gerador;
