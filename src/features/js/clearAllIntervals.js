export default function (w) {
  w = w || window;
  let i = w.setInterval(function () {}, 100000);
  while (i >= 0) {
    w.clearInterval(i--);
  }
}
