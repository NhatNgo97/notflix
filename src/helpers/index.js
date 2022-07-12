export function truncate(str, n) {
  return str?.length > n ? str.substr(0, n - 1) + " ..." : str;
}

export function countRuntime(n) {
  return `${Math.floor(n / 60)}h ${n % 60}m`;
}
