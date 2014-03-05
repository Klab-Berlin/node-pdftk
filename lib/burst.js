var exec = require('child_process').exec;

module.exports = function(data, callback){
	
	var command = [
		this.pdftk,
		data.file,
		'burst',
		'output',
		data.output
	];
	exec(command.join(' '), function (err, stdout, stderr) {
		if (callback) {
			callback(err, stdout, stderr);
		} 
		else {
			if (err) throw new Error(err);
		}
	});
}