README
======

Pre-requisites
--------------

- A recent node/npm installation. 
- A global installation of [napa](https://github.com/shama/napa).

Usage
-----

As npm deals only with *node_modules* directories, a manual "translation"
of *node_modules* to *Resources/public* must be performed:

```
mv -T Resources/public node_modules

npm install foo --save

mv -T node_modules Resources/public
```
