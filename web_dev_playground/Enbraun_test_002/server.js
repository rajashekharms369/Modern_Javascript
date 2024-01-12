const express = require('express');
const bodyParser = require('body-parser');
const crypto = require('crypto');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Sample RSA key pair (replace these with your actual keys)
const privateKey = `-----BEGIN RSA PRIVATE KEY-----
MIICWwIBAAKBgHqcY8lBbnw65yeYHIWpsGS3BpMK/nC0P4arVfe9SR1ghnNIdQgd
7dIrcQr0QMskRF2hFcfs+Tl+RjQrU/jAX3plmHylqZOvUb295X16pSEilkcP6D+B
AYdkEhgH1Z7q6rjzufGlWSFx/31Ck1AaUegcGdKASHlD/nYsdQ6GvPybAgMBAAEC
gYA8v7W1JoUuaiTTektPcnbiP8izHDRa9QOwnr2WZKOQOZ4ECndp0SJfCoUUz1Y3
ED4LQd+/0crd0JHKEVmmmvHyy1FUR4dNsNW9h67FjUh1fvrjqR1RDJEmh2f60HNc
V1v65cKhYFe15lnBMHsQJQ/6rQVGFlVd68U5LKpv2t/JWQJBAMTMxD5qcTrEGggA
HOMjKgxBSQiS9OikGgQuhM0IuasNBgQEce7zo8DhAjYCzvLDgbgvd2aP1h79Lmcn
7M0NhBcCQQCffnPso3rZYLjB4pepLPA9kUKWZ04Qph/c7K3p2rnBgd1WnTcX860f
DD2lnyPc1sjearKttx8eY6Qbxo5tSOodAkAb6KYT6+hu2wyOAeYW2A/IeSGwU5bj
vxHpcednZEtgVJJ7012M84RPgBleK3vJtawZwLGAG/nTnzgLbQAJ/Fa1AkBGvwKQ
vtspPRv29JmtMv/Fb3+H037vJ6EOj/V8u8aVrRMO7mGXwEDUesuFgZeYx7UF43Iq
WAX3pt8Oav6WPzeJAkEApVmY1GBjo4YR2xs+2NAbc2KtA1cnBFZpU6slPRvWn+qy
TfaHguWf/RYuUvfopXBUTLEhCTxomRU8Wc5KMTkKxA==
-----END RSA PRIVATE KEY-----`;

const publicKey = `-----BEGIN PUBLIC KEY-----
MIGeMA0GCSqGSIb3DQEBAQUAA4GMADCBiAKBgHqcY8lBbnw65yeYHIWpsGS3BpMK
/nC0P4arVfe9SR1ghnNIdQgd7dIrcQr0QMskRF2hFcfs+Tl+RjQrU/jAX3plmHyl
qZOvUb295X16pSEilkcP6D+BAYdkEhgH1Z7q6rjzufGlWSFx/31Ck1AaUegcGdKA
SHlD/nYsdQ6GvPybAgMBAAE=
-----END PUBLIC KEY-----`;

// Endpoint to encrypt data
app.post('/encrypt', (req, res) => {
  const originalData = req.body.data;
  if (!originalData) {
    return res.status(400).json({ error: 'Missing data parameter in the request body' });
  }

  const encryptedData = crypto.privateEncrypt(
    {
      key: privateKey,
      padding: crypto.constants.RSA_PKCS1_PADDING,
    },
    Buffer.from(originalData)
  );
  const encryptedBase64 = encryptedData.toString('base64');
  res.json({ encryptedData: encryptedBase64 });
});

// Endpoint to decrypt data
app.post('/decrypt', (req, res) => {
  const encryptedData = Buffer.from(req.body.data, 'base64');
  if (!encryptedData) {
    return res.status(400).json({ error: 'Missing data parameter in the request body' });
  }

  const decryptedData = crypto.publicDecrypt(
    {
      key: publicKey,
      padding: crypto.constants.RSA_PKCS1_PADDING,
    },
    encryptedData
  );
  const decryptedText = decryptedData.toString();
  res.json({ decryptedData: decryptedText });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});