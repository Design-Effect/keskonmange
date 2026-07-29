# Pack Froid & été — 10 recettes

> Pack né d'une demande utilisateur (« est-ce qu'il y a des recettes froides
> pour l'été ? »). Intégré dans l'app le 27 juillet 2026.
>
> Les recettes sont **déjà dans `index.html`** (r46 → r55). Ce document sert de
> référence et contient les liens de téléchargement des photos.

---

## 1. Les 10 recettes

**4 gratuites · 6 Premium** — conforme au principe directeur : chaque pack
apporte aussi du contenu à la version gratuite.

| # | Recette | Accès | Temps | kcal | Origine |
|---|---|---|---|---|---|
| r46 | Salade grecque | 🆓 Gratuit | 15 min | 320 | 🇬🇷 |
| r47 | Gaspacho andalou | 🆓 Gratuit | 15 min | 185 | 🇪🇸 |
| r48 | Salade de pâtes estivale | 🆓 Gratuit | 20 min | 495 | 🇮🇹 |
| r49 | Salade marocaine | 🆓 Gratuit | 15 min | 120 | 🇲🇦 |
| r50 | Tzatziki | ✨ Premium | 10 min | 145 | 🇬🇷 |
| r51 | Poke bowl au saumon | ✨ Premium | 20 min | 630 | 🇺🇸 |
| r52 | Salade de riz thon-maïs | ✨ Premium | 20 min | 430 | — |
| r53 | Salade de vermicelles aux crevettes | ✨ Premium | 20 min | 410 | 🇻🇳 |
| r54 | Salade de lentilles à la feta | ✨ Premium | 30 min | 405 | — |
| r55 | Melon, feta et menthe | ✨ Premium | 10 min | 230 | — |

**Notes** : aucune recette ne contient d'alcool ni de porc (le classique
melon-jambon a été volontairement remplacé par melon-feta-menthe). Le poke bowl
précise d'utiliser un saumon extra-frais prévu pour être mangé cru.

**Doublons évités** : l'app contenait déjà salade César, taboulé, houmous, wrap
et bowl quinoa — aucun des 10 ne les recoupe.

## 2. Ingrédients ajoutés

- `legumes` : concombre 🥒
- `laitiers` : feta 🧀
- `fruits` : melon 🍈
- `epices` : menthe 🌿

## 3. Intégration déjà faite

- 10 recettes ajoutées avec kcal + macros (cohérence 4P+4G+9L vérifiée)
- Tag `froid` épinglé en tête des filtres via `PINNED_TAGS` : **🧊 Froid & été**
  apparaît juste après « Tout », avant « 🍰 Desserts »
- `scripts/add-photo.mjs` : regex élargie jusqu'à r55
- `scripts/add-desserts.mjs` renommé en **`scripts/add-pack.mjs`** et généralisé
  (accepte une plage) — voir section 5

## 4. Photos générées — liens de téléchargement

> Générées le 29/07/2026 en Nano Banana Pro (1200×896, 4:3), chaînées sur
> l'image des crêpes (r36) comme référence de style. Coût : 20 crédits.

| Recette | Lien |
|---|---|
| r46 — Salade grecque | https://d8j0ntlcm91z4.cloudfront.net/user_3AwP0izbCmQGEzOAmM04wYA84aq/hf_20260729_094808_3323a660-ea74-46b6-acca-7bc697186f81.png |
| r47 — Gaspacho andalou | https://d8j0ntlcm91z4.cloudfront.net/user_3AwP0izbCmQGEzOAmM04wYA84aq/hf_20260729_094811_e9ff8f39-621e-4c24-ba95-12a2a0cb3663.png |
| r48 — Salade de pâtes estivale | https://d8j0ntlcm91z4.cloudfront.net/user_3AwP0izbCmQGEzOAmM04wYA84aq/hf_20260729_094815_6ad0a6ae-8a02-4595-bf64-f7c47289d20e.png |
| r49 — Salade marocaine | https://d8j0ntlcm91z4.cloudfront.net/user_3AwP0izbCmQGEzOAmM04wYA84aq/hf_20260729_094819_1e962905-ab2d-43c3-92e9-b8a610a67aae.png |
| r50 — Tzatziki | https://d8j0ntlcm91z4.cloudfront.net/user_3AwP0izbCmQGEzOAmM04wYA84aq/hf_20260729_095030_7e03132e-fc2a-4f73-b9c3-61a6de6b150e.png |
| r51 — Poke bowl au saumon | https://d8j0ntlcm91z4.cloudfront.net/user_3AwP0izbCmQGEzOAmM04wYA84aq/hf_20260729_095033_61420cd1-d1b5-4e82-885b-ea0147e0d86f.png |
| r52 — Salade de riz thon-maïs | https://d8j0ntlcm91z4.cloudfront.net/user_3AwP0izbCmQGEzOAmM04wYA84aq/hf_20260729_095037_21ad289a-13f6-4c86-a798-00637c5d2e44.png |
| r53 — Salade de vermicelles aux crevettes | https://d8j0ntlcm91z4.cloudfront.net/user_3AwP0izbCmQGEzOAmM04wYA84aq/hf_20260729_095041_bd44a00a-9aad-4183-ac91-91fe694ddef3.png |
| r54 — Salade de lentilles à la feta | https://d8j0ntlcm91z4.cloudfront.net/user_3AwP0izbCmQGEzOAmM04wYA84aq/hf_20260729_095209_4da1ee4d-69d6-42f0-be54-f837ef4d46cb.png |
| r55 — Melon, feta et menthe | https://d8j0ntlcm91z4.cloudfront.net/user_3AwP0izbCmQGEzOAmM04wYA84aq/hf_20260729_095212_9218b0bc-e623-4bdc-aa61-bb692623aca2.png |

## 5. Importer les photos

Renommer les fichiers `r46.png` … `r55.png`, les mettre dans un dossier, puis :

```
node scripts/add-pack.mjs <dossier> r46 r55
```

Le script redimensionne, compresse (< 100 Ko), dépose dans `img/recipes/` et
branche le champ `img:` dans `index.html`. Tant qu'une photo manque, la recette
affiche son placeholder SVG — l'app reste fonctionnelle.
