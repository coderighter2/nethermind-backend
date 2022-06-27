import { BigNumber } from 'bignumber.js';
import keccak256 from 'keccak256';

export function newHash(hash: string) {
  let tried = 0
  while(tried < 10000) {
    const nounce = Math.floor(Math.random() * 9999);
    const oldBigNumber = new BigNumber(hash)
    const newhash = '0x' + keccak256(Buffer.from(oldBigNumber.plus(nounce))).toString('hex')
    if (oldBigNumber.gt(new BigNumber(newhash))) {
      return {nounce, newhash}
    }
    tried ++
  }
  throw Error('failed to get new hash, try again')
}
