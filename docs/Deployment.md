# Deployment

The Marine Rescue frontend is deployed as a Docker image of an NGINX webhost that supports SSL and React Router. The Docker package name is `andreybutenko/marinerescue-frontend`

## Build Docker Image

```
docker build -t andreybutenko/marinerescue-frontend .
docker push andreybutenko/marinerescue-frontend
```

## Deploy Docker Image

Use this command to run the container on any host with LetsEncrypt configured:

```
docker pull andreybutenko/marinerescue-frontend
docker rm -f mr-fe

docker run -p 80:80 -p 443:80 --name mr-fe \
  -v /etc/letsencrypt/live/marinerescue.app/fullchain.pem:/etc/ssl/fullchain.pem \
  -v /etc/letsencrypt/live/marinerescue.app/privkey.pem:/etc/ssl/privkey.pem \
  -d andreybutenko/marinerescue-frontend
```