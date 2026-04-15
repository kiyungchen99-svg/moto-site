import { useQuery } from '@tanstack/react-query';
import { getAllMotorcycles } from '../services/api';

export const useMotorcycles = () =>
  useQuery({
    queryKey: ['motorcycles'],
    queryFn: getAllMotorcycles
  });
