# Use a base image with Node.js installed for the build stage
FROM node:14-alpine as build-stage

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files to the container
COPY . .

# Build the React app
RUN npm run build

# Use a minimal nginx image to serve the static files
FROM nginx:alpine

COPY dist /usr/share/nginx/html



# Start nginx
ENTRYPOINT ["nginx", "-g", "daemon off;"]