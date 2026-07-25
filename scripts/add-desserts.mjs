#!/usr/bin/env node
// Importe les 10 photos du pack desserts (r36 → r45) en une seule commande.
// Usage : node scripts/add-desserts.mjs <dossier>
// Ex.   : node scripts/add-desserts.mjs C:\Users\ferre\Downloads
//
// Cherche dans le dossier les fichiers nommés r36, r37, … r45 (png/jpg/jpeg/webp)
// et les passe un par un à add-photo.mjs (redimensionne, compresse, branche le
// champ img: dans index.html). Les ids introuvables sont simplement signalés.

import { readdirSync, existsSync, statSync } from 'node:fs';
import { resolve, dirname, join, extname, basename } from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';

const HERE = dirname(fileURLToPath(import.meta.url));
const ADD_PHOTO = join(HERE, 'add-photo.mjs');
const IDS = Array.from({ length: 10 }, (_, i) => `r${36 + i}`);
const EXTS = ['.png', '.jpg', '.jpeg', '.webp'];

const dirArg = process.argv[2];
if (!dirArg) {
  console.error('Usage : node scripts/add-desserts.mjs <dossier>');
  console.error('Ex.   : node scripts/add-desserts.mjs C:\\Users\\ferre\\Downloads');
  process.exit(1);
}
const dir = resolve(dirArg);
if (!existsSync(dir) || !statSync(dir).isDirectory()) {
  console.error(`Dossier introuvable : ${dir}`);
  process.exit(1);
}

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

console.log(`\n${ok}/10 photos intégrées.`);
if (absents.length) {
  console.log(`Non trouvées dans le dossier : ${absents.join(', ')}`);
  console.log(`(les fichiers doivent s'appeler r36.png, r37.png … — extension png/jpg/jpeg/webp)`);
}
if (ok) console.log('\nPense à vérifier le rendu puis : git add . && git commit && git push');
