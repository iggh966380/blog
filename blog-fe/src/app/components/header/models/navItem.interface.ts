import { Timestamp } from 'next/dist/server/lib/cache-handlers/types';

export interface NavItem {
  router: string;
  created_at: Timestamp;
  id: number;
}
