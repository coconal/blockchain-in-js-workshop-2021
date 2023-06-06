# 数字货币技术理论课实验报告

## 小组成员

- 2021131150-孙杰 （组长）
- 2021131151-刘家旗
- 2021131152-肖杰
- 2021131149-黄彦童
- 2021131155-王星廷
- 2021131154-祝宇


## 代码仓库链接

https://github.com/caosbad/blockchain-in-js-workshop-2021(示例用，请根据自身的仓库替换)



## 第一课代码
https://github.com/coconal/blockchain-in-js-workshop-2021/blob/lesson5/src/cryptoCurrency/MerkelTree.js

### 代码 commint 地址

https://github.com/coconal/blockchain-in-js-workshop-2021/commit/0270d3cfdb76bd8c9dc5ff501dd398451defc1c9#diff-32f39cfca7a5e09599176801e28a531b69536c6deab5b987c67489c7e28effd3

### 代码截图

> 将截图上传至网盘，放入链接即可

[链接：https://pan.baidu.com/s/1746VwNs614NhmlHW4prjiA?pwd=2tj7
提取码：2tj7](链接)


### 主观与讨论题内容

---



## 第二课代码
https://github.com/coconal/blockchain-in-js-workshop-2021/blob/lesson5/src/cryptoCurrency/Trie.js

### 代码 commint 地址

https://github.com/coconal/blockchain-in-js-workshop-2021/commits/lesson5/src/cryptoCurrency/Trie.js

### 代码截图

> 将截图上传至网盘，放入链接即可

![](链接)


### 主观与讨论题内容
1. 如何实现字母和数字的查询？

可以使用 Trie 树来实现，将每个字母或数字看作一个节点，然后根据输入的单词或数字在 Trie 树中遍历即可。

2. 如何提高查询效率？

可以通过以下几方面来提高查询效率：

- 优化数据结构：使用适合场景的数据结构，例如使用 Trie 树来存储字母和数字组成的字符串。
- 增加索引：对于较大的数据集，可以增加索引来快速定位到需要的数据，如建立倒排索引。
- 使用缓存：对于频繁查询的数据，可以使用缓存来提高查询效率，如使用缓存系统 Memcached 或 Redis。
- 分布式查询：对于大型系统，可以将数据分散到多台机器中，使用分布式查询来提高查询效率。

---


## 第三课代码
https://github.com/coconal/blockchain-in-js-workshop-2021/blob/lesson5/src/cryptoCurrency/PatriciaMerkleTrie.js

### 代码 commint 地址

https://github.com/coconal/blockchain-in-js-workshop-2021/commits/lesson5/src/cryptoCurrency/PatriciaMerkleTrie.js

### 代码截图

> 将截图上传至网盘，放入链接即可

![](链接)


### 主观与讨论题内容
### **1.**    
以太坊并没有直接使用字典树来实现状态存储，但是它的Merkle Patricia Trie数据结构可以被看作是对字典树的改良。

Merkle Patricia Trie是以太坊用于存储账户和合约状态的一种树形数据结构，它是由Merkle Tree和Patricia Trie两种数据结构融合而成的。具体来说，它在Patricia Trie的基础上加入了Merkle Tree的验证机制，这使得以太坊在存储和同步状态时更加高效和安全。

相比于传统的字典树，Merkle Patricia Trie的优点有：

压缩性强：Merkle Patricia Trie将多个状态节点合并到一个Merkle根节点中，从而减少了存储空间和网络带宽的占用。

操作效率高：Merkle Patricia Trie采用了路径压缩技术，将共享前缀的节点压缩为一个节点，大幅减少了查询和更新操作的耗时。

数据可验证：由于Merkle Patricia Trie中的每个节点都有一个哈希值，因此可以通过哈希值验证节点的完整性和正确性，保证数据不被篡改。

### **2.**       

Merkle Patricia Trie（MPT）的设计是为了解决以太坊存储和同步状态时所面临的核心问题：存储空间占用和操作效率。

在以太坊中，每个账户和智能合约都有一个对应的状态。这些状态信息需要被存储在全网上的每个节点中，以便任何节点可以查询和验证状态信息。同时，在以太坊中，任何一笔交易都可能导致状态的改变，因此状态需要经常被更新和同步，这就需要高效地支持状态的修改、查找和删除操作。

传统的字典树虽然可以实现状态存储和同步，但存在以下问题：1）存储空间占用较大；2）查询和更新操作需要遍历整棵树，效率较低；3）数据无法有效验证完整性。

为了解决这些问题，MPT采用了路径压缩技术，并将多个状态节点合并到一个Merkle根节点中，从而减少了存储空间和网络带宽的占用；同时，节点的哈希值可以用于验证节点的完整性和正确性，保证数据不被篡改；最重要的是，MPT支持高效的插入、查询和删除操作，使得以太坊状态的修改和同步更加快速且可靠。


---
