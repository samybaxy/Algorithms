function power(num, pwr) {
  if (pwr === 0) return 1;
  else return num * power(num, pwr - 1);
}
