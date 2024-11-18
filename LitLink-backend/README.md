my-backend/
├── src/
│   ├── config/         # Configuración (Base de datos, variables de entorno, etc.)
│   │   ├── database.ts
│   │   └── env.ts
│   ├── controllers/    # Lógica de los endpoints
│   │   ├── auth.controller.ts
│   │   └── user.controller.ts
│   ├── middlewares/    # Middlewares (autenticación, validaciones, etc.)
│   │   └── auth.middleware.ts
│   ├── models/         # Modelos (ORM con Sequelize)
│   │   ├── index.ts
│   │   └── user.model.ts
│   ├── routes/         # Definición de rutas
│   │   ├── auth.routes.ts
│   │   └── user.routes.ts
│   ├── utils/          # Funciones auxiliares
│   └── app.js          # Configuración principal de Express
├── .env                # Variables de entorno
├── .gitignore          # Ignorar node_modules, .env, etc.
├── index.ts            # Entrada principal
├── package.json
└── README.md
