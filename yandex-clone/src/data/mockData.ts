import type { INewsItem, WeatherData, Rate, TVProgramItem, MenuItem, BroadcastItem } from '../types';

export const newsData: INewsItem[] = [
    { id: 1, icon: '📰', title: 'Путин упростил получение автомобильных номеров', link: '#' },
    { id: 2, icon: '🇺🇦', title: 'В команде Зеленского раскрыли план реформ на Украине', link: '#' },
    { id: 3, icon: '✈️', title: '«Турпомощь» прокомментировала гибель десятков россиян в Анталье', link: '#' },
    { id: 4, icon: '⚖️', title: 'Суд закрыл дело Демпартии США против России', link: '#' },
    { id: 5, icon: '🚀', title: 'На Украине призвали создать ракеты для удара по Москве', link: '#' },
  ];  

export const weatherData: WeatherData = {
  currentTemp: 17,
  morningTemp: 17,
  dayTemp: 20,
  description: 'Погода',
};

export const ratesData: Rate[] = [
  { name: 'USD MOEX', value: 63.52, change: 0.09 },
  { name: 'EUR MOEX', value: 70.86, change: 0.14 },
  { name: 'НЕФТЬ', value: 64.90, change: 1.63, changePercent: '%' },
];

export const tvProgramData: TVProgramItem[] = [
  { time: '02:00', channel: 'ТНТ. Best', program: 'ТНТ International' },
  { time: '02:15', channel: 'Джинглики', program: 'Карусель INT' },
  { time: '02:25', channel: 'Наедине со всеми', program: 'Первый' },
];

export const servicesData: MenuItem[] = [
  { id: 1, title: 'Видео', link: '#' },
  { id: 2, title: 'Картинки', link: '#' },
  { id: 3, title: 'Новости', link: '#' },
  { id: 4, title: 'Карты', link: '#' },
  { id: 5, title: 'Маркет', link: '#' },
  { id: 6, title: 'Переводчик', link: '#' },
  { id: 7, title: 'Эфир', link: '#' },
  { id: 8, title: 'ещё', link: '#' },
];

export const broadcastData: BroadcastItem[] = [
  { id: 1, title: 'Управление как искусство', channel: 'Успех' },
  { id: 2, title: 'Ночь. Мир в это время', channel: 'earthTV' },
  { id: 3, title: 'Андрей Возн...', channel: 'Совершенно секретно' },
];

export const visitedData: MenuItem[] = [
  { id: 1, title: 'Недвижимость — о сталинках', link: '#' },
  { id: 2, title: 'Маркет — люстры и светильники', link: '#' },
  { id: 3, title: 'Авто.ру — привод 4x4 до 500 000', link: '#' },
];
