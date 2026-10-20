const db = require("../db/conn")
const { DataTypes } = require("sequelize")

const Veiculo = db.define(
	"veiculo",
	{
		idVeiculo: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		modelo: {
			type: DataTypes.STRING,
			allowNul: false
		},
		marca: {
			type: DataTypes.STRING,
			allowNul: false
		},
		placa: {
			type: DataTypes.STRING(7),
			allowNul: false
		},
		rastreador: {
			type: DataTypes.STRING,
			allowNul: false
		},
		idCliente: {
			type: DataTypes.INTEGER,
			allowNul: false,
			references: {
				model: "clientes",
				key: "idCliente"
			},
		}
	},
	{
		timestamps: false,
		tableName: "veiculos"
	}
)

module.exports = Veiculo
