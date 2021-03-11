# Import du conteneur à utiliser
FROM node:14

# Dossier de l'application
WORKDIR /usr/src/monAssistantMedical/back

# Copy du json pour intaller les paquets npm (avant pour que docker le garde en cache)
COPY package*.json ./

# On install les packages node requis
RUN npm install

# Copy du reste de l'application dans le conteneur
COPY . .

CMD ["node", "index.js"]
EXPOSE 3000