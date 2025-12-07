import React from 'react';
import { 
  DateLocation, 
  SearchBar, 
  ServiceMenu,
  WeatherWidget,
  VisitedSection,
  TVProgram,
  NewsList,
  FeaturedNews,
  FinanceRates,
  MapWidget,
  Broadcast,
  AdBanner,
  FooterLinks
} from './components';
import { 
  newsData, 
  weatherData, 
  ratesData, 
  tvProgramData, 
  servicesData,
  broadcastData,
  visitedData 
} from './data/mockData';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="app" style={{ maxWidth: '1200px', margin: '0 auto', fontFamily: 'Arial, sans-serif' }}>
      <header>
        <DateLocation 
          location="в Германии" 
          date="31 июля, среда" 
          time="02:32" 
        />
        <ServiceMenu services={servicesData} />
        <SearchBar />
      </header>

      <main style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
        <aside style={{ flex: 1 }}>
          <NewsList news={newsData.slice(0, 3)} />
          <FeaturedNews news={newsData[0]} />
          <AdBanner content="Специальное предложение" />
        </aside>

        <div style={{ flex: 2 }}>
          <NewsList news={newsData} title="Главные новости" />
          <div style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
            <div style={{ flex: 1 }}>
              <WeatherWidget weather={weatherData} />
              <VisitedSection items={visitedData} />
            </div>
            <div style={{ flex: 1 }}>
              <TVProgram programs={tvProgramData} />
              <MapWidget location="Германии" />
            </div>
          </div>
        </div>

        <aside style={{ flex: 1 }}>
          <FinanceRates rates={ratesData} />
          <Broadcast broadcasts={broadcastData} />
          <AdBanner content="Рекомендуемые сервисы" />
        </aside>
      </main>

      <FooterLinks 
        links={[
          { text: 'О компании', url: '#' },
          { text: 'Реклама', url: '#' },
          { text: 'Помощь', url: '#' },
          { text: 'Обратная связь', url: '#' },
        ]}
      />
    </div>
  );
};

export default App;
