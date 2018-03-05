/* eslint-disable no-console */
class WindDataDownloader {
  downloadMulti(departure, destination, pressure,
    onUpdateCallback, onEndCallback, onErrorCallback) {
    console.log(`Pressure level: ${pressure}`);
    this.onUpdateCallback = onUpdateCallback;
    this.onEndCallback = onEndCallback;
    this.onErrorCallback = onErrorCallback;
    // http://float.aerocene.org/traj4multi2d.php?0,250,52.5,13.4%2049.2,-123.1,49.2,-123.1,49.2,-123.1,49.2,-123.1,49.2,-123.1,49.2,-123.1,49.2,-123.1,49.2,-123.1,
    let url = '';
    for (let i = 0; i < 8; i += 1) {
      url += `${departure.lat},${departure.lng},`;
    }
    this.downloadMultiS(0, url, departure, destination, pressure);
  }

  downloadMultiS(day, urls, departure, destination, pressure) {
    let url = `http://float.aerocene.org/traj4multi2d.php?${day},${pressure},${destination.lat},${destination.lng} ${urls}`;
    console.log(`${url}`);
    if (departure.lat === 52.520645 && departure.lng === 13.409779 &&
      destination.lat === 35.652832 && destination.lng === 139.839478) {
      url = `static/data/gfs/test/${day}.json`;
    }
    fetch(url)
      .then(r => r.json())
      .then((json) => {
        this.onUpdateCallback(json);
        url = '';
        for (let i = 0; i < 8; i += 1) {
          const index = (json.d.length - 8) + i;
          url += `${json.d[index][2]},${json.d[index][3]},`;
        }
        if (day < 15) {
          this.downloadMultiS(day + 1, url, departure, destination, pressure);
        } else {
          // eslint-disable-next-line no-console
          console.log('Done!');
          this.onEndCallback();
        }
      })
      .catch((r) => {
        console.log('Downloader error');
        console.log(r);
        this.onErrorCallback();
      });
  }
}

export default new WindDataDownloader();
