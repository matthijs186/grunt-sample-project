module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		sass: {
			options: {
				sourceMap: true
			},
			dist: {
				files: {
					'style.css': 'style.scss'
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-sass');
};
