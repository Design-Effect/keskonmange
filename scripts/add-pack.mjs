#!/usr/bin/env node
// Importe d'un coup les photos d'un pack de recettes.
// Usage : node scripts/add-pack.mjs <dossier> [idDébut] [idFin]
// Ex.   : node scripts/add-pack.mjs C:\Users\ferre\Downloads r46 r55
//         node scripts/add-pack.mjs C:\Users\ferre\Downloads          (défaut : r36 r45)
//
// Cherche dans le dossier les fichiers nommés r46, r47, … (png/jpg/jpeg/webp)
// et les passe un par un à add-photo.mjs (redimensionne, compresse, branche le
// champ img: dans index.html). Les ids introuvables sont simplement signalés,
// on peut relancer la commande après avoir complété le dossier.

import { readdirSync, existsSync, statSync } from 'node:fs';
import { resolve, dirname, join, extname, basename } from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';

const HERE = dirname(fileURLToPath(import.meta.url));
const ADD_PHOTO = join(HERE, 'add-photo.mjs');
const EXTS = ['.png', '.jpg', '.jpeg', '.webp'];

const [dirArg, fromArg = 'r36', toArg = 'r45'] = process.argv.slice(2);
if (!dirArg) {
  console.error('Usage : node scripts/add-pack.mjs <dossier> [idDébut] [idFin]');
  console.error('Ex.   : node scripts/add-pack.mjs C:\\Users\\ferre\\Downloads r46 r55');
  process.exit(1);
}
const num = s => /^r\d+$/.test(s) ? parseInt(s.slice(1), 10) : NaN;
const from = num(fromArg), to = num(toArg);
if (Number.isNaN(from) || Number.isNaN(to) || from > to) {
  console.error(`Plage invalide : "${fromArg}" → "${toArg}" (attendu : rN rM, avec N ≤ M)`);
  process.exit(1);
}
const dir = resolve(dirArg);
if (!existsSync(dir) || !statSync(dir).isDirectory()) {
  console.error(`Dossier introuvable : ${dir}`);
  process.exit(1);
}

const IDS = Array.from({ length: to - from + 1 }, (_, i) => `r${from + i}`);

// Index des fichiers du dossier par nom sans extension (insensible à la casse).
const files = readdirSync(dir).filter(f => EXTS.includes(extname(f).toLowerCase()));
const byStem = new Map();
for (const f of files) byStem.set(basename(f, extname(f)).toLowerCase(), f);

let ok = 0;
const absents = [];

for (const id of IDS) {
  const file = byStem.get(id);
  if (!file) { absents.push(id); continue; }
  const src = join(dir, file);
  process.stdout.write(`→ ${id}  (${file})  `);
  const res = spawnSync(process.execPath, [ADD_PHOTO, src, id], { encoding: 'utf8' });
  if (res.status === 0) {
    console.log('✅');
    ok++;
  } else {
    console.log('❌');
    console.error((res.stderr || res.stdout || '').trim());
  }
}

console.log(`\n${ok}/${IDS.length} photos intégrées.`);
if (absents.length) {
  console.log(`Non trouvées dans le dossier : ${absents.join(', ')}`);
  console.log(`(les fichiers doivent s'appeler ${IDS[0]}.png, ${IDS[1] || IDS[0]}.png … — extension png/jpg/jpeg/webp)`);
}
if (ok) console.log('\nPense à vérifier le rendu puis : git add . && git commit && git push');
