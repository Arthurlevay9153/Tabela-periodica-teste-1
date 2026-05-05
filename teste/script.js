document.addEventListener("DOMContentLoaded", () => {
  const API = [
    { numero: 1, simbolo: "H", nome: "Hidrogênio", massa: "1.008" },
    { numero: 2, simbolo: "He", nome: "Hélio", massa: "4.0026" },
    { numero: 3, simbolo: "Li", nome: "Lítio", massa: "6.94" },
    { numero: 4, simbolo: "Be", nome: "Berílio", massa: "9.0122" },
    { numero: 5, simbolo: "B", nome: "Boro", massa: "10.81" },
    { numero: 6, simbolo: "C", nome: "Carbono", massa: "12.011" },
    { numero: 7, simbolo: "N", nome: "Nitrogênio", massa: "14.007" },
    { numero: 8, simbolo: "O", nome: "Oxigênio", massa: "15.999" },
    { numero: 9, simbolo: "F", nome: "Flúor", massa: "18.998" },
    { numero: 10, simbolo: "Ne", nome: "Neônio", massa: "20.180" }
  ];

  const tabela = document.getElementById("tabela");
  const modal = document.getElementById("modal");

  function render(lista) {
    tabela.innerHTML = "";

    lista.forEach((el) => {
      const div = document.createElement("div");
      div.className = "elemento";

      div.innerHTML = `
        <div class="numero">${el.numero}</div>
        <div class="simbolo">${el.simbolo}</div>
      `;

      div.onclick = () => abrirModal(el);

      tabela.appendChild(div);
    });
  }

  function abrirModal(el) {
    document.getElementById("nome").innerText = el.nome;
    document.getElementById("simbolo").innerText = el.simbolo;
    document.getElementById("numero").innerText = el.numero;
    document.getElementById("massa").innerText = el.massa;

    modal.classList.add("ativo");
  }

  document.getElementById("fechar").onclick = () => {
    modal.classList.remove("ativo");
  };

  document.getElementById("busca").addEventListener("input", (e) => {
    const valor = e.target.value.toLowerCase();

    const filtrados = API.filter(
      (el) =>
        el.nome.toLowerCase().includes(valor) ||
        el.simbolo.toLowerCase().includes(valor)
    );

    render(filtrados);
  });

  render(API);
});
