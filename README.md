# Setup

## Docker

```docker build --tag [tag name] .```


```docker images```


Then to shell into the container, either run:

```
docker run -u alex -it --mount type=bind,src="$(pwd)",target=/[workdir] [repository name]:[tag name] bash
```

or to mount the local root to the aoc folder:

```
docker run -u alex -it -v ./:/aoc advent_of_code:latest bash
```

## Fetching input data
```Log into AOC and grab your session cookie. Paste the session cookie into a session.txt file at the root of the project```