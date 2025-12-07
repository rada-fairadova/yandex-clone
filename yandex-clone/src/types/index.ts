export interface INewsItem {
    id: number;
    icon: string;
    title: string;
    link: string;
    time?: string;
  }
  
  export interface WeatherData {
    currentTemp: number;
    morningTemp: number;
    dayTemp: number;
    description: string;
  }
  
  export interface Rate {
    name: string;
    value: number;
    change: number;
    changePercent?: string;
  }
  
  export interface TVProgramItem {
    time: string;
    channel: string;
    program: string;
  }
  
  export interface MenuItem {
    id: number;
    title: string;
    link: string;
  }
  
  export interface BroadcastItem {
    id: number;
    title: string;
    channel: string;
    description?: string;
  }
