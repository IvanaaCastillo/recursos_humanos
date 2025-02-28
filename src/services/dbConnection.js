import { dbConfig } from "../config/db.config.js";
import { models } from "../models/init-models.js";

export const dbConnect = async() => {
    try {
        await dbConfig.authenticate();
        models
        await dbConfig.sync(/* {  alter: true  } */) 
        console.log('Logramos conectarnos a postgre a traves de Sequelize')
    } catch (error) {
        console.error('No pudimos conectarnos a la DB', error);
        process.exit(1)
    }
};