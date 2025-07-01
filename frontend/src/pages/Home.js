import React from 'react';
import HeroSection from '../components/HeroSection';
import IntroSection from '../components/IntroSection';
import SuggestionBanner from '../components/SuggestionBanner';

function Home() {
  return (
    <div className="flex flex-col items-center text-center">
      <HeroSection />
      <IntroSection />
      <SuggestionBanner />
    </div>
  );
}

export default Home;
