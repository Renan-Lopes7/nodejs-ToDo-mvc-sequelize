const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('nodemvc2', 'root', 'lopeslopes', {

    host: 'localhost',
    dialect: 'mysql',
})


try {
    sequelize.authenticate()
    console.log('conectamos com sucesso');
}
catch (err) {
    console.log(`não foi possivel se conectar ${err}`)
}

module.exports = sequelize