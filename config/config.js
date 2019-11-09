module.exports = {
  "development": {
    "username": process.env.MYSQL_USER2,
    "password": process.env.MYSQL_KEY2,
    "database": process.env.MYSQL_DBNAME2,
    "host": process.env.MYSQL_HOST2,
    "dialect": "mysql"
  },
  "test": {
    "username": process.env.MYSQL_USER,
    "password": process.env.MYSQL_KEY,
    "database": process.env.MYSQL_DBNAM,
    "host": process.env.MYSQL_HOST,
    "dialect": "mysql",
    "logging": false
  },
  "production": {
    "use_env_variable": "JAWSDB_URL",
    "dialect": "mysql"
  }
  
}
