export const convertReadsAmount = (readsAmount) => {
  if (readsAmount < 1000) {
    return `${readsAmount} Read${readsAmount !== 1 ? 's' : ''}`;
  } else if (readsAmount >= 1000 && readsAmount < 1000000) {
    return `${(readsAmount / 1000).toFixed(0)}K Reads`;
  } else {
    return `${(readsAmount / 1000000).toFixed(0)}M Reads`;
  }
};

export const generateId = () =>
  Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString();
