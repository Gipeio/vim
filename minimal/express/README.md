# Minimal Express App

Une application minimale Node + Express avec support du rechargement automatique.

---

## Installation

1. Cloner le repo :

```bash
git clone <repo-url>
cd minimal-express
````

2. Installer les dépendances :

```bash
npm install
```

---

## Lancement en production

```bash
npm start
```

* Serveur écoute sur [http://localhost:3000](http://localhost:3000)
* Les modifications **ne sont pas automatiquement appliquées**, tu dois relancer le serveur.

---

## Lancement en développement (hot reload)

```bash
npm run dev
```

* Nodemon surveille les fichiers `.js` et redémarre le serveur automatiquement à chaque modification.
* Tu peux éditer `server.js` ou ajouter des routes, nodemon rechargera le serveur instantanément.

---

## Structure

```
minimal-express/
│
├─ public/          # fichiers frontend
│   └─ index.html
├─ server.js        # serveur Express
├─ package.json
└─ README.md
```

---

## Test rapide

1. Ouvrir [http://localhost:3000](http://localhost:3000)
2. Cliquer sur le bouton pour générer un nombre aléatoire
3. Modifier `server.js` ou `index.html` et voir le refresh automatique avec `npm run dev`

---
