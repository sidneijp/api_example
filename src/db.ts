import { Sequelize } from 'sequelize'

const db = new Sequelize('postgres://api_user:api_password@localhost:5432/api_database')

export default db