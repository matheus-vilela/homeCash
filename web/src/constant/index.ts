import {FiBox,FiWifi, FiHome,FiDroplet,FiSun, FiGift,FiCoffee,FiSmile, FiHeart,FiTruck, FiBriefcase, FiMoreHorizontal} from 'react-icons/fi';

export interface ICategories {
  id: string;
  name: string;
  icon: any;
  color: string;
}

export const categories:ICategories[] = [
  {
    id: '0',
    name: 'Todas as categorias',
    icon: FiBox,
    color: '#FF872C',
  },
  {
    id: '1',
    name: 'Aluguel',
    icon: FiHome,
    color: '#87ff8c',
  },
  {
    id: '2',
    name: 'Água',
    icon: FiDroplet,
    color: '#8c8cff',

  },
  {
    id: '2.5',
    name: 'Internet',
    icon: FiWifi,
    color: '#8c8cff',

  },
  {
    id: '2.7',
    name: 'Luz',
    icon: FiSun,
    color: '#ff8c8c',
  },
  {
    id: '3',
    name: 'Combustível',
    icon: FiGift,
    color: '#8cff8c',
    },
  {
    id: '4',
    name: 'Alimentação',
    icon: FiCoffee,
    color: '#8cff8c',
  },
  {
    id: '5',
    name: 'Lazer',
    icon: FiSmile,
    color: '#E83F5B',
  },
  {
    id: '6',
    name: 'Saúde',
    icon: FiHeart,
    color: '#FF872C',
  },
  {
    id: '7',
    name: 'Transporte',
    icon: FiTruck,
    color: '#E83F5B',
  },
  {
    id: '8',
    name: 'Trabalho',
    icon: FiBriefcase,
    color: '#FF872C',
  },
  {
    id: '9',
    name: 'Casa',
    icon: FiHome,
    color: '#E83F5B',
  },
  {
    id: '10',
    name: 'Outros',
    icon: FiMoreHorizontal,
    color: '#FF872C',
  },
];

export interface IListMonth {
  id: string;
  name: string;
  date: string;
}

export const ListMonth: any[] = [
  {
    id: '0',
    name: 'Janeiro-2021',
    date: '01/2021',
  },
  {
    id: '1',
    name: 'Fevereiro-2021',
    date: '02/2021',
  },
  {
    id: '2',
    name: 'Março-2021',
    date: '03/2021',
  },
  {
    id: '3',
    name: 'Abril-2021',
    date: '04/2021',
  },
  {
    id: '4',
    name: 'Maio-2021',
    date: '05/2021',
  },
  {
    id: '5',
    name: 'Junho-2021',
    date: '06/2021',
  },
  {
    id: '6',
    name: 'Julho-2021',
    date: '07/2021',
  },
  {
    id: '7',
    name: 'Agosto-2021',
    date: '08/2021',
  },
  {
    id: '8',
    name: 'Setembro-2021',
    date: '09/2021',
  },
  {
    id: '9',
    name: 'Outubro-2021',
    date: '10/2021',
  },
  {
    id: '10',
    name: 'Novembro-2021',
    date: '11/2021',
  },
  {
    id: '11',
    name: 'Dezembro-2021',

    date: '12/2021',

  },
  {
    id: '12',
    name: 'Janeiro-2022',
    date: '01/2022',
  },
  {
    id: '13',

    name: 'Fevereiro-2022',
    date: '02/2022',
  },
  {
    id: '14',
    name: 'Março-2022',
    date: '03/2022',
  },
  {
    id: '15',
    name: 'Abril-2022',
    date: '04/2022',
  },
  {
    id: '16',
    name: 'Maio-2022',
    date: '05/2022',
  },
  {
    id: '17',
    name: 'Junho-2022',
    date: '06/2022',
  },
  {
    id: '18',
    name: 'Julho-2022',
    date: '07/2022',
  },
  {
    id: '19',
    name: 'Agosto-2022',
    date: '08/2022',
  },
  {
    id: '20',
    name: 'Setembro-2022',
    date: '09/2022',
  },
  {
    id: '21',
    name: 'Outubro-2022',
    date: '10/2022',
  },
  {
    id: '22',
    name: 'Novembro-2022',
    date: '11/2022',
  },
  {
    id: '23',
    name: 'Dezembro-2022',
    date: '12/2022',
  }
]
