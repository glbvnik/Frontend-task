export function hasEmptyProperty(obj: { [key: string]: any }) {
  for (const key in obj) {
    if (!obj[key]) {
      return true;
    }
  }
  return false;
}
