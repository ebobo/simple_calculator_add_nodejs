# build docker image, note . in the end is the dir to run this dockerfile (root dir for docker copy file)

docker build -f docker/plus.Dockerfile -t plus-ms:0.0.1 .

# to see the detail docker build steps add this to docker build parameters

--progress=plain --no-cache

# run docker container

docker run --name plus-ms -p 5011:5011 --rm plus-ms:0.0.1
