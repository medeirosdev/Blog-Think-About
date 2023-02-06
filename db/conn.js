const {Sequelize} = require('sequelize')

const sequelize = new Sequelize('toughts2' , 'gui' ,'guigui167', {
    host: 'localhost' ,
    dialect: 'mysql'
})

try {
    sequelize.authenticate()
    console.log("Conectamos com sucesso")
} catch(err){
    console.log("Não foi possível" + err)
}

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}