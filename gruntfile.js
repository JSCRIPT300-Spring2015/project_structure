module.exports = function (grunt) {

	grunt.initConfig ({

		jshint: {
			all: {
				src: ['app/**/*.js']
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	//grunt.loadNpmTasks('grunt-mocha');
	//grunt.registerTask('default', ['jshint', 'mocha']);
};
