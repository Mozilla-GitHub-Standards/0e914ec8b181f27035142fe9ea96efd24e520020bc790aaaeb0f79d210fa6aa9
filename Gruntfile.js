var webpack = require('webpack');

module.exports = function (grunt) {
  grunt.initConfig({
    clean: ['./build'],
    concurrent: {
      dev: ['nodemon:dev', 'webpack:dev'],
      options: {
        logConcurrentOutput: true
      }
    },
    nodemon: {
      dev: {
        script: './server.js',
        options: {
          ignore: ['build/**'],
          ext: 'js,jsx'
        }
      }
    },
    webpack: {
      dev: {
        resolve: {
          extensions: ['', '.js', '.jsx']
        },
        entry: './client.js',
        output: {
          path: './build/js',
          filename: 'client.js'
        },
        module: {
          loaders: [
            { test: /\.css$/, loader: 'style!css' },
            { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: require.resolve('babel-loader') }
          ]
        },
        plugins: [
          new webpack.NormalModuleReplacementPlugin(/^react?$/, require.resolve('react')),
          new webpack.NormalModuleReplacementPlugin(/^react(\/addons)?$/, require.resolve('react/addons'))
        ],
        stats: {
          colors: true
        },
        devtool: 'source-map',
        watch: true,
        keepalive: true
      }
    }
  });

  grunt.loadNpmTasks('grunt-concurrent');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-nodemon');
  grunt.loadNpmTasks('grunt-webpack');

  grunt.registerTask('default', ['clean', 'concurrent:dev']);
};
