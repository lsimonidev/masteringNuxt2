export default function (context, inject) {
  const appID = "ZHM3PFBJ2R";
  const apiKey = "f5d9208fa7037c290f776b4513315963";
  const headers = {
    "X-Algolia-API-Key": apiKey,
    "X-Algolia-Application-Id": appID,
  };

  inject("dataApi", {
    getHome,
  });

  async function getHome(homeId) {
    try {
      return unWrap(
        await fetch(
          `https://${appID}-dsn.algolia.net/1/indexes/homes/${homeId}`,
          { headers }
        )
      );
    } catch (error) {
      return getErrorResponse(error);
    }
  }

  async function unWrap(response) {
    const json = await response.json();
    const { ok, status, statusText } = response;
    return {
      json,
      ok,
      status,
      statusText,
    };
  }

  function getErrorResponse(error) {
    return {
      ok: false,
      status: 500,
      statusText: error.message,
      json: {},
    };
  }
}
