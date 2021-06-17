// Assuming the itemlist array is already sorted.
// If not, sort the array using merge or quicksort.
export default function (item, itemlist) {
  let lowerIdx = 0;
  let upperIdx = itemlist.length - 1;
  let midIdx = null;

  while (lowerIdx <= upperIdx) {
    midIdx = Math.floor((lowerIdx + upperIdx) / 2);
    if (item === itemlist[midIdx]) return midIdx;

    if (item > itemlist[midIdx]) lowerIdx = midIdx + 1;
    else upperIdx = midIdx - 1;
  }

  if (lowerIdx > upperIdx) return -1;
}
