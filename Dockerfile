FROM g3org3/node:v2

# Set working directory
WORKDIR /app

# First copy pck json
ADD ./package.json /app
RUN source /usr/local/nvm/nvm.sh && npm install

# Copy source files to container
#COPY . /app
