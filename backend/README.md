# Hadiya Products API



## Create dockerfile
1. Take base image "16-alpine"
2. set the workdir " /app/products"
3. package.json package-lock.json inside the workdir
4. perform npm install --location=global nodemon --save-dev
5. perform npm install
6. export 3000
7. run the command "node", "/src/index.js inside docker

## How to run this application




1. Migrate the database using the database repo.
2. Run ```cp .env.development .env```
3. Change the values for ```PORT``` and ```DB_CONNECTION_STRING``` in the ```.env``` file
4. Run the application using ```npm run serve```
