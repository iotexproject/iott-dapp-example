
import elliptic from "elliptic";
import crypto from 'crypto';
import { Keccak } from "sha3";

const secp256k1 = new elliptic.ec("secp256k1");

function md5(key: string) {
  return crypto.createHash('md5').update(key).digest('hex');
}

function hmacSha1(content: string, key: string) {
  return crypto.createHmac('sha1', key).update(content).digest('hex');
}

function keccak256(input: string | Buffer | Uint8Array): Buffer {
  const k = new Keccak(256);
  return k.update(Buffer.from(input)).digest();
}

function hash160b(input: string | Buffer | Uint8Array): Buffer {
  const digest = keccak256(input);
  return digest.slice(12);
}

function publicKeyToAddress(publicKey: string): string {
  const key = secp256k1.keyFromPublic(publicKey, "hex");
  const publicKeyBytes = Buffer.from(key.getPublic(false, "hex"), 'hex');
  const hashBytes = hash160b(publicKeyBytes.slice(1));
  return '0x' + hashBytes.toString('hex');
}

export { md5, hmacSha1, keccak256, publicKeyToAddress };
