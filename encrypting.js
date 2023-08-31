var crypto = require('crypto');
// const algorithm = 'aes-256-abc';
var name = 'welcome';
var hash = crypto.createHash('sha256').update(name).digest('hex');
console.log(hash, `string de ${hash.length} caracteres = ${hash.length / 2} bytes = ${hash.length / 2 * 8} bits ` );
