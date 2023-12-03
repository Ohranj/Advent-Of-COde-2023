# Setup

docker build --tag [tag name] .

docker images

docker run -u alex -it --mount type=bind,src="$(pwd)",target=/[workdir] [repository name]/:[tag name] bash

Log into AOC and grab your session cookie. Paste the session cookie into a session.txt file at the root of the project
