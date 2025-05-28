// db/config.js



// Import the pg module to interact with PostgreSQL

const { Pool } = require('pg');



// Retrieve the database connection string from the environment variable

const DB_CONFIG = process.env.DB_CONFIG;



if(!DB_CONFIG) {

      console.error('ERROR: Environment variable DB_CONFIG is not set.');

        process.exit(1); // Exit if the DB config is missing

}



// Create a new PostgreSQL connection pool

const pgconn = new Pool({

      connectionString: DB_CONFIG,

        ssl: false // Set to true if your DB requires SSL

});



// Export the connection so it can be used elsewhere in the app

module.exports = pgconn;