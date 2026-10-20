const cryptoJs = require("crypto-js")
const authMiddleware = async (req, res, next) => {
	const token = req.headers(["authorization"])

	if (!token) return res.status(401).json({ message: "usuário não autenticado" })

	try {
		const bytes = cryptoJs.AES.decrypt(token, "segredo")
		const tokenDescriptografado = JSON.parse(bytes.toString(CryptoJS.enc.Utf8)) || ""

		if (!tokenDescriptografado) return res.status(401).json({ message: "usuário não autenticado" })
		if (tokenDescriptografado.expiraEm > Date.now()) return res.status(401).json({ message: "sessão expirada" })

		next()
	} catch (error) {
		return res.status(500).json({ message: "erro ao autenticar" })
	}
}
module.exports=authMiddleware