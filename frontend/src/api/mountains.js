import client from './client';

export const getMountains = async () => {
  const response = await client.get('/mountains');
  return response.data.data;
};

export const getMountainById = async (id) => {
  const response = await client.get(`/mountains/${id}`);
  return response.data.data;
};

export const createMountain = async (data) => {
  const response = await client.post('/mountains', data);
  return response.data.data;
};

export const updateMountain = async (id, data) => {
  const response = await client.put(`/mountains/${id}`, data);
  return response.data.data;
};

export const deleteMountain = async (id) => {
  await client.delete(`/mountains/${id}`);
};