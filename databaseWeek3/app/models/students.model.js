
var DbStudents = function(){
	var mysql = require('mysql');

	var connection = mysql.createConnection({
		host : 'localhost',
		user : 'root',
		password : '',
		database : 'w3'
	});

	connection.connect(function(err){
		if(err){
			console.error('error connecting : '+err.stack);
			return;
		}
		console.log('connecting DB success');
	});
	
	this.console = function(sql,callback){
		connection.query(sql,function(err_query,result,field){
			if(err_query){
				callback(true,err_query)
			}
			callback(false,result);
		})
	}

	this.showAll = function(callback){
		var sql = 'SELECT * FROM students';
		connection.query(sql,function(err_query,result,field){
			if(err_query){
				console.log(err_query);
				callback(true)
			}
			callback(false,result);
		})
	}
	this.addStudent = function(id,year,semester,id_sub,credits,gpa,score,name_sub,callback){

		var sql = "INSERT INTO `students` (`id`, `year_st`, `semester`, `id_sub`, `credits`, `gpa`, `score`, `name_sub`) VALUES ('"+id+"', '"+year+"', '"+semester+"', '"+id_sub+"', '"+credits+"', '"+gpa+"', '"+score+"', '"+name_sub+"');"
			connection.query(sql,function(err_insert,result_insert){
				if(err_insert) callback(true);
				else{
					callback(false)
				}
			})
	}
	this.addStudents = function(id,year,semester,id_sub,credits,gpa,score,name_sub,callback){
	
		var sql = "INSERT INTO `students` (`id`, `year_st`, `semester`, `id_sub`, `credits`, `gpa`, `score`, `name_sub`) VALUES ('"+id+"', '"+year+"', '"+semester+"', '"+id_sub+"', '"+credits+"', '"+gpa+"', '"+score+"', '"+name_sub+"');"
			connection.query(sql,function(err_insert,result_insert){
				if(err_insert) callback(true);
				else{
					callback(false);
				}
			})
	
	}


}



module.exports = DbStudents;