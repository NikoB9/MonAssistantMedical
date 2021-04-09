# Import du conteneur à utiliser
FROM node:14

# Dossier de l'image à utiliser
WORKDIR /usr/src/MAM

# Copy du json pour intaller les paquets npm (avant pour que docker le garde en cache)
COPY package*.json ./

# On install les packages node requis
RUN npm install

# install d'angular
RUN npm install -g @angular/cli@11.1.4

# installation du serveur http pour servir angular
RUN npm install -g http-server

# Copy du reste de l'application dans le conteneur
COPY . .

# On Lance la génération des fichiers
RUN ng build

CMD ["http-server", "dist/front","-o","-a","0.0.0.0","-p","8080"]
#CMD ["ng", "serve","--host","0.0.0.0","--port","8080"]
EXPOSE 8080
