FROM node:latest

#Folder to shell into
WORKDIR /aoc

RUN apt-get -y update 
RUN apt-get install -y curl

#Added user must be same as local user so can edit files created on image
RUN adduser alex
RUN usermod -aG sudo alex

COPY . .