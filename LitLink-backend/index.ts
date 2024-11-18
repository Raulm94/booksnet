import 'dotenv/config'; // Cargar variables de entorno
import app from './src/app'; // Importar configuración de Express
import { sequelize } from './src/models'; // Conexión a la base de datos

const PORT = process.env.PORT || 5000;

// Sincronizar con la base de datos y luego iniciar el servidor
sequelize.sync({ force: false }).then(() => {
  console.log('Database connected successfully!');
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}).catch((err: any) => {
  console.error('Failed to connect to the database:', err);
});
