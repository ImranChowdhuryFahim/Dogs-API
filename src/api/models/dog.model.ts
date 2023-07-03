// import { DataTypes, Sequelize } from "sequelize";
import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../../database/connection';

interface DogsAttribute {
	name: string;
	color: string;
	tail_length: number;
	weight: number;
}


/**
 * @swagger
 * components:
 *   schemas:
 *     Dog:
 *       type: object
 *       required:
 *         - name
 *         - color
 *         - tail_length
 * 		   - weight
 *       properties:
 *         name:
 *           type: string
 *         color:
 *           type: string
 *         tail_length:
 *           type: number
 *         weight:
 *           type: number
 */

export class DogsInstance extends Model<DogsAttribute> { }


DogsInstance.init(
	{
		name: {
			type: DataTypes.STRING,
			primaryKey: true,
			allowNull: false,
		},
		color: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		tail_length: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		weight: {
			type: DataTypes.INTEGER,
			allowNull: false,
		}
	},
	{
		sequelize: sequelize,
		tableName: 'dogs',
		createdAt: false,
		updatedAt: false,
	}
);

