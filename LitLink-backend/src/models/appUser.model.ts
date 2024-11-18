import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/database';

interface AppUserAttributes {
  appuser_id: number;
  email: string;
  password: string; // Campo para almacenar el hash
  name: string;
  lastname: string;
}

interface AppUserCreationAttributes extends Optional<AppUserAttributes, 'appuser_id'> { }

class AppUser extends Model<AppUserAttributes, AppUserCreationAttributes> implements AppUserAttributes {
  public appuser_id!: number;
  public email!: string;
  public password!: string; // Aquí se almacena el hash de la contraseña
  public name!: string;
  public lastname!: string;
}

AppUser.init(
  {
    appuser_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },
  },
  {
    sequelize,
    modelName: 'AppUser',
    tableName: 'appuser', // Nombre de la tabla en la base de datos
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);

export default AppUser;