import sqlite3 from 'sqlite3';

const dataModel = {
  getData: () => {
    return new Promise((resolve, reject) => {
      const db = new sqlite3.Database('./database/database.db');

      // db.run('CREATE TABLE IF NOT EXISTS website (title TEXT, content TEXT)');
      // db.run('INSERT INTO website (title, content) VALUES (?, ?)', [
      //   'Hello, world!',
      //   'This is a simple MVC app',
      // ]);

      db.get('SELECT title, content FROM website', (err, row) => {
        if (err) reject(err);
        else resolve(row);
        console.log(row);
      });

      db.close();
    });
  },
};

export default dataModel;
