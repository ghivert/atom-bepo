# Bépo package

Bépo est un clavier conçu pour simplifier l'écriture du français. Comme le Dvorak, il aide à écrire en dactylographie. Mais dans la dernière norme publiée par l’AFNOR, le caractère `'` est plus difficilement accessible pour les développeurs dans un usage quotidien. Heureusement, nous pouvons restaurer l’ancien comportement (amélioré en plus !) grâce à Atom !

## For English speakers

Bépo is a keyboard built to simplify writing French in a daily base. Just like Dvorak, bépo helps to write blindly and with reduced hand movements. But in the latest standard of the AFNOR, the `'` character is now difficulty accessible for developers in an everyday use. Hopefully, we can turn this off easily, thanks to Atom!

# Installation

```
apm install bepo
```

# Usage

À chaque `’` entré, le package essaiera de déterminer quel caractère il doit entrer ! Si le curseur est dans une String, l’insertion sera un `’`, à moins qu’il ne soit juste à côté d’un caractère `'`, dans ce cas il insérera un caractère `'` et fermera la String à l’aide de Bracket Matcher.

# Évolutions

Il est tout à fait possible d’imaginer des comportements supplémentaires : inversion complète `’` et `'`, inversion sélective, etc. Pour l’instant ce package répond à mon problème qui utilise Bracket Matcher. N’hésitez pas à me dire comment le compléter avec Issues ou Pull Requests !
