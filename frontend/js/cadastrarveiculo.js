let btn = document.getElementById('btn')
let resposta = document.getElementById('resposta')
btn.addEventListener('click',(e)=>{
    e.preventDefault()

const modelo = document.getElementById('modelo').value
const marca = document.getElementById('marca').value
const placa = document.getElementById('placa').value
const rastreador = document.getElementById('rastreador').value
const idCliente = document.getElementById('idCliente').value

const valores = {
    modelo:modelo,
    marca:marca,
    placa:placa,
    rastreador:rastreador,
    idCliente:idCliente,
}
  fetch('http://localhost:3000/veiculo', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(valores)
    })
    .then(res=>res.json())
    .then(dados=>{
        console.log(dados.message)
            resposta.innerHTML = ''
            resposta.innerHTML += `<p>${dados.message}</p>`
            document.querySelector('form').reset()
    })
     .catch((err) => {
            console.error('Erro ao cadastrar o veiculo', err)
            resposta.innerHTML = '<p>Erro ao tentar cadastrar o veiculo.</p>'
        })
})