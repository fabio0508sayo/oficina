const conn = require("../db/conn")
const { DataTypes } = require("sequelize")

const Cliente = conn.define(
	"cliente",
	{
		idCliente: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		nome: {
			type: DataTypes.STRING,
			allowNul: false
		},
		email: {
			type: DataTypes.STRING,
			unique: true,
			allowNul: false
		},
		senha: {
			type: DataTypes.STRING,
			allowNul: false
		},
		cpf: {
			type: DataTypes.STRING,
			unique: true,
			allowNul: false
		},
		endereco: {
			type: DataTypes.STRING,
			allowNul: false
		},
		telefone: {
			type: DataTypes.STRING,
			allowNul: false
		}
	},
	{
		timestamps: false,
		tableName: "clientes"
	}
)

module.exports = Cliente
