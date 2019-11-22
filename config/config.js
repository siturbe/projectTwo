module.exports = {
  "development": {
    "username": process.env.MYSQL_USER,
    "password": process.env.MYSQL_KEY,
    "database": process.env.MYSQL_DBNAME,
    "host": process.env.MYSQL_HOST,
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
    "use_env_variable2": 'PL_API_KEY',
    "use_env_variable3": 'PL_API_HOST',
    "dialect": "mysql"
  }
  
}
