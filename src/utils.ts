export const toUrlEncoded = (obj: any): string => {
  const parts: string[] = [];
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const value = obj[key];
      parts.push(`${encodeURIComponent(key)}=${encodeURIComponent(value)}`);
    }
  }
  return parts.join("&");
};


export const generateRandomColor = () => {
  const color = '#' + Math.floor(Math.random() * 16777215).toString(16);
  return color;
}
