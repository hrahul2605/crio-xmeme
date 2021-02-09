import dotenv from "dotenv";

dotenv.config();

const swaggerConfig = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "XMeme API Docs by hrahul2605",
      version: "1.0.0",
      description: "API Documentation for XMeme",
      license: {
        name: "MIT",
      },
      contact: {
        name: "Rahul Halder",
        url: "https://github.com/hrahul2605",
        email: "hrahul2605@gmail.com",
      },
    },
    servers: [
      {
        url: "http://localhost:8081",
      },
    ],
  },
  apis: ["src/api/routes/*.{ts,js}", "src/entity/*.{ts,js}"],
};

export default {
  PORT: parseInt(process.env.PORT, 10) || 8081,
  SWAGGER_PORT: parseInt(process.env.SWAGGER_PORT) || 8080,
  DB_CONNECTION_NAME:
    process.env.NODE_ENV === "production" ? "production" : "default",
  SWAGGER_CONFIG: swaggerConfig,
};
