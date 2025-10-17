import { Timestamp } from 'next/dist/server/lib/cache-handlers/types';

export interface NavItem {
  path: string;
  created_at: Timestamp;
  id: number;
  name: string;
  parent_id: string;
  sort: number;
  updated_at: Timestamp;
  visible: boolean;
}
