var scope = {
	pdftk : __dirname + "/bin/pdftk"
}

module.exports.burst = function(){
	require('./lib/burst').apply(scope, arguments)
};