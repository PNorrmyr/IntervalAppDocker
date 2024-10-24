# Use an official Node runtime as a parent image
FROM node:16

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and package-lock.json to the working directory
COPY ./package*.json ./

# Install the dependencies
RUN npm install

# Copy the remaining application files to the working directory
COPY . .

# Build the application (only needed if you're building for production)
# RUN npm run build

# Expose port 5173 for Vite dev server
EXPOSE 5173

# Start the Vite dev server, binding to 0.0.0.0 to make it accessible outside the container
CMD ["npm", "run", "dev", "--", "--host"]
