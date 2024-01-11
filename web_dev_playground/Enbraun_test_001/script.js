function submitForm(event) {
  
  event.preventDefault();

// Collect form data
var formData = {
  instanceId: document.getElementById('instanceId').value,
  module: Array.from(document.getElementsByName('module')).filter(cb => cb.checked).map(cb => parseInt(cb.value)).reduce((sum, value) => sum + value, 0),
  numResources: parseInt(document.getElementById('numResources').value),
  expiryDate: document.getElementById('expiryDate').value,
  accountStatus: parseInt(document.getElementById('accountStatus').value)
};

// Sample RSA private key
var privateKey = "-----BEGIN PRIVATE KEY-----MIICdgIBADANBgkqhkiG9w0BAQEFAASCAmAwggJcAgEAAoGBAKbd8gDmkkDme3b3EIHkxwm7FnhauTTKCVyT64p6/XKdM+ezhU8ggMRX8D8hRi7GHuamrBxBVVY42I49NZPwulgJgw8m28wyT27whevQHy56RDZ/l2LTYHe26mtop8cGndyuTKJmvIRMsnUFZVUaMDl7NUPnP+dNMT1cKYACBX8dAgMBAAECgYB1U5jVCUnMWEJ3Y0A4FKPeM62Y8jFG7MeoUFlNBS0vaVkVkSQqfrALXcmOmda/DI6tnoNlWoqmFVIusNr7Kkfae2uH/PqP0Dd4+pZ/jf8Lpm+lXFpbdfD/6Ebt2jcmySVNAMjrQmEjMfLPW6rziaHDxGYYv/VVGfsjlbDgTyQAAQJBAN4/OlNJMUy5EH0nqT8PdxE8/GiRU97ZJBhdrUAdGBvc29U9I+vN43enG5PS7iEAcU8wVytvaUCs9rICl62USrECQQDANZcXHTNeypWjo0U1VflV2reIzZIQjFxeJ/9lfeCxcTxeoKvttSzQp8lc+zTnSl/IOymtg5NMEif+ThL/Fb4tAkEAvm5Y8KJHjuEIAuVn/LOop2mlMYhM4CcY6ZPi7ou/a6hr6SQxUkyhepYCaECVcEury1m1Z29YNWW/IDpecwockQJAbrnwklY2E7NsxNn3sqQWgQkAlgSm0nWpeGxeSp9bY50yA+lXYhbu/DzMWY41idBkoTrD5btYjYggFfXwJ5bk+QJAZ83h75FE+E7WJHcUU6Z8x8AHx9DK1pW6GhI561QmRsOcC45ecAFZg5BDtGjNbJZHwjgDOF06Zxkj8tQz/ac+rQ==-----END PRIVATE KEY-----";

var publicKey = "-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCm3fIA5pJA5nt29xCB5McJuxZ4Wrk0yglck+uKev1ynTPns4VPIIDEV/A/IUYuxh7mpqwcQVVWONiOPTWT8LpYCYMPJtvMMk9u8IXr0B8uekQ2f5di02B3tupraKfHBp3crkyiZryETLJ1BWVVGjA5ezVD5z/nTTE9XCmAAgV/HQIDAQAB-----END PUBLIC KEY-----";

// Encrypt
const encrypt = new JSEncrypt();

encrypt.setPublicKey(publicKey);
  
const result = encrypt.encrypt(JSON.stringify(formData));

const base64EncodedString = btoa(result);

console.log(base64EncodedString);

// Decrypt
const decrypt = new JSEncrypt();

const decodedBase64String = atob(base64EncodedString);

  decrypt.setPrivateKey(privateKey);

  const text = decrypt.decrypt(decodedBase64String);

  console.log(text);

// const buffer = new TextEncoder().encode(privateKey);

// console.log(buffer);


// encryptAndStoreKeyWithMetadata(buffer, formData, "");

// // Sign the form data with the private key
// //   var signature = signData(formData, privateKey);

// // Encrypt the signed key
// var encryptedKey = encryptMessage(buffer, formData);

// // Log the object with associated values
// console.log(formData);

// // Log the signed and encrypted key
// //   console.log("Signed Key:", signature);
// console.log("Encrypted Key:", encryptedKey);

// Show the download button
document.getElementById('download-btn').style.display = 'block';
// Set download link
document.getElementById('download-btn').onclick = function() {
  downloadKey(result, formData.instanceId);
};
}





function downloadKey(encryptedKey, instanceId) {
var fileName = instanceId + ".license";
var downloadLink = document.createElement("a");
downloadLink.href = 'data:text/plain;base64,' + encryptedKey;
downloadLink.download = fileName;
downloadLink.click();
}







async function encryptAndStoreKeyWithMetadata(privateKey, metadata, password) {
  // Step 1: Generate RSA Key Pair
  const rsaKeyPair = await crypto.subtle.generateKey(
    { name: 'RSA-OAEP', modulusLength: 2048, publicExponent: new Uint8Array([1, 0, 1]), hash: 'SHA-256' },
    true,
    ['encrypt', 'decrypt']
  );

  // Step 2: Encrypt the RSA Private Key
  const encryptedPrivateKey = await crypto.subtle.exportKey('jwk', privateKey);

  const encodedPrivateKey = new TextEncoder().encode(JSON.stringify(encryptedPrivateKey));

  const passwordKey = await crypto.subtle.importKey('raw', new TextEncoder().encode(password), 'PBKDF2', false, ['deriveBits', 'deriveKey']);

  const derivedKey = await crypto.subtle.deriveKey({ name: 'PBKDF2', salt: new Uint8Array([1, 2, 3, 4, 5, 6, 7, 8]), iterations: 100000, hash: 'SHA-256' }, passwordKey, { name: 'RSA-OAEP', length: 256 }, true, ['encrypt']);
  const encryptedKey = await crypto.subtle.encrypt({ name: 'RSA-OAEP', iv: window.crypto.getRandomValues(new Uint8Array(12)) }, derivedKey, encodedPrivateKey);

  // Step 3: Include Metadata
  const encryptedKeyWithMetadata = {
    encryptedKey: new Uint8Array(encryptedKey),
    metadata: metadata
  };

  // Store or send encryptedKeyWithMetadata to the server
  console.log(encryptedKeyWithMetadata);
}