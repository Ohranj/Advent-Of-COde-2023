FROM node:latest

#Folder to shell into
WORKDIR /aoc

RUN apt -y update 
RUN apt install -y curl python3 python3-pip

#Install requests package
RUN pip3 install requests

#Added user must be same as local user so can edit files created on image
RUN adduser alex
RUN usermod -aG sudo alex

#Copy local folders to conatiner
COPY . .