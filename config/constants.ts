// Purpose: To store all the constants used in the application.
export const config = {
  PORT: 5000,

  MESSAGE: {
    WELCOME: "You're successfully connected to GOSPEL API.",
  },

  DB: {
    // Create you own mongodb URI from Atlas MongoDB and use it here.
    URI: "mongodb+srv://myAtlasDBUser:database_2025@myatlasclusteredu.4pyi0.mongodb.net/?retryWrites=true&w=majority&appName=myAtlasClusterEDU",
    ERROR: "Error connecting to database: ",
    NOT_INITIALIZED: "Database connection not initialized",
    CONNECTED: "Connected to database",
  },
};
