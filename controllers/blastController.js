const blast = require('blastjs');
const fs = require('fs');
const path = require('path');
const api = {};

const dbRoot = './dbs';

api.getDBs = function(req, res) {
  fs.readdir(dbRoot, function(err, files) {
    const dbs = [];
    if (err) {
      return res.status(500).json({error: err});
    }
    files.map(function(file) {
      const pin = file.indexOf('.pin');
      const nin = file.indexOf('.nin');
      if (pin > -1) {
        dbs.push({name: file.split('.pin')[0], type: 'pin'});
      }
      if (nin > -1) {
        dbs.push({name: file.split('.nin')[0], type: 'nin'});
      }
    });
    return res.json({dbs: dbs});
  });
};

api.blast = function(req, res) {
  if (req.body) {
    console.log(req.body);
    const query = req.body.query;
    const db = req.body.db;
    if (req.body.useString) {
      blast.outputString(true);
    }
    if (query && query.length > 0) {
      if (db && db.name && db.type) {
        const dbPath = path.join(dbRoot, db.name);
        if (db.type == 'pin') {
          blast.blastP(dbPath, query, function(err, output) {
            if (err) {
              return res.json({error: err});
            } else {
              return res.json({output: output});
            }
          });
        } else {
          blast.blastN(dbPath, query, function(err, output) {
            if (err) {
              return res.json({output: output});
            } else {

            }
          });
        }
      } else {
        return res.json({error: 'did not receive any dbs'});
      }
    } else {
      return res.json({error: 'did not receive query'});
    }
  } else {
    return res.json({error: 'did not receive body'});
  }
};

module.exports = api;
