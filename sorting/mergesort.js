function merge(arr1, arr2) {
  let results = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    results.push(arr1[j]);
    j++;
  }

  return results;
}

function mergesort(dataset) {
  if (dataset.length <= 1) return dataset;

  let mid = Math.floor(dataset.length / 2);
  let leftArray = dataset.slice(0, mid);
  let rightArray = dataset.slice(mid);

  return merge(leftArray, rightArray);
}
