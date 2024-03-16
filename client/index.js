const axios = require('axios');
const niceList = require('../utils/niceList.json');
const MerkleTree = require('../utils/MerkleTree');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Please enter your name: ', (name) => {
  rl.close();
  checkName(name);
});

const serverUrl = 'http://localhost:1225';

async function checkName(name) {
  const { data: gift } = await axios.post(`${serverUrl}/gift`, {
    name
  });

  console.log({ gift });
}
