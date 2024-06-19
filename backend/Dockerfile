# Use the official Node.js 16 image with Alpine Linux as the base image
FROM node:16-alpine

# Set the working directory inside the container
WORKDIR /app/products

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install nodemon globally and save it as a development dependency
RUN npm install --global nodemon --save-dev

# Install other dependencies specified in package.json
RUN npm install

# Expose port 3000 to the outside world
EXPOSE 3000

# Copy the source code to the working directory inside the container
COPY ./src ./src

# Command to run the application
CMD ["node", "/src/index.js"]
