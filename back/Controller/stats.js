var mysqlM = require('mysql-model');
const mysql = require('mysql');
var con = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '193705',
	database: 'matrice'
});

exports.getAll = (req, res, next) => {
	con.query('SELECT * FROM user', function(err, result) {
		if (err) throw err;
		res.status(200).json(result);
	});
};

exports.getOne = (req, res, next) => {
	var sql = 'SELECT * FROM user WHERE id_user = ' + req.params.id;
	con.query(sql, function(err, result) {
		if (err) throw err;
		res.status(200).json(result);
	});
};

/////////////////////////// user id
exports.getTables = (req, res, next) => {
	var sql = 'SELECT * FROM table_of_contents';
	con.query(sql, function(err, result) {
		if (err) throw err;
		res.status(200).json(result);
	});
};


////////////////////////////////
exports.getStats = (req, res, next) => {

	var sql =
		"SELECT * FROM stats INNER JOIN table_of_contents WHERE stats.table_of_contents_name = table_of_contents.name AND table_of_contents.user_id_user = '1' AND table_of_contents_name = ?";
	con.query(sql, req.params.id, function(err, result) {
		if (err) throw err;
		res.status(200).json(result);
	});
};

exports.postStats = (req, res, next) => {
	var sql = 'INSERT INTO table_of_contents (name, color) VALUE ?';
	var values = [ [ req.body.name, req.body.color] ];

	con.query(sql, [ values ], function(err, result) {
		if (err) throw err;
		res.status(200).json(result);
	});
};

exports.delStats = (req, res, next) => {

    var sql = "DELETE FROM table_of_contents WHERE name = ?";
    con.query(sql, req.params.id, function(err, result) {
		if (err) throw err;
		res.status(200).json(result);
	});
}

exports.putStat = (req, res, next) => {
	var values1 = [ [ req.body.name], [req.body.color], req.params.id];
	var sql = "UPDATE table_of_contents SET name= ?, color= ? WHERE name= ?";
	con.query(sql, values1, function(err, result) {
		if (err) throw err;
		res.status(200).json({ message: 'Objet modifié !'})
	});
    
}

//////////////////////////////
exports.getNote = (req, res, next) => {
	var sql = 'SELECT * FROM note';
	con.query(sql, function(err, result) {
		if (err) throw err;
		res.status(200).json(result);
	});
};


exports.postNote = (req, res, next) => {
	var sql = 'INSERT INTO note (name, content) VALUE ?';
	var values = [ [ req.body.name, req.body.content] ];

	con.query(sql, [ values ], function(err, result) {
		if (err) throw err;
		res.status(200).json(result);
	});
};

exports.putNote = (req, res, next) => {
	var values1 = [ [ req.body.name], [req.body.content], req.params.id];
	var sql = "UPDATE note SET name = ?, content = ? WHERE id_note= ?";
	con.query(sql, values1, function(err, result) {
		if (err) throw err;
		res.status(200).json({ message: 'Objet modifié !'})
	});
    
}

exports.delNote = (req, res, next) => {

    var sql = "DELETE FROM note WHERE id_note = ?";
    con.query(sql, req.params.id, function(err, result) {
		if (err) throw err;
		res.status(200).json(result);
	});
}