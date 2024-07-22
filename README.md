## RunningInDocker

# Setting up and Running Your React UI Component Library in Docker

This Docker setup will allow you to host your React UI Component Library on localhost:8083.

## Prerequisites

- Docker installed on your machine

## Instructions

### 1. Build Docker Image

Clone the repository or navigate to your project directory:
```
git clone https://github.com/mcook-2/cook_mckenzie_ui_garden
```
Change to Directory of Repo:
```
cd cook_mckenzie_ui_garden
```

Build the Docker image:

```
docker build -t cook_mckenzie_assignment12 .
```

### 2. Run Docker Container

Run the Docker container:

```
docker run -p 8083:8083 --name cook_mckenzie_assignment12 cook_mckenzie_assignment12
```

### 4. Access the Application

Open your web browser and go to [http://localhost:8083](http://localhost:8083) to view your React UI Component Library.


### 5. Run tests

Open docker container (cook_mckenzie_assignment12). Naviagte to "Exec". Run this command:

```
npm run test
```

