Caesar Cipher
=========

A Caesar cipher in 133 bytes.

"In cryptography, a Caesar cipher, also known as Caesar's cipher, the shift cipher, Caesar's code or Caesar shift, is one of the simplest and most widely known encryption techniques. It is a type of substitution cipher in which each letter in the plaintext is replaced by a letter some fixed number of positions down the alphabet. For example, with a left shift of 3, D would be replaced by A, E would become B, and so on. The method is named after Julius Caesar, who used it in his private correspondence."

[Wikipedia](http://en.wikipedia.org/wiki/Caesar_cipher)

Source
------
```javascript
var caesar = function(a,b,c){return a.replace(/[A-z]/g,function(a){c=(a=a.charCodeAt())>96?97:65;return String.fromCharCode((a+b%26+26-c)%26+c)})}
```

For more information
--------------------

See the [140byt.es](http://140byt.es) site for a showcase of entries (built itself using 140-byte entries!), and follow [@140bytes](http://twitter.com/140bytes) on Twitter.

To learn about byte-saving hacks for your own code, or to contribute what you've learned, head to [the wiki](https://github.com/jed/140bytes/wiki/Byte-saving-techniques).

140byt.es is brought to you by [Jed Schmidt](http://jed.is), with help from Alex Kloss. It was inspired by work from [Thomas Fuchs](http://mir.aculo.us) and [Dustin Diaz](http://www.dustindiaz.com/).