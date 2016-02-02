/*
 * Dependencies
 */
const Pkg = require('../../package.json')

module.exports = {

	version: (req, res) => {
		res.json({ version: Pkg.version })
	}
}
