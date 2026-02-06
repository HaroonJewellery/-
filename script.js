const API_URL = "https://gold-api-proxyy.raid-mtc.workers.dev/";
const MARKET_PREMIUM = 0.5; // Oman market adjustment

async function loadGold() {
  try {
    const res = await fetch(API_URL);
    const d = await res.json();

    const ounceUSD = d.price;
    const gramUSD = ounceUSD / 31.1035;
    const USD_TO_OMR = 0.385;

    const gramOMR = (gramUSD * USD_TO_OMR) + MARKET_PREMIUM;

    document.getElementById("k24").innerText = gramOMR.toFixed(3);
    document.getElementById("k22").innerText = (gramOMR * 0.916).toFixed(3);
    document.getElementById("k21").innerText = (gramOMR * 0.875).toFixed(3);
    document.getElementById("k18").innerText = (gramOMR * 0.75).toFixed(3);

    document.getElementById("ounce").innerText = ounceUSD.toFixed(2);
    document.getElementById("tola").innerText = (gramOMR * 116.64).toFixed(2);

    document.getElementById("time").innerText =
      new Date().toLocaleTimeString("en-GB");

  } catch (e) {
    console.error(e);
  }
}

// Load & auto-refresh every 60 seconds (TV-safe)
loadGold();
setInterval(loadGold, 60000);