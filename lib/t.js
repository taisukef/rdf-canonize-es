import { canonize } from './index.js';

const dataset = {
  "@context": "https://json-ld.org/contexts/person.jsonld",
  "@id": "http://dbpedia.org/resource/John_Lennon",
  "name": "John Lennon",
  "born": "1940-10-09",
  "spouse": "http://dbpedia.org/resource/Cynthia_Lennon"
};

// canonize a data set with a particular algorithm with async/await
const canonical = await canonize(dataset, { algorithm: 'URDNA2015' });
console.log(canonical);
