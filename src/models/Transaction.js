import sha256 from 'crypto-js/sha256.js'
import {verifySignature} from "../crypto.js";

class Transaction {


  constructor(inputPublicKey,outputPublicKey,value,fee,signature) {
      this.inputPublicKey = inputPublicKey
      this.outputPublicKey = outputPublicKey
      this.value = value
      this.fee = fee
      this.signature = signature
      this._setHash()

}

  // 更新交易 hash
  _setHash() {
    this.hash = this._calculateHash()
  }

  // 计算交易 hash 的摘要函数
  _calculateHash() {


   return sha256(
       this.inputPublicKey+
       this.outputPublicKey+
       this.value+
       this.fee
   ).toString()

  }

  // 校验交易签名 返回 bool 类型的值
  hasValidSignature() {
    return verifySignature(this.hash,this.signature,this.inputPublicKey) && this.signature != undefined
  }

}

export default Transaction
