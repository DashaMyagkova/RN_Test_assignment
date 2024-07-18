import { generateId } from './string';

export const groupDataByChunks = (data, chunkSize) => {
  const chunks = [];

  for (let i = 0; i < data.length; i += chunkSize) {
    const chunk = data.slice(i, i + chunkSize);
    chunks.push({ chunk, id: generateId() });
  }

  return chunks;
};
