export type ForecastDay = {
  label: string;
  date: string;
  min: number;
  max: number;
};

export type City = {
  id: string;
  name: string;
  current: number;
  condition: string;
  humidity: number;
  min: number;
  max: number;
  todayLabel: string;
  todayDate: string;
  forecast: ForecastDay[];
};

export const cities: City[] = [
  {
    id: 'florianopolis',
    name: 'Florianopolis - SC',
    current: 16,
    condition: 'Sol entre nuvens',
    humidity: 93,
    min: 12,
    max: 22,
    todayLabel: 'Hoje',
    todayDate: '(01/12)',
    forecast: [
      { label: 'Amanha', date: '(02/12)', min: 14, max: 23 },
      { label: 'Quarta-feira', date: '(03/12)', min: 15, max: 24 },
      { label: 'Quinta-feira', date: '(04/12)', min: 13, max: 21 }
    ]
  },
  {
    id: 'curitiba',
    name: 'Curitiba - PR',
    current: 20,
    condition: 'Nublado',
    humidity: 85,
    min: 16,
    max: 26,
    todayLabel: 'Hoje',
    todayDate: '(01/12)',
    forecast: [
      { label: 'Amanha', date: '(02/12)', min: 17, max: 25 },
      { label: 'Quarta-feira', date: '(03/12)', min: 15, max: 23 },
      { label: 'Quinta-feira', date: '(04/12)', min: 18, max: 27 }
    ]
  },
  {
    id: 'porto-alegre',
    name: 'Porto Alegre - RS',
    current: 29,
    condition: 'Sol forte',
    humidity: 72,
    min: 24,
    max: 31,
    todayLabel: 'Hoje',
    todayDate: '(01/12)',
    forecast: [
      { label: 'Amanha', date: '(02/12)', min: 23, max: 30 },
      { label: 'Quarta-feira', date: '(03/12)', min: 22, max: 29 },
      { label: 'Quinta-feira', date: '(04/12)', min: 24, max: 32 }
    ]
  },
  {
    id: 'sao-paulo',
    name: 'São Paulo - SP',
    current: 28,
    condition: 'Parcialmente nublado',
    humidity: 60,
    min: 21,
    max: 30,
    todayLabel: 'Hoje',
    todayDate: '(01/12)',
    forecast: [
      { label: 'Amanha', date: '(02/12)', min: 20, max: 29 },
      { label: 'Quarta-feira', date: '(03/12)', min: 19, max: 28 },
      { label: 'Quinta-feira', date: '(04/12)', min: 21, max: 31 }
    ]
  },
  {
    id: 'rio-de-janeiro',
    name: 'Rio de Janeiro - RJ',
    current: 36,
    condition: 'Sol forte',
    humidity: 58,
    min: 28,
    max: 37,
    todayLabel: 'Hoje',
    todayDate: '(01/12)',
    forecast: [
      { label: 'Amanha', date: '(02/12)', min: 29, max: 36 },
      { label: 'Quarta-feira', date: '(03/12)', min: 27, max: 35 },
      { label: 'Quinta-feira', date: '(04/12)', min: 28, max: 37 }
    ]
  }
];
