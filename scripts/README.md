# Pipeline photos recettes

Pour ajouter une photo générée (Nano Banana Pro) à une recette :

```
node scripts/add-photo.mjs <image> <id-recette>     # ex: node scripts/add-photo.mjs poulet.png r1
```

Le script redimensionne (800px max), compresse en JPG (<100 Ko), enregistre dans `img/recipes/<id>.jpg` et branche automatiquement le champ `img:` de la recette dans `index.html`. Relancer la commande avec une nouvelle image écrase l'ancienne photo.

## Import d'un pack en une commande

```
node scripts/add-pack.mjs <dossier> [idDébut] [idFin]
# ex : node scripts/add-pack.mjs C:\Users\ferre\Downloads r46 r55
```

Cherche dans le dossier les fichiers de la plage demandée (png/jpg/jpeg/webp) et
les importe tous d'un coup via `add-photo.mjs`. Les images doivent donc être
renommées `r46.png`, `r47.png`, etc. Les ids absents sont listés en fin
d'exécution — on peut relancer la commande après avoir complété le dossier.
Sans plage, le défaut est r36 → r45 (pack desserts).
