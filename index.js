import { randomBytes, createECDH } from 'crypto';

function generatePrivateKey(bytes = 32) {
    return randomBytes(bytes);
}
function binary2Hex(data) {
    return data.toString('hex')
}

const pk = generatePrivateKey();

const curve = createECDH('secp256k1');

curve.setPrivateKey(pk)
const priv = curve.getPrivateKey();
const pub = curve.getPublicKey();

if (binary2Hex(pk) !== binary2Hex(priv)) {
    console.error('something went wrong')
} else {
    console.log({ privateKey: binary2Hex(priv), publicKey: binary2Hex(pub) })
}


