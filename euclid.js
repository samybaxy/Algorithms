export default function (a, b) {
  let t = null;

  while (b != 0) {
    t = a;
    a = b;
    b = t % b;
  }

  return a;
}
