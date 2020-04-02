export default function getDataInPage<T>(
  data: T[],
  page: number = 1,
  limit: number = 5
): T[] {
  const result = [];
  const offset = (page - 1) * limit;
  for (let i = offset; i < offset + limit; i += 1) {
    if (data[i]) {
      result.push(data[i]);
    }
  }
  return result;
}
