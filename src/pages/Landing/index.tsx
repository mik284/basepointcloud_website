import React from 'react';

import SEO from '@/components/SEO';
import Features from '@/pages/Landing/components/Features';
import Hero from '@/pages/Landing/components/Hero';
import Products from '@/pages/Landing/components/Products';
import SocialProof from '@/pages/Landing/components/SocialProof';
import TwoWaysToGetStarted from '@/pages/Landing/components/TwoWaysToGetStarted';
import UseCases from '@/pages/Landing/components/UseCases';

import './index.css';

const LandingPage: React.FC = () => {
  return (
    <>
      <SEO
        title="BasepointCloud — The Operating System for African Commerce"
        description="Modular operating system for African trade. Manage sales, inventory, accounting, mobile-money liquidity, and payments across your business ecosystem."
        canonical="/"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'BasepointCloud',
          url: 'https://basepoint.co.ke',
          potentialAction: {
            '@type': 'SearchAction',
            target: 'https://basepoint.co.ke/contact?q={search_term_string}',
            'query-input': 'required name=search_term_string',
          },
        }}
      />

      {/* 1. Hero — headline, dual CTAs, animated dashboard mockup */}
      <Hero />

      {/* 2. Proof strip + Two ways to get started band (Section 8.1, Flag 1 & 5) */}
      <TwoWaysToGetStarted />

      {/* 4. Product cards (BasePesa, Duka1, Bandu, Duka1, Loyalty) */}
      <Products />

      {/* 5. Enterprise features (dark navy section) */}
      <Features />

      {/* 6. Use-case audience segments */}
      <UseCases />

      {/* 2.3 Value Chain Block ("Trust Engine") */}
      {/* <TrustEngine /> */}
      {/* 7. Stats + customer testimonials */}
      <SocialProof />
    </>
  );
};

export default LandingPage;
