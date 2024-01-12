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


// Example usage
const dataToEncrypt = JSON.stringify(formData);

const encryptedData = encryptWithPublicKey(dataToEncrypt, publicKey);
console.log('Encrypted Data:', encryptedData);

const decryptedData = decryptWithPrivateKey(encryptedData, privateKey);
console.log('Decrypted Data:', decryptedData);


  // Show the download button
  document.getElementById('download-btn').style.display = 'block';
  // Set download link
  document.getElementById('download-btn').onclick = function () {
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