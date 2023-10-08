module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            development: {
                files: {
                    'build/styles/main.css' : 'src/styles/main.less'
                }
            },
                production: {
                    options: {
                    compress: true
                },
                files: {
                    'build/styles/main.min.css' : 'src/styles/main.less'
                }
            }
        }, 
        uglify: {
            target: {
                files: {
                    'build/js/main.min.js' : 'src/js/main.js'
                }
            }
        }        
    })
    grunt.loadNpmTasks('grunt-contrib-uglify')
    grunt.loadNpmTasks('grunt-contrib-less')

    grunt.registerTask('default', ['less', 'uglify']);
}
