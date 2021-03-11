# Import du conteneur à utiliser
FROM node:14

# Dossier de l'application
WORKDIR /usr/src/monAssistantMedical/back

# Copy de l'application dans le conteneur
COPY . .

# On install les packages node requis
RUN npm install

CMD ["node", "index.js"]
EXPOSE 3000