import { useQuery } from '@tanstack/react-query';
import { getMotorcycle } from '../services/api';

export const useBike = (slug) =>
  useQuery({
    queryKey: ['bike', slug],
    queryFn: () => getMotorcycle(slug),
    enabled: !!slug
  });
