import React from 'react';
import HeroSection from '../components/HeroSection';
import ProductivityStats from '../components/ProductivityStats';
import ReliableAppSection from '../components/ReliableAppSection';
import DownloadSection from '../components/DownloadSection';
import FooterSection from '../components/FooterSection';

const HomePage = () => (
  <>
    <HeroSection />
    <ProductivityStats />
    <ReliableAppSection />
    <DownloadSection />
    <FooterSection />
  </>
);

export default HomePage; 