# Use an official Node.js runtime as a parent image
FROM node:14.18.2-alpine3.14

# Create app directory
WORKDIR /plus-service

# Copy 
COPY . ./

# Install any needed packages
RUN npm install

# Expose port 5011
EXPOSE 5011

CMD [ "node", "index.js" ]