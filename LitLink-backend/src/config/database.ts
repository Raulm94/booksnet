import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(
  process.env.DB_NAME || 'default',
  process.env.DB_USER || 'default',
  process.env.DB_PASSWORD || 'default',
  {
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT || '5432', 10),
    dialect: 'postgres',
  }
);

export default sequelize;
