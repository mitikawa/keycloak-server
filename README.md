# Authentication Flows Study Project

## Overview

Authentication is a critical aspect of modern web development, ensuring that users and systems are who they claim to be. This GitHub project aims to provide an in-depth study of various authentication flows, demonstrating their implementation using TypeScript and Node.js with Express. The project is structured into two main folders:

- Keycloak: This folder contains a Docker Compose configuration (docker-compose.yaml) to set up a Keycloak server and a MySQL database. Keycloak is an open-source identity and access management solution, and its support to different authentication flows will be explored in the project.

- authentication-flow: This folder comprises subfolders, each dedicated to a specific authentication flow, namely:
    - Authentication Code Flow
    - Implicit Flow
    - Hybrid Flow

## Technologies Used

- Keycloak is An open-source identity and access management solution.
- Docker is used to orchestrate the deployment of Keycloak and the accompanying MySQL database in a containerized environment, as well as facilitating the deployment of the node servers.
- TypeScript, Node.js and Express for building clients that illustrate each flow.

## Getting Started

1. Clone the repository:

```
git clone https://github.com/mitikawa/keycloak-server.git
```

2. Navigate to the keycloak folder and start the Docker containers:

```
cd keycloak
docker-compose up -d
```

3. Setup realm, client and user on Keycloak by acessing the admin page on localhost:8080.

4. Navigate to the authentication-flow folder and start the node container:
```
cd authentication-flow
docker-compose up -d
```

5. Install the node modules and run the applicable project. E.g.:
```
docker exec -it node-authentications bash
npm install
npm run authorization-code
```
