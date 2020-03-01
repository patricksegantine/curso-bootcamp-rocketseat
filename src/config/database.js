module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'gobarber_pwd',
  database: 'gobarber',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true
  }
};
