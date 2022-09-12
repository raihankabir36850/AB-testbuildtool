const getProducts = async () => {
  const DYPayload = {
    data: [
      {
        wId: 130164,
        fId: '',
        maxProducts: 40,
        rules: [],
        filtering: []
      }
    ],
    ctx: {
      data: [],
      type: 'HOMEPAGE'
    }
  };

  const DYResponse = await fetch(
    `https://rcom-eu.dynamicyield.com/v3/recommend/${window.DY.section}`,
    {
      method: 'POST',
      body: JSON.stringify(DYPayload)
    }
  );
  const DYData = await DYResponse.json();
  const skusArr = DYData.response[0].slots
    .map((slot) => {
      const sku = slot.item.url.split('prodId=')[1].split('&')[0];
      const validSku = sku.indexOf('-') !== -1;
      if (!validSku) return undefined;
      return sku;
    })
    .filter(Boolean);

  const { brochure_id, campaignNumber } = window.PDP_MANAGER.API_DATA;
  const avonResponse = await fetch(
    `https://api.we.avon.digital-catalogue.com/avon-mas/UK/product/view-data/${campaignNumber}/?brochureId=${brochure_id}&preventCache=${window.preventCacheId}`,
    {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        skus: skusArr
      })
    }
  );
  const avonData = await avonResponse.json();
  //const bestSellers = avonData.result.filter((item) => item.isBestSeller);

  return avonData.result.slice(0, 6);
};
export default getProducts;
