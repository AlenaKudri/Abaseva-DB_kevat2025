const db = require('../database');

const borrower = {

  getAll: function(callback) {
    return db.query('SELECT * FROM borrower', callback);
  },
  
  getById: function(id, callback) {
    return db.query('SELECT * FROM borrower WHERE id_borrower=?', [id], callback);
  },

  add: function(borrower, callback) {
    return db.query(
      'INSERT INTO borrower (fname, lname, streetAddress) VALUES(?, ?, ?)',
      [borrower.fname, borrower.lname, borrower.streetAddress],
      callback
    );
  },

  delete: function(id, callback) {
    return db.query('DELETE FROM borrower WHERE id_borrower=?', [id], callback);
  },

  update: function(id, borrower, callback) {
    return db.query(
      'UPDATE borrower SET fname=?, lname=?, streetAddress=? WHERE id_borrower=?',
      [borrower.fname, borrower.lname, borrower.streetAddress, id],
      callback
    );
  }
};

module.exports = borrower;
