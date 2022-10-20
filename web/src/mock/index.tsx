export interface IDespesas {
  id: string;
  value: number;
  category: string;
  type: string;
  createdAt: string;
  expireAt: string;
  userId: string;
  paid: boolean;

  // Path: src/pages/despesas/index.tsx
}

export const despesas = [
  {
    id: '1',
    value: 1000,
    category: 'Aluguel',
    type: 'Moradia',
    createdAt: '2020-01-01',
    expireAt: '2020-01-01',
    userId: 'Gabriel',
    paid: false,
  },
  {
    id: '2',
    value: 100,
    category: 'Luz',
    type: 'Moradia',
    createdAt: '2020-01-01',
    expireAt: '2020-01-01',
    userId: 'Gabriel',
    paid: true,
  },
  {
    id: '3',
    category: 'Água',
    value: 100,
    createdAt: '2020-01-01',
    type: 'Moradia',
    expireAt: '2020-01-01',
    userId: 'Gabriel',
    paid: true,
  },
  {
    id: '4',
    category: 'Internet',
    value: 100,
    createdAt: '2020-01-01',
    type: 'Moradia',
    expireAt: '2020-01-01',
    userId: 'Gabriel',
    paid: false,
  }

];
