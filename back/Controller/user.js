
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');


exports.signup = (req, res, next) => {
    bcrypt.hash(req.body.password, 10)
      .then(hash => {

          var sql = 'INSERT INTO user (email, password) VALUE ?'
          var values = [ [ req.body.email, hash] ];

          con.query(sql, [ values ], function(err, result) {
            if (err) throw err;
            res.status(200).json(result);
          });

      })
      .catch(error => res.status(500).json({ error }));
  };

  exports.login = (req, res, next) => {
    var sql = 'SELECT * FROM user WHERE email = ?';
    var value = [[req.body.email]];
    con.query(sql, value, function(err, result) 
    {
        if (result.length == 0) {
          return res.status(401).json({ error: 'Utilisateur non trouvé !' });
        }
        bcrypt.compare(req.body.password, result[0].password)
          .then(valid => {
            if (!valid) {
              return res.status(401).json({ error: 'Mot de passe incorrect !' });
            }
            res.status(200).json({
              userId: result[0].id,
              token: jwt.sign(
                  {userId: result[0].id},
                  'RANDOM_TOKEN_SECRET',
                  {expiresIn: '24h'}
              )
            });
          })
          .catch(error => res.status(500).json({ error }));
      })
  };