# placeholder-generator
Generates text by length using `lorem-ipsum` so that you have a little more control on the length of text. It will return *slightly* shorter text than the number you pass as an argument.

```
var generate = require('placeholder-generator');
var text = generate(100);
console.log(text, text.length);
// ==> Veniam qui tempor exercitation duis dolore mollit in labore Lorem. Aute consectetur ullamco est. 96
```

##Known issues:

* if you give a small number like `10`, you sometimes just get `.`
* At the end of sentence, you sometimes get like `. .`
