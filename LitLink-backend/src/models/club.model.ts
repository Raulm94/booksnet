import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/database';

interface ClubAttributes {
    club_id: number;
    title: string;
    description: string;
    location: string;
    created_by: string;
}

interface AppUserCreationAttributes extends Optional<ClubAttributes, 'club_id'> { }

class Club extends Model<ClubAttributes, AppUserCreationAttributes> implements ClubAttributes {
    public club_id!: number;
    public title!: string;
    public description!: string;
    public location!: string;
    public created_by!: string;
}

Club.init(
    {
        club_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        location: {
            type: DataTypes.STRING,
        },
        created_by: {
            type: DataTypes.STRING,
            allowNull: true,
        },

    },
    {
        sequelize,
        modelName: 'Club',
        tableName: 'club', // Nombre de la tabla en la base de datos
        timestamps: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
    }
);

export default Club;