# Authentication Flows Study Project

##Overview

Authentication is a critical aspect of modern web development, ensuring that users and systems are who they claim to be. This GitHub project aims to provide an in-depth study of various authentication flows, demonstrating their implementation using TypeScript and Node.js with Express. The project is structured into two main folders:

- Keycloak: This folder contains a Docker Compose configuration (docker-compose.yaml) to set up a Keycloak server and a MySQL database. Keycloak is an open-source identity and access management solution, and its integration with different authentication flows will be explored in the project.

- authentication-flow: This folder comprises subfolders, each dedicated to a specific authentication flow, namely:
1. Authentication Code Flow: Demonstrates the OAuth 2.0 Authorization Code Flow.
2. Implicit Flow: Illustrates the OAuth 2.0 Implicit Flow.
3. Hybrid Flow: Explores the OAuth 2.0 Hybrid Flow.

## Technologies Used

- Keycloak is An open-source identity and access management solution.
- Docker is used to orchestrate the deployment of Keycloak and the accompanying MySQL database in a containerized environment, as well as facilitating the deployment of the node servers.
- TypeScript, Node.js and Express for building clients that illustrate each flow.

## Getting Started

1. Clone the repository:

```git clone https://github.com/your-username/authentication-flow-study.git```

1. Navigate to the keycloak folder and start the Docker containers:

```
cd keycloak
docker-compose up -d
```

1. Setup realm, client and user on Keycloak by acessing the admin page on localhost:8080.

1. Navigate to the authentication-flow folder and start the node container:
```
cd authentication-flow
docker-compose up -d
```

1. Install the node modules and run the applicable project. E.g.:
```
docker exec -it node-authentications bash
npm install
npm run authorization-code
```