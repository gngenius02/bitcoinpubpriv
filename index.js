// address and public key from site.

// private: 0000000000000000000000000000000000060f4d11574f5deee49961d9609ac6
// address: '1NLbHuJebVwUZ1XqDjsAyfTRUPwDQbemfv'
// publicKey: 0248d313b0398d4923cdca73b8cfa6532b91b96703902fc8b32fd438a3b7cd7f55
// publicKey: 0448d313b0398d4923cdca73b8cfa6532b91b96703902fc8b32fd438a3b7cd7f5566f0742c24f5ff80c799d691d756ad8e5aa7f6d8f986abd9eeef45514637c0d4

import { createECDH } from 'crypto';
 
function binary2Hex(data) {
    return data.toString('hex').padStart(64, 0)
}

const startingHexPrivateKey = "0000000000000000000000000000000000060f4d11574f5deee49961d9609ac6";

const pkey = Buffer.from(startingHexPrivateKey, 'hex');


const curve = createECDH('secp256k1');

// this sets the curves privatekey.
curve.setPrivateKey(pkey)

const privateKeyFromCurve = binary2Hex(curve.getPrivateKey());
const pubKeyCompressed = curve.getPublicKey('hex', 'compressed');
const pubKeyUncompressed = curve.getPublicKey('hex', 'uncompressed');


if (startingHexPrivateKey === privateKeyFromCurve) {
    console.log({ privateKeyFromCurve, pubKeyCompressed, pubKeyUncompressed })
}


