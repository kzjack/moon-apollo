// id: '池子id',
// name: '池子名字',
// token: '池子代币',
// tokenDescription: '代币描述',
// tokenAddress: '代币ERC20地址',
// tokenDecimals: '存入精度'
// itokenDecimals: '提取精度'
// depostLimit: '存入最大数量限制' 0时不限制
// depostAlert: '存入提示'
// earnedToken: '奖励代币',
// earnedTokenAddress: '奖励代币ERC20地址',
// earnContractAddress: '池子合约地址',
// price ： 挖的代币的价格！
// path price:
export const pools = [
  /*
  {
    chainId: 56,    
    id: 'bnb',
    name: 'BNB',  
    token: 'BNB',
    tokenDescription: 'BNB',
    tokenAddress: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',    
    tokenAddress: '',
    tokenDecimals: 18,
    itokenDecimals: 18,
    depostLimit:0,
    depostAlert:'',
    tokenDescriptionUrl: '',
    tokenDescriptionUrl2: '',
    earnedToken: 'iWBNB',
    earnedTokenAddress: '0x72dd5Df626ebBc020fdF431502799413c56Ac12C',
    earnContractAddress: '0x72dd5Df626ebBc020fdF431502799413c56Ac12C',
    defaultApy: "39.54",
    pricePerFullShare: 1,
    pastPricePerFullShare: 1
  },
  {
    chainId: 56,    
    id: 'wbnb',
    name: 'WBNB',  
    token: 'WBNB',
    tokenDescription: 'WBNB',
    tokenAddress: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    tokenDecimals: 18,
    itokenDecimals: 18,
    depostLimit:0,
    // depostAlert:'Vault-Dialog-Content',
    tokenDescriptionUrl: '',
    tokenDescriptionUrl2: '',
    earnedToken: 'iWBNB',
    earnedTokenAddress: '0x72dd5Df626ebBc020fdF431502799413c56Ac12C',
    earnContractAddress: '0x72dd5Df626ebBc020fdF431502799413c56Ac12C',
    defaultApy: "39.54",
    pricePerFullShare: 1,
    pastPricePerFullShare: 1
  },*/
  {
    chainId: 56,
    id: 'busd',
    name: 'BUSD',
    token: 'BUSD',
    tokenDescription: 'BUSD',
    tokenAddress: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
    tokenDecimals: 18,
    itokenDecimals: 18,
    depostLimit:0,
    depostAlert:'',
    tokenDescriptionUrl: '',
    tokenDescriptionUrl2: '',
    earnedToken: 'BUSD',
    claimedTokenAddress: '0x7F70642d88cf1C4a3a7abb072B53B929b653edA5',
    earnedTokenAddress: '0xd2c17eBf8DEdB9bD9D32699820E5d254eccA86b7',
    earnContractAddress: '0xd2c17eBf8DEdB9bD9D32699820E5d254eccA86b7',
    defaultApy: "42.63",
    pricePerFullShare: 1,
    pastPricePerFullShare: 1,
  },
  {
    chainId: 56,
    id: 'usdt',
    name: 'USDT',
    token: 'USDT',
    tokenDescription: 'USDT',
    tokenAddress: '0x55d398326f99059ff775485246999027b3197955',
    tokenDecimals: 18,
    itokenDecimals: 18,
    depostLimit:0,
    depostAlert:'',
    tokenDescriptionUrl: '',
    tokenDescriptionUrl2: '',
    earnedToken: 'USDT',
    claimedTokenAddress: '0x7F70642d88cf1C4a3a7abb072B53B929b653edA5',
    earnedTokenAddress: '0x104eff0aCB024625FCD839eBfEef2553172dF046',
    earnContractAddress: '0x104eff0aCB024625FCD839eBfEef2553172dF046',
    defaultApy: "39.54",
    pricePerFullShare: 1,
    pastPricePerFullShare: 1,
  },
  {
    chainId: 56,
    id: 'usdc',
    name: 'USDC',
    token: 'USDC',
    tokenDescription: 'USDC',
    tokenAddress: '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d',
    tokenDecimals: 18,
    itokenDecimals: 18,
    depostLimit:0,
    depostAlert:'',
    tokenDescriptionUrl: '',
    tokenDescriptionUrl2: '',
    earnedToken: 'USDC',
    claimedTokenAddress: '0x7F70642d88cf1C4a3a7abb072B53B929b653edA5',
    earnedTokenAddress: '0x7F70642d88cf1C4a3a7abb072B53B929b653edA5',
    earnContractAddress: '0x341E125F8258d0663c9Cd1Cdb86c2d629619F299',
    defaultApy: "39.54",
    pricePerFullShare: 1,
    pastPricePerFullShare: 1,
  },

  //Heco
  {
    chainId: 128,    
    id: 'ht',
    name: 'HT',  
    token: 'HT',
    tokenDescription: 'HT',
    tokenAddress: '',    
    tokenAddress: '',
    tokenDecimals: 18,
    itokenDecimals: 18,
    depostLimit:0,
    depostAlert:'',
    tokenDescriptionUrl: '',
    tokenDescriptionUrl2: '',
    earnedToken: 'HUSD',
    earnedTokenAddress: '0x66ff09103e22fa875ea4bd46cc19b2370b697562',
    earnContractAddress: '0x66ff09103e22fa875ea4bd46cc19b2370b697562',
    defaultApy: "39.54",
    pricePerFullShare: 1,
    pastPricePerFullShare: 1
  },
  {
    chainId: 128,    
    id: 'wht',
    name: 'WHT',  
    token: 'WHT',
    tokenDescription: 'WHT',
    tokenAddress: '0x5545153ccfca01fbd7dd11c0b23ba694d9509a6f',
    tokenDecimals: 18,
    itokenDecimals: 18,
    depostLimit:0,
    // depostAlert:'Vault-Dialog-Content',
    tokenDescriptionUrl: '',
    tokenDescriptionUrl2: '',
    earnedToken: 'HUSD',
    earnedTokenAddress: '0x66ff09103e22fa875ea4bd46cc19b2370b697562',
    earnContractAddress: '0x66ff09103e22fa875ea4bd46cc19b2370b697562',
    defaultApy: "39.54",
    pricePerFullShare: 1,
    pastPricePerFullShare: 1
  },
  {
    chainId: 128,
    id: 'husd',
    name: 'HUSD',
    token: 'HUSD',
    tokenDescription: 'HUSD',
    tokenAddress: '0x0298c2b32eaE4da002a15f36fdf7615BEa3DA047',
    tokenDecimals: 18,
    itokenDecimals: 18,
    depostLimit:0,
    depostAlert:'',
    tokenDescriptionUrl: '',
    tokenDescriptionUrl2: '',
    earnedToken: 'HUSD',
    claimedTokenAddress: '0x0298c2b32eaE4da002a15f36fdf7615BEa3DA047',
    earnedTokenAddress: '0x0298c2b32eaE4da002a15f36fdf7615BEa3DA047',
    earnContractAddress: '0x902f551edc28ccfa5d2f84f10f8acb50d6b00613',
    defaultApy: "39.54",
    pricePerFullShare: 1,
    pastPricePerFullShare: 1,
  },
  {
    chainId: 128,
    id: 'hbtc',
    name: 'HBTC',
    token: 'HBTC',
    tokenDescription: 'HBTC',
    tokenAddress: '0x66a79d23e58475d2738179ca52cd0b41d73f0bea',
    tokenDecimals: 18,
    itokenDecimals: 18,
    depostLimit:0,
    depostAlert:'',
    tokenDescriptionUrl: '',
    tokenDescriptionUrl2: '',
    earnedToken: 'HUSD',
    claimedTokenAddress: '0x0298c2b32eaE4da002a15f36fdf7615BEa3DA047',
    earnedTokenAddress: '0x0298c2b32eaE4da002a15f36fdf7615BEa3DA047',
    earnContractAddress: '0xf86cf20d33dc24ab83e03b838db7f8df15ba647b',
    defaultApy: "39.54",
    pricePerFullShare: 1,
    pastPricePerFullShare: 1,
  },  


  

]