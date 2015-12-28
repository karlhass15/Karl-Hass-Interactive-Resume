module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            app: {
                src: 'client/scripts/app.js',
                dest: 'server/public/assets/scripts/app.min.js'
            },
            contactController: {
                src: 'client/scripts/controllers/ContactFormController.js',
                dest: 'server/public/assets/scripts/controllers/ContactFormController.min.js'
            }

        },
        copy: {
            angular: {
                expand: true,
                cwd: 'node_modules',
                src: [
                    "angular/angular.min.js",
                    "angular/angular.min.js.map"
                ],
                "dest": "server/public/vendors/"
            },
            bootstrap: {
                expand: true,
                cwd: 'node_modules',
                src: [
                    "bootstrap/bootstrap.min.css"
                ],
                dest: "server/public/vendors/"
            },
            css: {
                expand: true,
                cwd: 'client',
                src: [
                    "styles/style.css"
                ],
                "dest": "server/public/assets/"
            },
            Ex_css: {
                expand: true,
                cwd: 'client',
                src: [
                    "styles/experience.css"
                ],
                "dest": "server/public/assets/"
            },
            html: {
                expand: true,
                cwd: 'client',
                src: [
                    "views/index.html"
                ],
                "dest": "server/public/assets/"
            },
            htmlTemplates: {
                expand: true,
                cwd: "client/views/templates",
                src : "*.html",
                dest: "server/public/assets/views/templates/"
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['copy', 'uglify']);
};