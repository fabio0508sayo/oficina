const Veiculo = require("../model/Veiculo")
const Cliente = require("../model/Cliente")

const cadastrar = async (req, res) => {
	const valores = req.body

	try {
		const cliente = await Cliente.findByPk(valores.idCliente)
		if (!cliente) return res.status(404).json({ message: "cliente inexistente" })

		await Veiculo.create(valores)
		return res.status(201).json({message:'cadastro feito com sucesso'})
	} catch (error) {
		console.error(error)
		return res.status(500).json({ message: "erro ao cadastrar veículo" })
	}
}

const consultarId = async (req, res) => {
	const { id } = req.params

	try {
		const veiculo = await Veiculo.findByPk(id)
		if (!veiculo) return res.status(404).json({ message: "veículo não encontrado" })

		return res.status(200).json(veiculo)
	} catch (error) {
		console.error(error)
		return res.status(500).json({ message: "erro ao consultar veículo" })
	}
}

module.exports = { cadastrar, consultarId }
