import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface ContractorInterface {
  id?: string;
  work_details: string;
  availability?: boolean;
  user_id?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface ContractorGetQueryInterface extends GetQueryInterface {
  id?: string;
  work_details?: string;
  user_id?: string;
}
