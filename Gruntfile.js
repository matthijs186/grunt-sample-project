module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		sass: {
			options: {
				sourceMap: true
			},
			dist: {
				files: {
					'src/assets/css/style.css': 'src/assets/sass/style.scss'
				}
			}
		},

		watch: {
			sass: {
				files: ['src/assets/sass/**/*.scss'],
				tasks: ['sass']
			}
		}
	});

	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['sass', 'watch']);
};
