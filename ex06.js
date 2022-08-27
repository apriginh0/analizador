var re = window.document.querySelector('input#recebe')
var valor = window.document.querySelector('select.val')
var res = window.document.querySelector('div#res')
var valores = []

function isNumb(n) {
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}
function inList(n, l) {
    if(l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function recebe() {
    if(isNumb(re.value) && !inList(re.value, valores)) {
        valores.push(Number(re.value))
        let item = document.createElement('option')
        item.text = `Valor ${re.value} adicionado`
        valor.appendChild(item)
        res.innerHTML = `Aqui, aparecerá o resultado`
    } else {
        window.alert('Digita um número entre 1 e 100, e não repete, disgraaaça!')
    }
    re.value = '' // para a caixa que recebe dados continuar limpa, após add o number.
    re.focus()  // usado para manter o cursor dentro da caixa, basta digitar novamente.
}
function analizar() {
    if(valores.length == 0) {
        window.alert(`[ERRO] adiciona alguma coisa, arrombado`)
    } else {
        function comparar(a, b) {
            return a - b;
        }
        let soma = 0
        valores.sort(comparar)
        for(let i = 0; i < valores.length; i++) {
            let valIndex = i;
            soma += valores[valIndex];
        }
        res.innerHTML = `Ao todo, temos ${valores.length} números cadastrados.</br></br>
        O maior valor informado é: ${valores[valores.length-1]}.</br></br>
        O menor valor informado é: ${valores[0]}.</br></br>
        Somando todos os valores, temos: ${soma}.</br></br>
        A média dos valores digitados é: ${soma/valores.length}.`
    }
}