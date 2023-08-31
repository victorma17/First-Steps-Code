/* var crypto = require('crypto');
var name = 'welcome';
var hash = crypto.createHash('sha256').update(name).digest('hex');
console.log(hash, `string de ${hash.length} caracteres = ${hash.length / 2} bytes = ${hash.length / 2 * 8} bits ` );
*/

const crypto = require('crypto');
const algorithm = "aes-256-cbc"; 
const key = crypto.randomBytes(32); 
const iv = crypto.randomBytes(16);
    // initial vector
const text = "goodbay world";

function encrypt(text, algorithm) {
    let cipher = crypto.createCipheriv(algorithm, Buffer.from(key), iv); 
    let encrypted = cipher.update(text);
    encrypted = Buffer.concat([encrypted, cipher.final()]);
    return { iv: iv.toString('hex'), encryptedData: encrypted.toString('hex') }
};

var encryptedText = encrypt(text, algorithm);

function decrypt(text, algorithm) {
    let iv = Buffer.from(text.iv, 'hex');
    let encryptedText = Buffer.from(text.encryptedData, 'hex');
    let decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(key), iv); let decrypted = decipher.update(encryptedText);
    decrypted = Buffer.concat([decrypted, decipher.final()]);
    return decrypted.toString();
}
console.log(`Texto origen: ` +  text)
console.log(`Texto encryptado: ` +  encryptedText.encryptedData)
console.log(`Texto desencryptado: ` +  decrypt(encryptedText, algorithm))