# Dockerfile
FROM node:18

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
RUN npm install

# Bundle app source
COPY . .

# Run migrations
RUN npm run migrate

# Expose port
EXPOSE 3000

# Start app
CMD ["npm", "run", "build", "&&", "npm", "run", "start"]
