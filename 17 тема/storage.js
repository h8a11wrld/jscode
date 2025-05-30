const STORAGE_KEY = 'warehouseItems';

export const getItems = () => {
  const items = localStorage.getItem(STORAGE_KEY);
  return items ? JSON.parse(items) : [];
};

export const addItem = (item) => {
  const items = getItems();
  items.push(item);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
};

export const removeItem = (index) => {
  const items = getItems();
  items.splice(index, 1);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
};
