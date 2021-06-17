export default function (dataset, field) {
  return dataset.findIndex((element) => element === field);
}
