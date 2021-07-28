export function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function isToday(d: Date) {
  let td = new Date();
  if (
    td['getFullYear']() == d['getFullYear']() &&
    td['getMonth']() == d['getMonth']() &&
    td['getDate']() == d['getDate']()
  ) {
    return true;
  }
  return false;
}
