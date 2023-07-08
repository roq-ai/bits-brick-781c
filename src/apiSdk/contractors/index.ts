import axios from 'axios';
import queryString from 'query-string';
import { ContractorInterface, ContractorGetQueryInterface } from 'interfaces/contractor';
import { GetQueryInterface } from '../../interfaces';

export const getContractors = async (query?: ContractorGetQueryInterface) => {
  const response = await axios.get(`/api/contractors${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const createContractor = async (contractor: ContractorInterface) => {
  const response = await axios.post('/api/contractors', contractor);
  return response.data;
};

export const updateContractorById = async (id: string, contractor: ContractorInterface) => {
  const response = await axios.put(`/api/contractors/${id}`, contractor);
  return response.data;
};

export const getContractorById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/contractors/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteContractorById = async (id: string) => {
  const response = await axios.delete(`/api/contractors/${id}`);
  return response.data;
};
