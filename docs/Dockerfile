FROM node

WORKDIR /app/website

EXPOSE 3000 35729
COPY . .
RUN yarn install

CMD ["yarn","run", "start:docker"]
