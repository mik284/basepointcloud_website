import {
  ArrowRightOutlined,
  CheckOutlined,
  ClusterOutlined,
  ShopOutlined,
} from '@ant-design/icons';
import { history } from '@umijs/max';
import { Button } from 'antd';
import React from 'react';

const TwoWaysToGetStarted: React.FC = () => {
  return (
    <section className="py-16 bg-surfaceAlt/40 border-y border-surfaceAlt">
      <div className="max-w-7xl mx-auto px-6">
        {/* ── Proof strip (replaces unverified logo bar, Flag 1) ────── */}
        <div className="max-w-4xl mx-auto text-center mb-14 bg-white rounded-2xl p-6 sm:p-8 border border-navy/5 shadow-sm">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-mint/25 text-navy font-outfit mb-3">
            Early Field Pilot Verification
          </span>
          <p className="text-xl sm:text-2xl font-bold text-navy font-outfit mb-2">
            &ldquo;24 of 26 River Road shops onboarded in under 12
            minutes.&rdquo;
          </p>
          <p className="text-xs sm:text-sm font-medium text-navy/60 font-outfit">
            Early field pilot, CBD — September 2026
          </p>
        </div>

        {/* ── Section Header ────────────────────────────────────────── */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy font-outfit mb-3">
            Two ways to get started
          </h2>
          <p className="text-navy/70 font-outfit text-base">
            Choose the path that fits your operational scale. Fast self-serve
            setup for single shops, or tailored onboarding for operations.
          </p>
        </div>

        {/* ── Dual Motion Cards ─────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Card 1: Self-Serve Motion */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border-2 border-mint/60 shadow-md flex flex-col justify-between relative overflow-hidden group hover:border-mint transition-all">
            <div className="absolute top-0 right-0 bg-mint text-navy font-bold text-xs uppercase px-4 py-1.5 rounded-bl-2xl font-outfit">
              Fastest Path
            </div>

            <div>
              <div className="w-14 h-14 rounded-2xl bg-mint/20 text-navy flex items-center justify-center text-2xl mb-6">
                <ShopOutlined />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-navy font-outfit mb-3">
                Run your shop
              </h3>
              <p className="text-navy/70 font-outfit text-base mb-6 leading-relaxed">
                For independent duka owners, pharmacies, and single-location
                retailers. Start self-serve in minutes with no upfront setup
                fees.
              </p>

              <ul className="space-y-3 mb-8 text-sm sm:text-base font-outfit text-navy/80">
                <li className="flex items-center gap-2">
                  <CheckOutlined className="text-mint-dark font-bold" />
                  Instant Duka workspace provisioning
                </li>
                <li className="flex items-center gap-2">
                  <CheckOutlined className="text-mint-dark font-bold" />
                  Cash, M-Pesa tracking & digital ledger
                </li>
                <li className="flex items-center gap-2">
                  <CheckOutlined className="text-mint-dark font-bold" />
                  Works offline & on mobile data bundles
                </li>
              </ul>
            </div>

            <Button
              type="primary"
              size="large"
              onClick={() => history.push('/start')}
              className="w-full h-auto py-4 rounded-full font-bold font-outfit text-base bg-navy border-navy hover:bg-navy/90 hover:border-navy/90 transition-all shadow-md flex items-center justify-center gap-2"
            >
              Start free with Duka
              <ArrowRightOutlined className="text-xs" />
            </Button>
          </div>

          {/* Card 2: Assisted Motion */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-navy/10 shadow-sm flex flex-col justify-between relative overflow-hidden group hover:border-navy/30 transition-all">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-surfaceAlt text-electric flex items-center justify-center text-2xl mb-6">
                <ClusterOutlined />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-navy font-outfit mb-3">
                Run your whole operation
              </h3>
              <p className="text-navy/70 font-outfit text-base mb-6 leading-relaxed">
                For multi-outlet retail chains, distributors, and
                higher-complexity enterprises needing assisted rollout and
                custom integration.
              </p>

              <ul className="space-y-3 mb-8 text-sm sm:text-base font-outfit text-navy/80">
                <li className="flex items-center gap-2">
                  <CheckOutlined className="text-electric font-bold" />
                  Centralized multi-location inventory & ERP sync
                </li>
                <li className="flex items-center gap-2">
                  <CheckOutlined className="text-electric font-bold" />
                  Automated eTIMS & tax reconciliation
                </li>
                <li className="flex items-center gap-2">
                  <CheckOutlined className="text-electric font-bold" />
                  Dedicated technical rollout & team onboarding
                </li>
              </ul>
            </div>

            <Button
              size="large"
              onClick={() => history.push('/contact')}
              className="w-full h-auto py-4 rounded-full font-bold font-outfit text-base bg-surfaceAlt border-surfaceAlt text-navy hover:bg-navy hover:text-white transition-all flex items-center justify-center gap-2"
            >
              Book an enterprise demo
              <ArrowRightOutlined className="text-xs" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TwoWaysToGetStarted;
