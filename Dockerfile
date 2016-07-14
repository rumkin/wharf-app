FROM node:latest

ADD server.js /app/content/server.js

CMD ["node", "/app/content/server.js"]
