const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production', // Optimized for production
  entry: './src/index.js', 

  //Output name and location
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true // This ensures old files are removed during build
  },
  module: {
    rules: [
      {
        test: /\.scss$/i, //regex to target scsss files,
      
        // style-loader - injects the final compiled CSS into the DOM as <style> tags.
        // css-loader - allows Webpack to interpret @import and url() in CSS.
        // postcss-loader - processes CSS with PostCSS (for using Tailwind CSS and Autoprefixer).
        // sass-loader - compiles .scss files into standard CSS.
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ],
      },

      {
        test: /\.(png|jpe?g|gif|svg)$/i, //Target image assets
        type: 'asset/resource', // Treats images as separate static files and moves them to the output folder
        generator: { // Controls where images are saved in the dist directory:
          filename: 'images/[name][ext]',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ //This was used to automatically generate an HTML file from template
      // it will also injects the compiled bundle.js script into the generated HTML file
      template: './src/index.html', // Specifies the source HTML file to use as a template.
      minify: { // Minimizes the output HTML for better performance.
        collapseWhitespace: true, // Removes unnecessary whitespace to reduce file size.
      },
    })
  ],
  devtool: 'source-map', // For easier debugging
  // this will help you debug your original source code (like index.js and scss files) in browser dev tools.
  
  // Local development server configuration
  devServer: {
    static: './dist', //Serve files from the dist folder.
    open: true, //Automatically opens your default browser when the server starts.
    port: 3000, //port to use
  },
};
