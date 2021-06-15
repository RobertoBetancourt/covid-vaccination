# pull official base image
FROM node:12

# set working directory
WORKDIR /app-react

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app-react/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install
RUN npm install react-scripts@3.4.1 -g

# add app
COPY . ./

# start app
CMD ["npm", "start"]

EXPOSE 3001