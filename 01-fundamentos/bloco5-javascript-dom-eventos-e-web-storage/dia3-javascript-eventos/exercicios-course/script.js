function createDaysOfTheWeek() {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

// Escreva seu código abaixo.

// Exercicio 1
const dezDaysList = [
  29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
];
function criaDias() {
  let calendarioLista = document.querySelector("#days");
  for (let i = 0; i < dezDaysList.length; i += 1) {
    let calendarioItems = document.createElement("li");
    calendarioItems.innerText = dezDaysList[i];
    calendarioItems.className = "day";

    calendarioLista.appendChild(calendarioItems);
  }
}
criaDias();

function criaFeriado() {
  for (let i = 25; i <= 26; i += 1) {
    document.getElementsByClassName("day")[i].className += " holiday";
  }
  for (let i = 32; i <= 32; i += 1) {
    document.getElementsByClassName("day")[i].className += " holiday";
  }
}
criaFeriado();

function criaSexta() {
  for (let i = 5; i <= 26; i += 7) {
    document.getElementsByClassName("day")[i].className += " friday";
  }
}
criaSexta();

// Exercicio 2
function criaBotaoFeriados(nomeBotaoFeriados) {
  let containerBotao = document.querySelector(".buttons-container");
  let botaoFeriado = document.createElement("button");
  botaoFeriado.id = "btn-holiday";
  botaoFeriado.innerText = nomeBotaoFeriados;
  containerBotao.appendChild(botaoFeriado);
}
criaBotaoFeriados("Feriados");

// Exercicio 3
let botaoFeriado = document.querySelector("#btn-holiday");
let diasFeriado = document.querySelectorAll(".holiday");

function mudaCorFeriados() {
  let corAtual = diasFeriado[0].style.backgroundColor;

  for (let i = 0; i < diasFeriado.length; i += 1) {
    if (corAtual === "rgb(155, 155, 155)") {
      diasFeriado[i].style.backgroundColor = "rgb(238, 238, 238)";
    } else {
      diasFeriado[i].style.backgroundColor = "rgb(155, 155, 155)";
    }
  }
}
botaoFeriado.addEventListener("click", mudaCorFeriados);

// Exercicio 4
function criaBotaoSexta(nomeBotaoSexta) {
  let containerBotao = document.querySelector(".buttons-container");
  let botaoSexta = document.createElement("button");
  botaoSexta.id = "btn-friday";
  botaoSexta.innerText = nomeBotaoSexta;
  containerBotao.appendChild(botaoSexta);
}
criaBotaoSexta("Sexta-feira");

// Exercicio 5
let botaoSexta = document.querySelector("#btn-friday");
let diasSexta = document.querySelectorAll(".friday");

function mudaCorSexta() {
  let corAtual = diasSexta[0].style.backgroundColor;

  for (let i = 0; i < diasSexta.length; i += 1) {
    if (corAtual === "rgb(57, 95, 64)") {
      diasSexta[i].style.backgroundColor = "rgb(238, 238, 238)";
    } else {
      diasSexta[i].style.backgroundColor = "rgb(57, 95, 64)";
    }
  }
}
botaoSexta.addEventListener("click", mudaCorSexta);

// Exercicio 6

function colocaZoomDias() {
  let diasDoMes = document.querySelector("#days");

  diasDoMes.addEventListener("mouseover", function (event) {
    event.target.style.fontSize = "30px";
    event.target.style.fontWeight = "600";
  });
}
colocaZoomDias();

function voltaZoomDias() {
  let diasDoMes = document.querySelector("#days");

  diasDoMes.addEventListener("mouseout", function (event) {
    event.target.style.fontSize = "20px";
    event.target.style.fontWeight = "200";
  });
}
voltaZoomDias();

// Exercicio 7

// Exercicio 8

// Exercicio 9

// Exercicio 10
