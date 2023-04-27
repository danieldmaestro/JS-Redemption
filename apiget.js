const axios = require('axios');
const express = require('express');

const app = express();
const PORT = 3000;



const COINGECKO_API_URL = 'https://api.coingecko.com/api/v3';

async function btcToUsd(btcAmount) {
  try {
    const response = await axios.get(`${COINGECKO_API_URL}/simple/price?ids=bitcoin&vs_currencies=usd`);
    const btcToUsdExchangeRate = response.data.bitcoin.usd;
    
    const usdEquivalent = btcAmount * btcToUsdExchangeRate;

    return usdEquivalent;
  } catch (err) {
    console.error(`Error fetching BTC to USD exchange rate: ${err}`);
    throw err;
  }
}


app.get('/btc-to-usd', async (req, res) => {
  const btcAmount = parseFloat(req.query.btc);
  const usdEquivalent = await btcToUsd(btcAmount);
  
  res.json({
    btc: btcAmount,
    usd: usdEquivalent
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
