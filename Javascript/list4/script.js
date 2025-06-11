let vendasDoDia = [10.70, 5.50, 2.25, 1.0, 55.25, 110.30, 80.0]
content = document.getElementById("content")
result = document.getElementById("result")
content.innerHTML = "Vendas do Dia <br>"

for (let i = 0; i < vendasDoDia.length; i++) {
  content.innerHTML += "R$" + vendasDoDia[i] + " | "
}


function ex1() {
  let soma = 0

  for (let i = 0; i < vendasDoDia.length; i++) {
    soma += vendasDoDia[i]
  }

  result.innerHTML = "Soma das Vendas: " + soma
  return soma
}
function ex2() {
  let maiorNumero = vendasDoDia[0]
  let menorNumero = vendasDoDia[0]
  // {10.70,5.50,2.25,1.0,55.25,110.30,80.0}

  for (let i = 0; i < vendasDoDia.length; i++) {
    if (vendasDoDia[i] > maiorNumero) {
      maiorNumero = vendasDoDia[i]
    }
    if (vendasDoDia[i] < menorNumero) {
      menorNumero = vendasDoDia[i]
    }
  }

  result.innerHTML = "Maior Venda: R$" + maiorNumero
  result.innerHTML += "<br>Menor Venda: R$" + menorNumero

}
function ex3() {
  let ticketMedio = ex1() / vendasDoDia.length
  result.innerHTML = "O ticket médio é R$" + ticketMedio.toFixed(2)
}
function ex4() {
  let lista = [3, 5, 6, 7, 8, 10, 22, 55, 110]
  content.innerHTML = lista
  let contador = 0

  for (let i = 0; i < lista.length; i++) {
    if (lista[i] % 2 == 0) {
      contador++
    }
  }
  result.innerHTML = "Existem " + contador + " Números Pares"
}

let lista = ["Maça", "Banana", "Iogurte", "Batata", "Arroz"]
let quantidade = 0

function ex5() {


}

function inserirItem() {
  input = document.getElementById("hiddenItems")
  input.style.display = 'flex'
  document.getElementById("main").style.opacity = '0.1'

}
function additem() {
  item = document.getElementById("inputItem").value

  try {
    lista.push(item)
    div = document.querySelector(".success")
    div.style.display = 'block'
    input = document.getElementById("hiddenItems")
    input.style.display = 'none'
    document.getElementById("main").style.opacity = '1'
  } catch {
    div = document.querySelector(".success2")
    div.style.display = 'block'
    input = document.getElementById("hiddenItems")
    input.style.display = 'none'
    document.getElementById("main").style.opacity = '1'
  }
}
function closeInput() {
  input = document.getElementById("hiddenItems")
  input.style.display = 'none'
  document.getElementById("main").style.opacity = '1'
}

function closeSucess() {
  div = document.querySelector(".success")
  div.style.display = 'none'

}
function closeSucess2() {
  div = document.querySelector(".success2")
  div.style.display = 'none'

}
function removeItem(id) {
  console.log(id)
  lista.splice(id, 1)
  showList()
}
function closeList() {
  div = document.getElementById("hiddenList")
  div.style.display = 'none'
  listaBox = document.getElementById("itemList")
  listaBox.innerHTML = ""

}



function showList() {
  div = document.getElementById("hiddenList")
  listaBox = document.getElementById("itemList")
  listaBox.innerHTML = "<span onclick='closeList()' class='icon3'>❌</span>"
  div.style.display = 'flex'

  for (let i = 0; i < lista.length; i++){
    listaBox.innerHTML +="<li>" + lista[i] + ` <span class='iconTrash' onclick = 'removeItem(${i})'>🗑</span></li>`
  }
}


