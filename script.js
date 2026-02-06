const API_URL = "https://gold-api-proxyy.raid-mtc.workers.dev";

async function loadGold() {
  try {
    const res = await fetch(API_URL);
    const d = await res.json();

    const ounceUSD = d.price;               // GoldAPI price
    const gramUSD = ounceUSD / 31.1035;     // oz → gram
    const USD_TO_OMR = 0.385;               // Oman fixed rate

    const gramOMR = gramUSD * USD_TO_OMR;

    document.getElementById("k24").innerText = gramOMR.toFixed(3);
    document.getElementById("k22").innerText = (gramOMR * 0.916).toFixed(3);
    document.getElementById("k21").innerText = (gramOMR * 0.875).toFixed(3);
    document.getElementById("k18").innerText = (gramOMR * 0.750).toFixed(3);

    document.getElementById("ounce").innerText = ounceUSD.toFixed(2);
    document.getElementById("tola").innerText =
      (gramOMR * 116.64).toFixed(2); // 10 tola

    document.getElementById("time").innerText =
      new Date().toLocaleTimeString();

  } catch (e) {
    console.error(e);
    alert("Failed to load gold prices");
  }
}

// Load on page open
loadGold();

