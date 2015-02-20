
var getCaller = require('./getCaller');

function test() {
	var caller = getCaller();
	console.log(caller.filename);
}

test();
