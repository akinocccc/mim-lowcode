import http from '@/utils/http';

export const register = async (params: User) => {
  return await http.post('/register', params);
};

export const login = async (params: User) => {
  return await http.post('/login', params);
};
