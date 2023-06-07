import sha256 from 'crypto-js/sha256.js'
import UTXOPool from "./UTXOPool.js";
import MerkelTree from "../cryptoCurrency/MerkelTree.js"
import {values} from "ramda";
import UTXO from "./UTXO.js";
export const DIFFICULTY = 3

class Block {
  // 1. 完成构造函数及其参数





  constructor(blockchain,previousHash,height,hash,coinbaseBeneficiary) {
    this.blockchain = blockchain;
    this.hash=hash
    this.previousHash = previousHash.toString();
    this.height = height;
    this.coinbaseBeneficiary = coinbaseBeneficiary
    this.utxoPool = new UTXOPool()
    this.transactions = []
    this.MerkelTreeRoot = null
  }

  isValid() {
    return  this.hash === this.calculateHash()&&
        (this.hash.substring(0,DIFFICULTY) ==='0'.repeat(DIFFICULTY))
  }

  setNonce(nonce) {
    this.nonce=nonce
    this.setHash()
  }

  calculateHash(){
    return sha256(
      this.nonce+
        this.previousHash+
        this.height+
        this.coinbaseBeneficiary+
        this.transactions+
        this.MerkelTreeRoot
    ).toString();
  }
  setHash(){
    this.hash = this.calculateHash()
  }




  // 根据交易变化更新区块 hash


  // 汇总计算交易的 Hash 值
  /**
   * 默克尔树实现
   */

  combinedTransactionsHash() {
    if (this.transactions.length === 0)
      return "No Transactions";
    const transactionHashes = this.transactions.map(tx => tx.hash);
    const combinedHash = transactionHashes.join("");
    return sha256(combinedHash).toString();
  }



  addTransaction(transaction) {
    if (!this.isValidTransaction(transaction)) {
      if (this.utxoPool.utxos["failTransactions"] ==undefined){
        const failutxo = new UTXO()
        this.utxoPool.utxos["failTransactions"] = failutxo
        this.utxoPool.utxos["failTransactions"].amount += transaction.value
      }else{
        this.utxoPool.utxos["failTransactions"].amount += transaction.value
      }
      this.hash = this.calculateHash()
    }
    //失败也打包上链 但只更新hash
    this.transactions.push(transaction);
    this.utxoPool.handleTransaction(transaction);
    this.MerkelTreeRoot = new MerkelTree(this.transactions).root; // 更新默克尔树的根哈希
    this.setHash();
  }
  isValidTransaction(transaction){
    return this.utxoPool.isValidTransaction(transaction)
  }


}

export default Block
