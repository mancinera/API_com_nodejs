import { sql } from './db.js'

// sql`DROP TABLE IF EXISTS videos`. then(()=>{
//   console.log('Tabela apagada!')
// })

// sql`ALTER TABLE videos RENAME COLUMN descritpion TO description`.then(() =>{
//   console.log('Alteracao feita!')
// })


sql`
CREATE TABLE videos (
  id TEXT PRIMARY KEY,
  title TEXT,
  descritpion TEXT,
  duration INTEGER
);
`.then(() =>{
  console.log('Tabela criada!')
})