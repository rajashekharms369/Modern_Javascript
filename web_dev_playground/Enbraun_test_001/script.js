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
  var privateKey = `-----BEGIN RSA PRIVATE KEY-----
  MIICXAIBAAKBgHxR6+3yV1/Ij4zbCKB5PoAaAwmff6k99NhycAH7BLEzjgEnO/TE
  NlE0fhtKik6d61MGHvb/OfqXkFBqKl67av419qoWVVl+1shclmt4vfhxn+1czfxc
  38iT3vOxc14hPvxLS23uQ2Wb3FDAXUOu+HHovu4W3m3lNU15OzgaRwLHAgMBAAEC
  gYBAFKYM566785By5XAj73sU4tOQAUP3g7USYKJ1kuMPR+i5lXSlLQJmhy09egWi
  kmn7SJtra5GCJt+/Y4nlfKugFwsRb5gjFHtn9TkTSZBiyrzvqBnSg2XDgGvkAXE2
  BXLfSwUyszdKytzpf7cAaTjRE/c7PvmmcV9CxxZs6No3UQJBAL08jg+dLBaz8spa
  rhculYBNnWvVsd5sYNoRB4+tcE2cXaVKq17Xr9XN7qVPjj96k54+IOvoLXIxQ6Xj
  vleqHPkCQQCoLj38oORXJktPMEUh75EOItEJO1LEiDkr3mytx3qh9+ZBgxHXKfI3
  ZfoocrPpHOUktUtQOY7xwZlU7YRUaM2/AkAoLp+LuTgPag534WFuEro0EEcJCstG
  C4VVSKBuZcme8UEBRCW3cd0obR3rhEUUPZby1wZukVJ1GPjgVMeqHbkhAkEAgAO6
  4ToitQeMGXnXlY5CLq1nygwi40ABrJfAx8JoYTNOTB2Vjd765Ro1gWZV9aIt9XQe
  ILG/UdwYd6HXsVyZBwJBAKUcubsuHQ2lj2/iUjR3ILOTY25ngV/0h00awhN2kxS1
  kVpYLxqNrQjPPR2FESNhax9gEFfZ5jst2ClMQmMxHP0=
  -----END RSA PRIVATE KEY-----`;

  // Sign the form data with the private key
//   var signature = signData(formData, privateKey);

  // Encrypt the signed key
  var encryptedKey = encryptMessage(privateKey, formData);

  // Log the object with associated values
  console.log(formData);

  // Log the signed and encrypted key
//   console.log("Signed Key:", signature);
  console.log("Encrypted Key:", encryptedKey);

  // Show the download button
  document.getElementById('downloadBtn').style.display = 'block';
  // Set download link
  document.getElementById('downloadBtn').onclick = function() {
    downloadKey(encryptedKey, formData.instanceId);
  };
}

function signData(data, privateKey) {
  // Sample signing logic (not secure, use a proper library for real applications)
  // This is just for demonstration purposes
  var signature = "SampleSignature";
  return signature;
}

function encryptMessage(publicKey, data) {
    return window.crypto.subtle.encrypt(
      {
        name: "RSA-OAEP",
      },
      publicKey,
      data,
    );
  }

function downloadKey(encryptedKey, instanceId) {
  var fileName = instanceId + ".license";
  var downloadLink = document.createElement("a");
  downloadLink.href = 'data:text/plain;base64,' + encryptedKey;
  downloadLink.download = fileName;
  downloadLink.click();
}