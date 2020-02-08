This repository is created to test the usage of `webpack-require-from` with css files.  
Using `webpack-require-from` with `mini-css-extract-plugin` causes warnings in console and public path 
for CSS files is also not updated as per config set for `webpack-require-from` plugin.

This is the multi module repository with build scripts for parent application and child micro-frontend application.
Follow this steps for setup:

    1. Install all the npm dependencies
    2. Then execute `npm run start` for starting parent application dev server.
    3. To start child application use, `npm run start:mf`
    4. To generate the warnings of webpack-require-from plugin, execute `npm run build:mf`. 
       This will execute webpack in production mode and warnings will be logged for CSS files

 