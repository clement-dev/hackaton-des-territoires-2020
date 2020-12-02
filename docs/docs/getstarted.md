---
id: getstarted 
title: Get Started
sidebar_label: Get Started
---

# Installation 🛸

## Docker 🐳

```bash
docker-compose up
```

## Liens 🔗

### Documentation

[http://localhost:3000](http://localhost:3000)

### Neo4j

```bash

[http://localhost:7474](http://localhost:7474)
id: neo4j
pwd: admin
```

### API

[http://localhost:4000](http://localhost:4000)

# Initialisation des données

```cypher
MERGE (n:Personne {  nom:"Jacqueline",age:84, ville:"Paris", besoins:"vaccins,ventilateurs" })
MERGE (n:Marchandises { nom:"Vaccins" })
MERGE (n:Marchandises { nom:"Ventilateurs" })
MERGE (n:Communes { nom:"Nezel", magasins:"Leclerc", besoins:"vaccins" })
MERGE (n:Communes { nom:"Paris", magasins:"Monoprix, PharmacieA" })
MATCH (a:Communes),(b:Marchandises)
WHERE a.nom = 'Nezel' AND b.nom = 'Vaccins'
CREATE (a)-[r:POSSEDE { name: a.name + '<->' + b.name }]->(b)
RETURN type(r), r.name
```