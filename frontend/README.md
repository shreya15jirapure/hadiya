# Hadiya Products Admin Panel

## Write Docker 

1. Use an official Node.js node:14

2. Set the working directory inside the container with /app

3. Copy package.json and package-lock.json to the working directory

4. Install dependencies


5. Copy the built Angular app to the container

6. Expose the port 4200 the app runs on


7. Define the command to run your Angular app "npm", "start"


## Environment variables

Update the following line in ```src/environments/environment.prod.ts```

apiGatewayURL = 'http://\<HOSTNAME\>:\<PORT\>'

**NOTE: DO NOT ADD TRAILING SLASH '/' AT THE END OF THE ABOVE ENDPOINT**

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

