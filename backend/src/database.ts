import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('mysql://root:password@localhost:3306/pitu_url');

export default sequelize;