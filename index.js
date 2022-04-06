import { createECDH } from 'crypto';

const curve = createECDH('secp256k1');


function hexStringToBuffer(hexString) {
    const numBytes = hexString.length / 2;
    const byteArray = Buffer.alloc(numBytes);
    for (var i = 0; i < numBytes; i++) {
        byteArray[i] = Buffer.from(`0x${hexString.substr(i * 2, 2)}`);
    }
    return byteArray;
}
function binary2Hex(data) {
    return data.toString('hex').padStart(64, 0)
}





const pk = hexStringToBuffer("0000000000000000000000000000000000060f4d11574f5deee49961d9609ac6");

// this sets the curves privatekey.
curve.setPrivateKey(pk)


// gets privateKey from curveFunction
const privateKey = binary2Hex(curve.getPrivateKey());

// gets public Key Compressed from curveFunction
const pubKeyCompressed = curve.generateKeys('hex', 'compressed');

// gets Full Public Key from curve Function
const publicKey = binary2Hex(curve.getPublicKey());


console.log({ privateKey, pubKeyCompressed, publicKey })



// address and public key from site.

// private: 0000000000000000000000000000000000060f4d11574f5deee49961d9609ac6
// address: '1NLbHuJebVwUZ1XqDjsAyfTRUPwDQbemfv'
// publicKey: 0248d313b0398d4923cdca73b8cfa6532b91b96703902fc8b32fd438a3b7cd7f55
// publicKey: 0448d313b0398d4923cdca73b8cfa6532b91b96703902fc8b32fd438a3b7cd7f5566f0742c24f5ff80c799d691d756ad8e5aa7f6d8f986abd9eeef45514637c0d4
