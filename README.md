# Setup

docker build --tag [tag name] .

docker images

docker run -u alex -it --mount type=bind,src="$(pwd)",target=/[workdir] [repository name]/:[tag name] bash
