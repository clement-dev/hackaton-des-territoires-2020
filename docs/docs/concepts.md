---
id: concepts
title: Concepts
sidebar_label: Concepts
---

# Objectif

En temps de crise, nous notons qu'il est essentiel de pouvoir apporter à la population des réponses à leurs besoins. Les besoins peuvent être protéiformes (de nature humaine, matérielle...).
Répondre à un besoin revient donc à déterminer les caractéristiques qui sont à l'origine du problème pour y répondre de la façon la plus optimale. Les besoins peuvent être exprimés sous la forme de mots (introduction de la sémantique), c'est grâce à cette sémantique que l'on vient apprendre à mieux caractériser une entité,qu'elle prenne la forme d'une personne, instituton... L'entité peut-être vu comme un objet quelconque.
Les caractéristiques qui composent une entité peuvent ête partagées avec d'autres types d'entités. Le fait que les entités aient des propriétés communes entre elles permettent d'établir des relations. En parcourant ces relations on peut répondre à des besoins spécifiques et pousser de l'information pour certains profils.
Les propriétés qui décrivent les entités de notre modèle de données peuvent ête sourcées manuellement ou automatiquement via des connecteurs sur des bases en opendata.
L'avantage de notre solution est qu'il est simple d'ajuster les besoins en fonction des contraintes liées à la nature de la crise, et de suggérer de nouvelles solutions adaptées issues de l'évolution dynamique de notre modèle de données. Cette approche est issue des principes liés au websémantique.

![model](../static/img/model1.png)

Nous souhaitons donner la possibilité aux administrateurs de spécifier des règles pour associer des besoins à des profils (Commune, Personne...)
Pour se faire via une interface ils pourront écrire via un formulaire des besoins auxquels il faudra répondre pour un certain type de profils:

**Requête Générique**

```bash
Si <type> a <propriete> <operateur> <valeur> a besoin de <nom_besoin>
```

**Requête Exemple**
```bash
Si Personne a âge > 85 a besoin de ventilateur
```
On vient associer aux personnes de plus de 85 ans le besoin d'un ventilateur pour ce type de profils.

**Requête Exemple**
```bash
Si Commune a vaccins < 2000 a besoin de vaccins
```
On vient associer aux communes qui possèdent moins de 2000 vaccins la nécessité de s'approvisionner à nouveau et le besoin de vaccin est associé aux entités correspondantes

## Notifications

Lorsqu'il y a la possibilité de notifier à un utilisateur qu'il y a une solution possible pour répondre à son besoin on lui pousse la solution la plus pertinente via une notification. 
*Exemple: Le magasin le plus pertinent pour trouver un ventilateur, les villes qui possèdent des stocks de vaccins...*