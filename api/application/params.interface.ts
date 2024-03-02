import { Application } from '../types/application';

export interface ApplicationParams extends Omit<Application, 'id'> {}
