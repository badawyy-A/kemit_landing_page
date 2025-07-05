# Dockerfile

# Use official Node LTS image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy all source code
COPY . .

# Expose port (default CRA port)
ENV HOST=0.0.0.0
ENV PORT=4000
EXPOSE 4000

# Start the React app
CMD ["npm", "start"]
