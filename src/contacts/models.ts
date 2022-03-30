import { Sequelize } from 'sequelize'
import db from "../db"

export const Contato = db.define("contatos", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  apelido: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  valor: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  tipo: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isIn: [['telefone', 'email', 'instagram', 'twitter']],
    },
  },
}, {
  timestamps: false,
});