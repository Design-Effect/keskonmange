# Pack Desserts — 10 recettes (préparation)

> Document de travail pour la mise à jour « Desserts ».
> Contient : les 10 recettes prêtes à coller dans `RECIPES`, les ingrédients à
> ajouter, et les 10 prompts de génération d'images.
>
> **Créé le** : 25 juillet 2026

---

## 1. Répartition gratuit / Premium

**3 gratuits · 7 Premium** — plus offensif que le ratio actuel de l'app
(11 Premium sur 35, soit 31%), pour servir de levier de conversion, tout en
respectant le principe directeur : la version gratuite reçoit aussi du contenu.

| # | Recette | Accès | Temps | Difficulté | Origine |
|---|---|---|---|---|---|
| r36 | Crêpes maison | 🆓 Gratuit | 25 min | Facile | 🇫🇷 |
| r37 | Mousse au chocolat | 🆓 Gratuit | 20 min (+3h frais) | Facile | 🇫🇷 |
| r38 | Salade de fruits frais | 🆓 Gratuit | 15 min | Facile | — |
| r39 | Fondant au chocolat | ✨ Premium | 25 min | Facile | 🇫🇷 |
| r40 | Tiramisu sans alcool | ✨ Premium | 30 min (+4h frais) | Moyen | 🇮🇹 |
| r41 | Pastéis de nata | ✨ Premium | 45 min | Moyen | 🇵🇹 |
| r42 | Cornes de gazelle | ✨ Premium | 90 min | Difficile | 🇲🇦 |
| r43 | Basboussa | ✨ Premium | 50 min | Facile | 🇲🇦🇹🇳 |
| r44 | Riz au lait à la cannelle | ✨ Premium | 40 min | Facile | — |
| r45 | Banana bread | ✨ Premium | 60 min | Facile | 🇺🇸 |

**Notes halal** : aucune recette ne contient d'alcool. Le tiramisu est en
version sans Marsala. Pas de gélatine (si une future recette en demande :
agar-agar ou gélatine halal explicitement). Éviter l'extrait de vanille
liquide (souvent alcoolisé) → sucre vanillé ou vanille en poudre.

**Bonus** : basboussa et cornes de gazelle sont des classiques de Ramadan →
réutilisables tels quels dans le futur pack Ramadan.

---

## 2. Ingrédients à ajouter dans `INGREDIENTS`

Deux nouvelles catégories (réutilisables plus tard pour petit-déj et en-cas),
plus deux ajouts dans des catégories existantes.

```js
  fruits: { label: 'Fruits', items: [
    {id:'banane', name:'Banane', emoji:'🍌'},
    {id:'pomme', name:'Pomme', emoji:'🍎'},
    {id:'fraise', name:'Fraise', emoji:'🍓'},
    {id:'orange', name:'Orange', emoji:'🍊'},
  ]},
  sucre_cat: { label: 'Sucré', items: [
    {id:'farine', name:'Farine', emoji:'🌾'},
    {id:'sucre', name:'Sucre', emoji:'🍬'},
    {id:'sucre_glace', name:'Sucre glace', emoji:'🤍'},
    {id:'chocolat', name:'Chocolat', emoji:'🍫'},
    {id:'cacao', name:'Cacao', emoji:'🟤'},
    {id:'levure', name:'Levure', emoji:'🫧'},
    {id:'semoule_fine', name:'Semoule fine', emoji:'🟡'},
    {id:'amandes', name:'Amandes', emoji:'🌰'},
    {id:'eau_fleur_oranger', name:'Fleur d\'oranger', emoji:'🌸'},
    {id:'biscuit_cuiller', name:'Biscuits cuiller', emoji:'🍪'},
    {id:'pate_feuilletee', name:'Pâte feuilletée', emoji:'🥐'},
    {id:'cafe', name:'Café', emoji:'☕'},
  ]},
```

À ajouter dans les catégories existantes :
- `laitiers` : `{id:'mascarpone', name:'Mascarpone', emoji:'🧀'}`
- `epices` : `{id:'cannelle', name:'Cannelle', emoji:'🟫'}`

---

## 3. Les 10 recettes — prêtes à coller dans `RECIPES`

```js
  {id:'r36', img:'img/recipes/r36.jpg', name:'Crêpes maison', emoji:'🥞', time:25, difficulty:'Facile', servings:4, kcal:480, prot:14, gluc:62, lip:18, tags:['dessert','familial','économique'],
   ingredients:['farine','oeufs','lait','beurre','sucre','sel'],
   qty:{farine:'250 g', oeufs:'3', lait:'50 cl', beurre:'50 g, fondu', sucre:'2 c. à s.', sel:'1 pincée'},
   steps:['Mélange la farine, le sucre et le sel dans un saladier.','Creuse un puits, casse les œufs et mélange au centre.','Verse le lait petit à petit en fouettant pour éviter les grumeaux.','Ajoute le beurre fondu et laisse reposer la pâte 30 min.','Cuis 1 à 2 min de chaque côté dans une poêle chaude légèrement beurrée.']},

  {id:'r37', img:'img/recipes/r37.jpg', name:'Mousse au chocolat', emoji:'🍫', time:20, difficulty:'Facile', servings:4, kcal:420, prot:12, gluc:32, lip:26, tags:['dessert','chocolat'],
   ingredients:['chocolat','oeufs','sucre','sel'],
   qty:{chocolat:'200 g de chocolat noir', oeufs:'6', sucre:'30 g', sel:'1 pincée'},
   steps:['Fais fondre le chocolat au bain-marie, puis laisse-le tiédir.','Sépare les blancs des jaunes. Incorpore les jaunes au chocolat.','Monte les blancs en neige ferme avec la pincée de sel, serre-les avec le sucre.','Incorpore les blancs au chocolat en 3 fois, délicatement, sans casser la mousse.','Répartis en verrines et réserve 3 h au frais minimum.']},

  {id:'r38', img:'img/recipes/r38.jpg', name:'Salade de fruits frais', emoji:'🍓', time:15, difficulty:'Facile', servings:4, kcal:165, prot:2, gluc:38, lip:1, tags:['dessert','léger','rapide'],
   ingredients:['banane','pomme','orange','fraise','citron','miel'],
   qty:{banane:'2', pomme:'2', orange:'2', fraise:'250 g', citron:'1 (son jus)', miel:'2 c. à s.'},
   steps:['Presse le citron dans un grand saladier.','Coupe les bananes en rondelles et mélange-les au jus — elles ne noirciront pas.','Pèle et coupe les pommes en dés, détaille les oranges en quartiers.','Équeute et coupe les fraises en deux.','Ajoute le miel, mélange délicatement et réserve 30 min au frais.']},

  {id:'r39', img:'img/recipes/r39.jpg', name:'Fondant au chocolat', emoji:'🍰', time:25, difficulty:'Facile', servings:6, kcal:530, prot:8, gluc:48, lip:34, tags:['dessert','chocolat','four'], premium:true,
   ingredients:['chocolat','beurre','oeufs','sucre','farine'],
   qty:{chocolat:'200 g de chocolat noir', beurre:'150 g', oeufs:'4', sucre:'120 g', farine:'60 g'},
   steps:['Préchauffe le four à 200°C.','Fais fondre le chocolat et le beurre ensemble au bain-marie.','Fouette les œufs avec le sucre jusqu\'à ce que le mélange blanchisse.','Incorpore le chocolat fondu, puis la farine tamisée.','Verse dans des ramequins beurrés et enfourne 10 à 12 min : le cœur doit rester coulant.','Démoule tiède et sers aussitôt.']},

  {id:'r40', img:'img/recipes/r40.jpg', name:'Tiramisu sans alcool', emoji:'☕', time:30, difficulty:'Moyen', servings:6, kcal:580, prot:11, gluc:45, lip:38, tags:['dessert','italien'], premium:true,
   ingredients:['mascarpone','oeufs','sucre','cafe','biscuit_cuiller','cacao'],
   qty:{mascarpone:'500 g', oeufs:'4', sucre:'100 g', cafe:'30 cl de café fort, refroidi', biscuit_cuiller:'~30 biscuits', cacao:'2 c. à s. de cacao non sucré'},
   steps:['Sépare les blancs des jaunes.','Fouette les jaunes avec le sucre jusqu\'à blanchiment, puis incorpore le mascarpone.','Monte les blancs en neige et incorpore-les délicatement à la crème.','Trempe rapidement chaque biscuit dans le café froid — sans le détremper.','Alterne une couche de biscuits et une couche de crème dans un plat, en terminant par la crème.','Filme et réserve 4 h au frais. Saupoudre de cacao juste avant de servir.']},

  {id:'r41', img:'img/recipes/r41.jpg', name:'Pastéis de nata', emoji:'🥧', time:45, difficulty:'Moyen', servings:12, kcal:220, prot:4, gluc:26, lip:11, tags:['dessert','portugais','four'], premium:true,
   ingredients:['pate_feuilletee','lait','creme','oeufs','sucre','farine','cannelle','citron'],
   qty:{pate_feuilletee:'1 rouleau', lait:'25 cl', creme:'10 cl', oeufs:'4 jaunes', sucre:'150 g', farine:'25 g', cannelle:'1 bâton', citron:'1 zeste'},
   steps:['Préchauffe le four à 250°C (chaleur maximale).','Chauffe le lait avec la cannelle et le zeste de citron, laisse infuser 10 min puis filtre.','Mélange le sucre et la farine, verse le lait chaud en fouettant, puis épaissis 2 min à feu doux.','Hors du feu, incorpore les jaunes d\'œufs et la crème.','Roule la pâte feuilletée en boudin, coupe des rondelles et étale-les dans des moules à muffins.','Remplis aux trois quarts et enfourne 12 à 15 min : le dessus doit être caramélisé, presque brûlé par endroits.']},

  {id:'r42', img:'img/recipes/r42.jpg', name:'Cornes de gazelle', emoji:'🌙', time:90, difficulty:'Difficile', servings:8, kcal:470, prot:11, gluc:48, lip:26, tags:['dessert','maghrébin','four'], premium:true,
   ingredients:['farine','amandes','sucre_glace','beurre','eau_fleur_oranger','cannelle'],
   qty:{farine:'300 g', amandes:'250 g en poudre', sucre_glace:'150 g', beurre:'80 g', eau_fleur_oranger:'5 c. à s.', cannelle:'1 c. à c.'},
   steps:['Pâte d\'amande : mélange les amandes, le sucre glace, la cannelle, 2 c. à s. de fleur d\'oranger et 30 g de beurre mou jusqu\'à obtenir une pâte homogène.','Pâte : travaille la farine avec 50 g de beurre fondu, 3 c. à s. de fleur d\'oranger et un peu d\'eau tiède jusqu\'à une pâte souple.','Pétris 10 min puis laisse reposer 30 min sous un linge.','Étale la pâte très finement — elle doit être presque transparente.','Dépose des boudins de pâte d\'amande, replie la pâte dessus et découpe des croissants.','Recourbe chaque corne, pique-la avec une aiguille et enfourne 15 min à 180°C : elles doivent rester très pâles.']},

  {id:'r43', img:'img/recipes/r43.jpg', name:'Basboussa', emoji:'🍯', time:50, difficulty:'Facile', servings:8, kcal:570, prot:10, gluc:88, lip:21, tags:['dessert','maghrébin','four'], premium:true,
   ingredients:['semoule_fine','yaourt','sucre','beurre','levure','citron','miel','amandes'],
   qty:{semoule_fine:'500 g', yaourt:'250 g', sucre:'200 g', beurre:'150 g, fondu', levure:'1 sachet', citron:'1 (son jus)', miel:'200 g + 20 cl d\'eau', amandes:'~20 entières'},
   steps:['Sirop : porte le miel, l\'eau et le jus de citron à ébullition 5 min, puis laisse refroidir complètement.','Mélange la semoule, le sucre et la levure.','Ajoute le yaourt et le beurre fondu, mélange sans trop travailler la pâte.','Étale dans un plat beurré et lisse la surface.','Découpe des losanges et pose une amande sur chacun.','Enfourne 35 min à 180°C jusqu\'à belle dorure.','À la sortie du four, arrose immédiatement du sirop froid et laisse absorber 2 h.']},

  {id:'r44', img:'img/recipes/r44.jpg', name:'Riz au lait à la cannelle', emoji:'🍚', time:40, difficulty:'Facile', servings:4, kcal:390, prot:12, gluc:68, lip:8, tags:['dessert','réconfortant','économique'], premium:true,
   ingredients:['riz','lait','sucre','cannelle','citron'],
   qty:{riz:'150 g de riz rond', lait:'1 L', sucre:'100 g', cannelle:'1 bâton + pour saupoudrer', citron:'1 zeste'},
   steps:['Porte le lait à frémissement avec la cannelle et le zeste de citron.','Verse le riz en pluie.','Cuis à feu très doux 35 min en remuant souvent — le riz doit devenir fondant.','Ajoute le sucre en fin de cuisson et poursuis 5 min.','Retire la cannelle et le zeste, verse dans des ramequins.','Saupoudre de cannelle. Se déguste tiède ou bien froid.']},

  {id:'r45', img:'img/recipes/r45.jpg', name:'Banana bread', emoji:'🍌', time:60, difficulty:'Facile', servings:8, kcal:315, prot:6, gluc:48, lip:12, tags:['dessert','four','familial'], premium:true,
   ingredients:['banane','farine','sucre','oeufs','beurre','levure','cannelle'],
   qty:{banane:'3 bien mûres', farine:'250 g', sucre:'120 g', oeufs:'2', beurre:'100 g, fondu', levure:'1 sachet', cannelle:'1 c. à c.'},
   steps:['Préchauffe le four à 180°C.','Écrase les bananes à la fourchette.','Fouette les œufs avec le sucre, ajoute le beurre fondu puis les bananes écrasées.','Incorpore la farine, la levure et la cannelle.','Verse dans un moule à cake beurré.','Enfourne 45 à 50 min : la lame d\'un couteau doit ressortir sèche. Laisse tiédir avant de démouler.']},
```

---

## 4. Points d'attention avant intégration

1. **Filtre « dessert » automatique** — les chips de filtre de l'accueil sont
   générées depuis la fréquence des tags (`discoverTags()`). Le tag `dessert`
   apparaissant 10 fois, un filtre « dessert » se créera **tout seul**. Rien à
   coder, mais à vérifier visuellement (position dans la barre de filtres).

2. **⚠️ Composeur — desserts mélangés aux plats salés** : le moteur écarte les
   desserts dès qu'une protéine est cochée (aucun dessert n'en contient), mais
   si l'utilisateur ne coche que des ingrédients neutres (lait, œufs, sucre…),
   des desserts peuvent remonter parmi les suggestions de plats. À trancher :
   soit c'est acceptable, soit il faut séparer les suggestions
   « Plats » / « Desserts » dans le composeur.

3. **« Choisis pour moi »** — vérifier que le tirage aléatoire ne propose pas un
   dessert comme repas principal. À filtrer sur `!r.tags.includes('dessert')`.

4. **Servings** — pour les pastéis (12 pièces) et les cornes de gazelle, le
   champ `servings` correspond à des parts, pas à des personnes attablées ; le
   recalcul auto des quantités reste cohérent.

---

## 5. Les 10 prompts de génération d'images

### Style guide desserts (à coller en tête de chaque prompt)

Variante du style guide global, adaptée à la pâtisserie — même lumière et même
palette que les 35 photos existantes, pour que le look book reste homogène.

```
STYLE: Editorial dessert photography, professional magazine quality, hero shot.
LIGHTING: Soft natural daylight from upper left, gentle shadows, warm tones.
ANGLE: 45-degree angle, slight tilt, shallow depth of field.
BACKGROUND: Warm wooden table OR cream linen tablecloth OR beige marble.
DISH: Cream ceramic plate, small dessert plate, glass verrine or rustic cake stand — never plastic, never overly modern.
ATMOSPHERE: Cozy home baking, freshly made, inviting.
GARNISH: 1-2 fresh elements scattered for life (berries, mint leaf, cocoa dust, nuts).
COLOR PALETTE: Warm earth tones — terracotta, cream, caramel, soft amber.
NO TEXT, NO LOGO, NO PEOPLE, NO HANDS.
PHOTOREALISTIC, ULTRA-DETAILED, 4K QUALITY.
```

> **Rappel workflow** : génère r36 en premier, valide-la, puis réinjecte-la
> comme image de référence pour les suivantes avec *« Same photographic style,
> lighting, plate type and background as reference. Now generate: [prompt] »*.
> C'est ce chaînage qui garantit l'homogénéité du pack.

### r36 — Crêpes maison
> A stack of five thin golden French crêpes on a cream ceramic plate, slightly folded at the edges. Dusted with powdered sugar, a few fresh strawberries and a drizzle of honey on top. One crêpe partially rolled beside the stack. Warm wooden table, soft morning light. [STYLE block above]

### r37 — Mousse au chocolat
> Three glass verrines filled with airy dark chocolate mousse, soft peaks on top, dusted with cocoa powder. A few chocolate shavings and one fresh raspberry as garnish. Small silver spoon resting beside. Cream linen tablecloth, elegant intimate atmosphere. [STYLE block above]

### r38 — Salade de fruits frais
> A generous glass bowl of colourful fresh fruit salad: banana slices, apple cubes, orange segments and halved strawberries, glistening with honey and citrus juice. Fresh mint leaf on top. Bright and healthy atmosphere, light wooden background, scattered whole fruits around. [STYLE block above]

### r39 — Fondant au chocolat
> A warm individual chocolate lava cake on a small cream dessert plate, cut open with molten dark chocolate flowing out onto the plate. Dusted with powdered sugar, one fresh raspberry beside. Steam barely visible. Dark moody wooden background, warm candle-like light. [STYLE block above]

### r40 — Tiramisu sans alcool
> A square portion of classic Italian tiramisu on a cream plate, clean visible layers of coffee-soaked ladyfingers and mascarpone cream, generously dusted with dark cocoa powder on top. A few coffee beans scattered beside, espresso cup slightly out of focus in the background. Rustic Italian atmosphere. [STYLE block above]

### r41 — Pastéis de nata
> Four Portuguese pastéis de nata on a rustic wooden board, flaky golden puff pastry shells, creamy custard centres with characteristic dark caramelised blistered tops. Dusted with cinnamon. One pastry broken open showing the soft custard. Traditional Lisbon bakery atmosphere, azulejo blue tile hint in the far background. [STYLE block above]

### r42 — Cornes de gazelle
> A plate of Moroccan kaab el ghzal (gazelle horns): elegant crescent-shaped pastries, very pale golden, delicate thin dough filled with almond paste, lightly dusted with powdered sugar. Arranged in a circle on an ornate ceramic plate. Whole almonds and a small glass of mint tea beside. Warm Moroccan atmosphere, patterned textile background. [STYLE block above]

### r43 — Basboussa
> Golden semolina cake cut into diamond shapes in a rustic baking dish, each piece topped with a whole almond, glistening with honey syrup. One piece lifted slightly to show the moist texture. Warm amber tones, Middle Eastern atmosphere, honey drizzle and scattered almonds on a wooden table. [STYLE block above]

### r44 — Riz au lait à la cannelle
> Two cream ceramic ramekins of creamy rice pudding, generously dusted with ground cinnamon on top, one cinnamon stick resting across. Soft creamy texture clearly visible, a spoon taking a scoop. Cosy comforting atmosphere, linen napkin, warm wooden table. [STYLE block above]

### r45 — Banana bread
> A rustic banana bread loaf on a wooden cutting board, two thick slices cut and leaning forward showing the moist crumb. Golden cracked top, half a banana and a few walnuts scattered around. Dusting of cinnamon. Cosy home baking atmosphere, morning light, cream linen cloth. [STYLE block above]

---

## 5 bis. Images générées — liens de téléchargement

> **Générées le 25/07/2026** en Nano Banana Pro (1200×896, 4:3), chaînées sur
> l'image des crêpes (r36) comme référence de style. Coût : 20 crédits.
> Ces fichiers vivent dans le compte Higgsfield — les télécharger, compresser
> (< 100 Ko) et déposer dans `img/recipes/`.

| Recette | Lien |
|---|---|
| r36 — Crêpes maison | https://d8j0ntlcm91z4.cloudfront.net/user_3AwP0izbCmQGEzOAmM04wYA84aq/hf_20260725_123957_e345a78c-7eaf-420e-8948-cb715bf526d0.png |
| r37 — Mousse au chocolat | https://d8j0ntlcm91z4.cloudfront.net/user_3AwP0izbCmQGEzOAmM04wYA84aq/hf_20260725_172513_fc63c9b6-f299-4ee9-beb3-f56b334c2988.png |
| r38 — Salade de fruits | https://d8j0ntlcm91z4.cloudfront.net/user_3AwP0izbCmQGEzOAmM04wYA84aq/hf_20260725_172516_ec82c401-e5c1-44ce-b225-50042df52e96.png |
| r39 — Fondant au chocolat | https://d8j0ntlcm91z4.cloudfront.net/user_3AwP0izbCmQGEzOAmM04wYA84aq/hf_20260725_172519_ab4a152c-33fe-44f2-bc2d-1637f45b8577.png |
| r40 — Tiramisu | https://d8j0ntlcm91z4.cloudfront.net/user_3AwP0izbCmQGEzOAmM04wYA84aq/hf_20260725_172521_c2e9d518-5fc3-4ead-8100-33b9582add3c.png |
| r41 — Pastéis de nata | https://d8j0ntlcm91z4.cloudfront.net/user_3AwP0izbCmQGEzOAmM04wYA84aq/hf_20260725_172700_4f5752d2-6645-4628-a49f-b1878721d663.png |
| r42 — Cornes de gazelle | https://d8j0ntlcm91z4.cloudfront.net/user_3AwP0izbCmQGEzOAmM04wYA84aq/hf_20260725_172703_37678a22-11a6-4164-a6eb-44fc1ba787d4.png |
| r43 — Basboussa | https://d8j0ntlcm91z4.cloudfront.net/user_3AwP0izbCmQGEzOAmM04wYA84aq/hf_20260725_172705_ada62e25-5cb2-4a5d-b83e-526dc41cb3a6.png |
| r44 — Riz au lait | https://d8j0ntlcm91z4.cloudfront.net/user_3AwP0izbCmQGEzOAmM04wYA84aq/hf_20260725_172708_5fccd842-d22f-4639-8d93-664acc9901b8.png |
| r45 — Banana bread | https://d8j0ntlcm91z4.cloudfront.net/user_3AwP0izbCmQGEzOAmM04wYA84aq/hf_20260725_172832_57a5fede-d91e-4305-9ecc-f469d63e53c7.png |

---

## 6. Après génération des images

> ⚠️ **À corriger avant d'utiliser le script** : `scripts/add-photo.mjs` valide
> les ids par la regex `^r([1-9]|[12][0-9]|3[0-5])$` — il **refusera r36 à r45**.
> Élargir la regex jusqu'à r45. Le script patche aussi le champ `img:` dans le
> HTML : coller les recettes dans `RECIPES` **avant** de lancer les imports.

> **État au 25/07/2026** : la photo des crêpes (r36) a déjà été générée en
> Nano Banana Pro et se trouve dans la galerie du compte Higgsfield. La
> réutiliser comme **image de référence** pour chaîner les 9 suivantes.
> Coût constaté : 2 crédits par image → **20 crédits pour le pack complet**.

1. Nommer les fichiers `r36.jpg` → `r45.jpg`
2. Compresser (JPG qualité 80%, 800×600 max, **< 80 Ko** par image) — le script
   du dossier `scripts/` fait déjà ce travail pour les recettes existantes
3. Déposer dans `img/recipes/`
4. Coller les recettes de la section 3 dans `RECIPES` + les ingrédients de la
   section 2 dans `INGREDIENTS`
5. Traiter les points d'attention de la section 4
6. Tester : filtre dessert, composeur, « Choisis pour moi », liste de courses
7. Annoncer la mise à jour (story + réel + statut) — jamais de sortie silencieuse
