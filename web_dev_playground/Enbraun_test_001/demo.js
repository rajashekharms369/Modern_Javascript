// Generate RSA key pair
function generateKeyPair() {
    return window.crypto.subtle.generateKey(
      {
        name: "RSA-OAEP",
        modulusLength: 2048,
        publicExponent: new Uint8Array([1, 0, 1]),
        hash: { name: "SHA-256" },
      },
      true,
      ["encrypt", "decrypt"]
    );
  }
  
  // Encrypt data with public key
function encryptData(data, publicKey) {
    const encodedData = new TextEncoder().encode(data);
    return crypto.subtle.encrypt(
      {
        name: "RSA-OAEP",
      },
      publicKey,
      encodedData
    );
}
  
//   // Decrypt data with private key
//   async function decryptData(encryptedData, privateKey) {
//     const decryptedArrayBuffer = await crypto.subtle.decrypt(
//       {
//         name: "RSA-OAEP",
//       },
//       privateKey,
//       encryptedData
//     );
  
//     return new TextDecoder().decode(decryptedArrayBuffer);
//   }
  
  // Example usage
function example() {
    try {
      const keyPair = generateKeyPair();
  
      const dataToEncrypt = "Hello, RSA encryption!";
      const encryptedData = encryptData(dataToEncrypt, keyPair.publicKey);
  
      console.log("Encrypted Data:", encryptedData);
  
    //   const decryptedData = decryptData(encryptedData, keyPair.privateKey);
    //   console.log("Decrypted Data:", decryptedData);
    } catch (error) {
      console.error("Error:", error);
    }
  }
  
  // Run the example
  example();