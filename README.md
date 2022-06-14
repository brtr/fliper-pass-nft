# 发布流程

## 发布准备

复制env_sample到.env并修改各个参数, 然后

```
npm install
```

## 发布合约

```
npx hardhat run scripts/deploy.js --network rinkeby
```

## 验证合约 (国内网络可能会超时，在服务器上验证过没问题)

```
npx hardhat verify --network rinkeby 合约地址
```


## mint

mint之前需要添加白名单，数量不需要18个0


**发布的时候需要注意的地方：**

1 API_URL 是用来配置第三方的rpc的地址 
2 第三方的RPC可以考虑采用infrua， 目前使用alchemyapi 会出现too many requests的情况
3 API_KEY 是etherscan注册的api， 不同的账号， 使用不同的apikey， 要注意区分
4 如果发布的时候， 出现 > replacement fee too low 的情况， 请注意需要更换对应的rpc

```
FliperPass Contract deployed to: 0x04bd3420597c2101B7cea2C6DB54078b38386065
Fliper Contract deployed to: 0x47B8852B39319A32df6347ACEb17419338335e42
Staking Contract deployed to: 0x0c4F7A1c083FeFfeD24141F4BB38fc9a41bB77Fa
```

**验证需要注意**
`npx hardhat verify --network rinkeby '0x04bd3420597c2101B7cea2C6DB54078b38386065'`
有没有单引号都无所谓

验证staking 合约的时候：注意对应的参数，第一个是fliper pass的合约地址， 第二个是fliper的合约地址
`npx hardhat verify --network rinkeby '0x0c4F7A1c083FeFfeD24141F4BB38fc9a41bB77Fa' '0x04bd3420597c2101B7cea2C6DB54078b38386065' '0x47B8852B39319A32df6347ACEb17419338335e42'` 
