/* eslint-disable no-param-reassign */
import { generateId } from './string';

export const groupDataByChunks = (data, chunkSize) => {
  const chunks = [];
  for (let i = 0; i < data.length; i += chunkSize) {
    const chunk = data.slice(i, i + chunkSize);
    chunk.forEach((item, index) => {
      item.order = i + index + 1;
    });
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
