# Getting Started with Create React App
APP  REDBROWN REACT JS 

## Prerequisite
- Docker 
- Docker-compose
- Account Azure

## Available Scripts
- npx create-react-app redbrownTest
- cd redbrownTest
- npm i
- npm test
- npm start

## Documentation Azure Devops
1. Create organization on Azure Devops
2. Create proyect on Azure Devops
3. Clone Repo empty
4. initial commit with scafolding proyect
5. Personalize text in home page app to identify proyect
6. Personalize test to verify change on previus step.
7. Configure azure-pipelines.yml with stept Build, Test and Deploy     
8. Create ACR with connection service to push imagen ACR in step Build Image and 
9. Create Azure suscrition type RM connected to Web app service resource and copy name azureSuscription
9. Replace ACR vars with id ACR, appWebName and azureSuscription on azure-pipelines.yml
10. Create Web App Service Docker
11. Enable Admin identity and Get id resource
12. Asigne role ACR Pull on IAM ACR to resource getting on previus step
13. Restart Web App Services


## REFERENCIAS
https://learn.microsoft.com/en-us/azure/devops/pipelines/apps/cd/deploy-docker-webapp?view=azure-devops&tabs=java%2Cyaml
https://learn.microsoft.com/en-us/azure/devops/pipelines/release/azure-rm-endpoint?view=azure-devops
https://learn.microsoft.com/es-mx/azure/container-registry/container-registry-roles?tabs=azure-
https://learn.microsoft.com/en-us/azure/devops/pipelines/tasks/reference/azure-web-app-container-v1?view=azure-pipelines