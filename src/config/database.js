/* eslint linebreak-style: ["error", "windows"] */

module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    port: 2807,
    username: 'postgres',
    password: 'docker',
    database: 'nutcacheemployeetable',
    define: {
      timestamps: false,
      underscored: false,
      underscoredAll: false,
    },
  };
  