export default {
  async fetch() {
    const response = await fetch(
      "https://www.goldapi.io/api/XAU/USD",
      {
        headers: {
          "x-access-token": GOLDAPI_KEY,
          "Content-Type": "application/json"
        }
      }
    );

    const data = await response.json();

    return new Response(JSON.stringify(data), {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      }
    });
  }
};

