const cryptoJs = require("crypto-js")
const Cliente = require("../model/Cliente")

const login = async (req, res) => {
	const { email, senha } = req.body

	try {
		const cliente = Cliente.findOne({ where: { email: email } })

		if (!cliente || senha !== cryptoJs.AES.decrypt(senha, "segredo")) {
			return res.status(404).json({ message: "credenciais inválidas" })
		}

		const tresHorasMs = 3 * 60 * 60 * 1000
		const tempoExpiracao = Date.now() + tresHorasMs

		const token = cryptoJs.AES.encrypt(
			JSON.stringify({
				idCliente: cliente.idCliente,
				expiraEm: tempoExpiracao
			}),
			"segredo"
		).toString()

		res.status(200).json({ token: token })
	} catch (error) {
		res.status(401).json({ message: "erro ao fazer login" })
	}
}

module.exports = { login }
