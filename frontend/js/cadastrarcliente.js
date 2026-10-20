let btn = document.getElementById('btn')
let resposta = document.getElementById('resposta')
btn.addEventListener('click',(e)=>{
    e.preventDefault()

const nome = document.getElementById('nome').value
const email = document.getElementById('email').value
const senha = document.getElementById('senha').value
const cpf = document.getElementById('cpf').value
const endereco = document.getElementById('endereco').value
const telefone = document.getElementById('telefone').value

const valores = {
    nome:nome,
    email:email,
    senha:senha,
    cpf:cpf,
    endereco:endereco,
    telefone:telefone,
}
  fetch('http://localhost:3000/cliente', {
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
            console.error('Erro ao cadastrar o cliente', err)
            resposta.innerHTML = '<p>Erro ao tentar cadastrar o cliente.</p>'
        })
})