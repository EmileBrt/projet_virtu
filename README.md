# TP Virtualisation
https://khannurien.github.io/labs/cloud/programmer-le-cloud.html#td3--cicd-avec-github

# TD1
#### Q2
package.json donne les informations basics sur les dépendances
package-lock.json donnes les informations précises sur celle-ci

#### Q3
```
npm install systeminformation
```

Dans package.json on retrouve le paquet
```
"dependencies": {
    "systeminformation": "^5.12.13"
  }
```

Dans package-lock.json on retrouve la version du paquet:

```
"devDependencies": {
        "@types/jest": "^28.1.6",
        "@types/node": "^18.6.3",
        "@typescript-eslint/eslint-plugin": "^5.31.0",
        "@typescript-eslint/parser": "^5.31.0",
        "eslint": "^8.20.0",
        "eslint-config-prettier": "^8.5.0",
        "eslint-plugin-jest": "^26.7.0",
        "jest": "^28.1.3",
        "nodemon": "^2.0.19",
        "prettier": "^2.7.1",
        "ts-jest": "^28.0.7",
        "ts-node": "^10.9.1",
        "typescript": "^4.7.4"
      }
```
#### Q4

J'ai écrit mon code de façon impérative dans un premier temps ce qui m'a géné pour la réalisation de mes tests.
Je suis donc passé sur de la POO avec des methodes de lancement et de fermeture de serveur.

#### Q5

Celà permet de séparer les versions de l'API.
Nous pouvons alors passer à une version v2 par 'api/v2/....' tout en gardant la v1 utilisable.

#### Q6

Pour vérifier de manière ittérative que chaque méthode écrite réalise la tâche attendue.

# TD2

#### Q4

``-p`` permet de créer une passerelle entre le port du container (8000) et du système hôte(8123), c'est nécessaire car un service peut être en train d'utiliser le port 8000.

``-m`` permet de fixer l'allocation maximum en octet de mémoire vive au container, surdimensionné pourrait ralentir le système hôte en cas de forte charge et sous-dimensionné pourrait nuire à la performance de notre container en cas de forte charge.

``--cpus`` permet de spécifier le nombre de processeur que l'on alloue au maximum pour l'activité de notre container, nous pouvons spécifier un chiffre flottant (ex : 0.5). De même que pour la mémoire, il faut bien répartir la charge

#### Q5

Nous copions tout notre répertoire de travail et nous installons le gestionnaire de paquet npm en plus de node.
Pour réduire la taille nous pouvons n'installer que node, et ne copier que les binaires compilés de notre application et les librairies nécessaires à son fonctionnement (ie : pas les tests unitaires ...).

#### Q6

`` sysinfo-api                                        0.0.1     add0ce0b198b   13 days ago     178MB `` 

`` emilebrt/sysinfo-api                               0.0.2     934702f01ea2   7 days ago      53.8MB ``

Nous avons réussi à économiser 124.2 Mo. Sur un service Kubernet en Cloud, celà nous permettrais d'héberger plus d'instance pour une même taille de stockage.

#### Q8

``` sudo docker run -p 8123:8000 -m1024m --cpus=1 emilebrt/sysinfo-api:0.0.2 ```

# TD3

#### Q3

En se rendant dans la section Actions de notre repo github.

#### Q4

J'ai rencontré un erreur que je n'ai pas réussi à résoudre à la suite du passage POO de mon code.
Mes tests se réalisent et passent mais une erreur persiste, j'ai donc forcé la fin de ceux-ci.