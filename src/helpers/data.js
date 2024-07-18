import { generateId } from './string';

export const groupDataByChunks = (data, chunkSize) => {
  const sortedData = data.sort((a, b) => a.order - b.order);
  const chunks = [];

  for (let i = 0; i < sortedData.length; i += chunkSize) {
    const chunk = sortedData.slice(i, i + chunkSize);
    chunks.push({ chunk, id: generateId() });
  }

  return chunks;
};

export const findItemById = (data, id) =>
  data
    .filter(
      (category) => category.type === 'books' || category.type === 'topSeries'
    )
    .flatMap((category) => category.items)
    .find((item) => item.id === id) || null;
