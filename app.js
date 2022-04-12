import Web3 from 'web3'

const web3 = new Web3(Web3.givenProvider);

(async() => {
  const accounts = await web3.eth.requestAccounts();
  console.log(accounts);
  const account = accounts[0];

  const balance = await web3.eth.getBalance(account);
  console.log(balance);

  const txcount = await web3.eth.getTransactionCount(account);
  console.log(txcount);
})()
