var fs = require('fs');
var path = require('path');
var analyze = require('../');
var livestyle = require('emmet-livestyle');

livestyle.logger.silent(true);

describe('LiveStyle Analyzer', function() {
	var stylesheet = fs.readFileSync(path.join(__dirname, 'stylesheet.less'), 'utf8');

	it('test', function(done) {
		livestyle.resolve(stylesheet, {syntax: 'less'}, function(err, tree) {
			var result = analyze(tree);

			console.log('Result\n', tree.toCSS());
			// console.log('Source', result.source.children);
			// console.log('Result', result.result.children);
			// console.log('References', result.references);
			console.log('Selectors', result.selectors);
			console.log('Completions', result.completions);
			done();
		});
	});
});