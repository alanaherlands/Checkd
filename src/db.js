const mongoose = require('mongoose');

const url = 'mongodb://your-mongodb-url';
const dbName = 'your-database-name';

async function connect() {
  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const db = mongoose.connection.db;

    return db;
  } catch (error) {
    console.error('Failed to connect to the database:', error);
    throw error;
  }
}

module.exports = connect;