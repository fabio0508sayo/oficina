const { Agendamento, Cliente, Veiculo } = require("./model/rel")
const conn = require("./db/conn")

async function database()  {
	try {
		console.log("sincronizando tabelas...")
		await conn.sync({ force: true })
	} catch (error) {
		console.error(error)
	} finally {
		await conn.close()
		console.log("tabelas sincronizadas")
	}
}
database()
