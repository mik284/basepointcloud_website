import {
  ArrowRightOutlined,
  CheckCircleFilled,
  ClusterOutlined,
  RocketOutlined,
  ShopOutlined,
  TeamOutlined,
} from '@ant-design/icons';
import { history } from '@umijs/max';
import { Button } from 'antd';
import React from 'react';

const PricingTiers: React.FC = () => {
  return (
    <section className="py-16 bg-white" id="tiers">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1.5 mb-4 rounded-full bg-navy/5 border border-navy/10">
            <span className="text-xs font-bold uppercase tracking-widest text-navy font-outfit">
              Dual-Path Acquisition Pricing
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-navy font-outfit mb-4">
            Pick the right path for your business
          </h2>
          <p className="text-navy/70 font-outfit text-base sm:text-lg">
            Start free immediately on your own device, or work with our
            enterprise team for multi-branch rollouts.
          </p>
        </div>

        {/* ── Dual Path Cards ───────────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          {/* Path A: Core Self-Serve (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-[2.5rem] p-8 sm:p-12 border-2 border-mint shadow-xl relative flex flex-col justify-between">
            <div className="absolute -top-4 left-8 sm:left-12 px-4 py-1 rounded-full bg-mint text-navy text-xs font-black uppercase tracking-wider font-outfit shadow-sm">
              Path A • Self-Serve Entry
            </div>

            <div>
              <div className="flex items-center justify-between gap-4 mb-6">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-mint/20 text-navy flex items-center justify-center text-xl mb-3">
                    <ShopOutlined />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-navy font-outfit">
                    Start with Base Duka
                  </h3>
                  <p className="text-navy/60 font-outfit text-sm">
                    Core Duka + Pesa bundled entry point for single-location
                    shops.
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-xs uppercase tracking-wider text-navy/50 font-bold font-outfit">
                    Starting At
                  </div>
                  <div className="text-3xl sm:text-4xl font-black text-navy font-outfit">
                    Free
                  </div>
                  <div className="text-xs text-navy/60 font-outfit">
                    Self-serve signup
                  </div>
                </div>
              </div>

              <div className="border-t border-surfaceAlt pt-6 mb-8">
                <h4 className="text-xs font-bold uppercase tracking-wider text-navy/50 mb-4 font-outfit">
                  What is included in this bundle
                </h4>
                <ul className="space-y-4 font-outfit text-sm sm:text-base text-navy/85">
                  <li className="flex items-start gap-3">
                    <CheckCircleFilled className="text-mint-dark text-lg mt-0.5 shrink-0" />
                    <div>
                      <span className="font-bold text-navy">
                        Single-Shop POS & Inventory:
                      </span>{' '}
                      Record daily sales, manage catalog, and monitor stock
                      levels in real time.{' '}
                      <span className="font-semibold text-mint-dark">
                        Eliminates manual ledger errors.
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircleFilled className="text-mint-dark text-lg mt-0.5 shrink-0" />
                    <div>
                      <span className="font-bold text-navy">
                        Integrated M-Pesa & Cash Tracking:
                      </span>{' '}
                      Auto-reconcile till payments directly with shift
                      registers.{' '}
                      <span className="font-semibold text-mint-dark">
                        Zero unrecorded cash discrepancies.
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircleFilled className="text-mint-dark text-lg mt-0.5 shrink-0" />
                    <div>
                      <span className="font-bold text-navy">
                        Digital Receipts & SMS/WhatsApp:
                      </span>{' '}
                      Send branded receipts directly to client phones upon sale.{' '}
                      <span className="font-semibold text-mint-dark">
                        Builds recurring buyer trust.
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircleFilled className="text-mint-dark text-lg mt-0.5 shrink-0" />
                    <div>
                      <span className="font-bold text-navy">
                        Offline-First Mobile Capability:
                      </span>{' '}
                      Keep ringing orders even during network bundle dropouts.{' '}
                      <span className="font-semibold text-mint-dark">
                        Continuous selling uptime.
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-4 border-t border-surfaceAlt">
              <Button
                type="primary"
                size="large"
                onClick={() => history.push('/start')}
                className="w-full h-auto py-4 rounded-full font-bold font-outfit text-base bg-navy border-navy hover:bg-navy/90 hover:border-navy/90 shadow-md flex items-center justify-center gap-2"
              >
                Start free with Duka
                <ArrowRightOutlined className="text-xs" />
              </Button>
              <p className="text-xs text-center text-navy/50 font-outfit mt-3">
                No credit card required • Provision your shop in under 2 minutes
              </p>
            </div>
          </div>

          {/* Path B: Multi-Location Enterprise Handoff (5 cols) */}
          <div className="lg:col-span-5 bg-navy text-white rounded-[2.5rem] p-8 sm:p-10 shadow-xl relative flex flex-col justify-between">
            <div className="absolute -top-4 left-8 sm:left-10 px-4 py-1 rounded-full bg-white/20 text-white text-xs font-bold uppercase tracking-wider font-outfit backdrop-blur-md">
              Path B • Multi-Location Operations
            </div>

            <div>
              <div className="w-12 h-12 rounded-2xl bg-white/10 text-mint flex items-center justify-center text-xl mb-4">
                <ClusterOutlined />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white font-outfit mb-2">
                Running more than one location?
              </h3>
              <p className="text-white/70 font-outfit text-sm mb-6 leading-relaxed">
                Dedicated architecture and assisted rollout for retail chains,
                distributors, and high-complexity SME operations.
              </p>

              <div className="border-t border-white/10 pt-6 mb-8">
                <h4 className="text-xs font-bold uppercase tracking-wider text-white/50 mb-4 font-outfit">
                  Enterprise Capabilities
                </h4>
                <ul className="space-y-3.5 font-outfit text-sm text-white/80">
                  <li className="flex items-start gap-2.5">
                    <CheckCircleFilled className="text-mint text-base mt-0.5 shrink-0" />
                    <span>
                      Multi-branch inventory sync & warehouse transfers
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircleFilled className="text-mint text-base mt-0.5 shrink-0" />
                    <span>Automated eTIMS compliance & tax reconciliation</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircleFilled className="text-mint text-base mt-0.5 shrink-0" />
                    <span>
                      Custom ERP, accounting, and REST API integrations
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircleFilled className="text-mint text-base mt-0.5 shrink-0" />
                    <span>Dedicated account lead & on-site staff training</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10">
              <Button
                size="large"
                onClick={() => history.push('/contact')}
                className="w-full h-auto py-4 rounded-full font-bold font-outfit text-base bg-mint text-navy border-mint hover:bg-white hover:border-white transition-all flex items-center justify-center gap-2"
              >
                Talk to our enterprise team
                <ArrowRightOutlined className="text-xs" />
              </Button>
              <p className="text-xs text-center text-white/50 font-outfit mt-3">
                Custom quotes & pilot deployment models tailored to your scale
              </p>
            </div>
          </div>
        </div>

        {/* ── Module Add-on Row (Mteja, Bandu) ───────────────────────── */}
        <div className="bg-surfaceAlt/40 rounded-3xl p-8 border border-surfaceAlt">
          <div className="mb-6">
            <h3 className="text-xl font-bold text-navy font-outfit mb-1">
              Add-on Modules
            </h3>
            <p className="text-navy/60 font-outfit text-sm">
              Activate additional capabilities as your operations expand.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Base Mteja */}
            <div className="bg-white p-6 rounded-2xl border border-navy/5 shadow-sm flex items-start justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center text-lg shrink-0">
                  <TeamOutlined />
                </div>
                <div>
                  <h4 className="font-bold text-navy font-outfit text-base">
                    Base Mteja
                  </h4>
                  <p className="text-navy/70 text-xs sm:text-sm font-outfit mt-1 leading-relaxed">
                    Customer loyalty, buyer history, automated SMS promotions,
                    and repeat business analytics.
                  </p>
                </div>
              </div>
              <Button
                onClick={() => history.push('/base-mteja')}
                className="font-outfit text-xs font-semibold rounded-full shrink-0"
              >
                Learn more
              </Button>
            </div>

            {/* Base Bandu */}
            <div className="bg-white p-6 rounded-2xl border border-navy/5 shadow-sm flex items-start justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-orange/10 text-orange flex items-center justify-center text-lg shrink-0">
                  <RocketOutlined />
                </div>
                <div>
                  <h4 className="font-bold text-navy font-outfit text-base">
                    Base Bandu
                  </h4>
                  <p className="text-navy/70 text-xs sm:text-sm font-outfit mt-1 leading-relaxed">
                    Logistics coordination, delivery dispatching, rider
                    tracking, and parcel fulfillment.
                  </p>
                </div>
              </div>
              <Button
                onClick={() => history.push('/base-bandu')}
                className="font-outfit text-xs font-semibold rounded-full shrink-0"
              >
                Learn more
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingTiers;
