function loadResource(path) {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: 'img/' + path,
      dataType: 'text',
      success(txt) {
        let json = eval('(' + txt + ')');

        let res = {};
        let count = 0, total = 0;
        for (let name in json) {
          total++;

          let oImg = new Image();

          oImg.src = 'img/' + json[name].src;
          oImg.onload = function () {
            res[name] = {
              img: this,
              frame: json[name].frame
            };

            count++;

            if (count == total) {
              resolve(res);
            }
          };
          oImg.onerror = function () {
            reject();
          };
        }
      },
      error(err) {

        reject(err);
      }
    })
  });
}

async function loadResources() {
  let src = {
    bottom: 'bottom.json',
    bullet: 'bullet.json',
    cannon: 'cannon.json',
    coin: 'coin.json',
    fish: 'fish.json',
    number: 'number.json',
    web: 'web.json'
  };
  let imgs = {};


  try {
    for (let name in src) {
      imgs[name] = await loadResource(src[name]);
    }

    window.__g_resouce = imgs;
  } catch (e) {
    throw e;
  }
}
