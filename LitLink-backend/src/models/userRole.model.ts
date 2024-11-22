import { DataTypes, ForeignKeyConstraintError, Model, Optional } from 'sequelize';
import sequelize from '../config/database';

interface UserRoleAttributes {
    userRole_id: number;
    appUser_id: number;
    role_id: number;
    club_id: number;
}

type UserRoleCreationAttributes = Optional<UserRoleAttributes, 'userRole_id'>;

class UserRole extends Model<UserRoleAttributes, UserRoleCreationAttributes> implements UserRoleAttributes {
    public userRole_id!: number;
    public appUser_id!: number;
    public role_id!: number;
    public club_id!: number;
}
UserRole.init(
    {
        userRole_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            field: 'userrol_id'
        },
        appUser_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: false,
            field: 'appuser_id'
        },
        role_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: false,
            field: 'rol_id'
        },
        club_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: false,
        },
    },
    {
        sequelize,
        modelName: 'UserRole',
        tableName: 'userrol', // Nombre de la tabla en la base de datos
        timestamps: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
    }
);

export default UserRole;