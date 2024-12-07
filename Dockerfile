# Use an official Node.js runtime as a parent image
FROM node:18

# Install pm2 globally
RUN npm install -g pm2

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install application dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose the port that the application will run on
EXPOSE 5000

# Start the Node.js application using pm2
CMD ["pm2-runtime", "app.js"]
