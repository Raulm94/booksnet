import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/database';

interface RoleAttributes {
    role_id: number;
    name: string;
    description: string;
}

interface AppUserCreationAttributes extends Optional<RoleAttributes, 'role_id'> { }

class Role extends Model<RoleAttributes, AppUserCreationAttributes> implements RoleAttributes {
    public role_id!: number;
    public name!: string;
    public description!: string;
}

Role.init(
    {
        role_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            field: 'rol_id'
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true,
        }
    },
    {
        sequelize,
        modelName: 'Role',
        tableName: 'rol', // Nombre de la tabla en la base de datos
        timestamps: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
    }
);

export default Role;