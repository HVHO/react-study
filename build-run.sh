#!/bin/zsh

docker build -t hvho/react-getting-started .
docker run -it --rm -p 3000:3000 hvho/react-getting-started
