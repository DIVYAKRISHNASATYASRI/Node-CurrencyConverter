# Step 1: Use an official Node.js base image
FROM node:14

# Step 2: Set the working directory inside the container
WORKDIR /usr/src/app

# Step 3: Copy package.json and package-lock.json to the container
COPY package*.json ./

# Step 4: Install the app dependencies
RUN npm install

# Step 5: Copy the rest of the application code into the container
COPY . .

# Step 6: Expose port (if needed for web servers)
EXPOSE 3000

# Step 7: Run the app
CMD ["node", "convert.js"]
