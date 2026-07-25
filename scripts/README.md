# Pipeline photos recettes

Pour ajouter une photo générée (Nano Banana Pro) à une recette :

```
node scripts/add-photo.mjs <image> <id-recette>     # ex: node scripts/add-photo.mjs poulet.png r1
```

Le script redimensionne (800px max), compresse en JPG (<100 Ko), enregistre dans `img/recipes/<id>.jpg` et branche automatiquement le champ `img:` de la recette dans `index.html`. Relancer la commande avec une nouvelle image écrase l'ancienne photo.

## Pack desserts — import en une commande

```
node scripts/add-desserts.mjs <dossier>     # ex: node scripts/add-desserts.mjs C:\Users\ferre\Downloads
```

Cherche dans le dossier les fichiers `r36` à `r45` (png/jpg/jpeg/webp) et les
importe tous d'un coup via `add-photo.mjs`. Les images doivent donc être
renommées `r36.png`, `r37.png`, etc. Les ids absents sont listés en fin
d'exécution — on peut relancer la commande après avoir complété le dossier.
