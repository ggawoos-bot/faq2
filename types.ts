
export interface FAQ {
  id: string;
  category: string;
  question: string;
  answer: string;
}

export type FAQCreate = Omit<FAQ, 'id'>;

export enum View {
  USER = 'USER',
  ADMIN = 'ADMIN',
}
