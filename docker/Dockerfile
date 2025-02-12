#use  a lightweight Node.js base image
FROM node:18-alpine

#Set working directory inside container
WORKDIR /app

#Copy package.json and install dependencies
COPY package.josn ./
RUN npm install

#Copy application code
COPY . .

#Expose port 3000
EXPOSE 3000

#Start the app
CMD ["npm", "start"]

