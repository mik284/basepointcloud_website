import {
  BookOutlined,
  CopyOutlined,
  FileTextOutlined,
  LinkOutlined,
  ShareAltOutlined,
  WhatsAppOutlined,
} from '@ant-design/icons';
import { history } from '@umijs/max';
import { Button, Modal, Tag, message } from 'antd';
import React, { useState } from 'react';

import SEO from '@/components/SEO';

interface Guide {
  id: string;
  category: string;
  title: string;
  summary: string;
  readTime: string;
  hackCard: string[];
  clientScript: string;
  fullContent: React.ReactNode;
}

const GUIDES: Guide[] = [
  {
    id: 'etims-retailers',
    category: 'Money & Tax',
    title: 'eTIMS Compliance for Small Retailers in Kenya, Explained Simply',
    summary:
      'What small duka owners and pharmacies actually need to comply with KRA eTIMS, without buying expensive proprietary hardware.',
    readTime: '4 min read',
    hackCard: [
      'You do NOT need an expensive physical fiscal printer if your POS can transmit eTIMS digital invoices directly.',
      'Small purchases under statutory thresholds do not require full PIN capturing, but buyer receipt generation remains mandatory.',
      'Auto-reconciliation between your daily till reports and eTIMS transmission eliminates end-of-month panic.',
    ],
    clientScript:
      'Habari! You don’t need to spend KES 40,000 on a hardware machine just to stay compliant with KRA. Base Duka generates compliant digital receipts directly from your phone or tablet on every transaction, saving your penalties and stress.',
    fullContent: (
      <div className="space-y-4 font-outfit text-navy/80 text-sm leading-relaxed">
        <p>
          Kenya Revenue Authority’s Electronic Tax Invoice Management System
          (eTIMS) requires businesses to validate and transmit invoice data
          electronically. For small retailers, confusion over hardware
          requirements often results in purchasing unnecessary expensive
          devices.
        </p>
        <h4 className="text-base font-bold text-navy mt-4">
          1. Digital Invoicing vs. Heavy Hardware
        </h4>
        <p>
          Cloud-based POS systems with verified API integration allow shop
          owners to issue compliant receipts directly from smartphones or
          standard thermal receipt printers, drastically lowering startup costs.
        </p>
        <h4 className="text-base font-bold text-navy mt-4">
          2. Reconciling Till Sales with Invoices
        </h4>
        <p>
          The most common audit headache is discrepancies between M-Pesa till
          statements and generated tax invoices. Automated end-of-day register
          closure matches every mobile payment to a customer ticket.
        </p>
      </div>
    ),
  },
  {
    id: 'stop-stock-shrinkage',
    category: 'Run & Stock',
    title: 'How to Stop Stock Shrinkage and Register Leaks in Your Shop',
    summary:
      'Practical shift-handover routines and inventory controls that prevent missing stock in busy retail and wholesale shops.',
    readTime: '5 min read',
    hackCard: [
      'Require mid-day cashier shift handovers with mandatory blind cash and till counts.',
      'Never allow stock adjustments or discounts without owner permission flags.',
      'Monitor top-selling fast-moving items daily rather than doing painful once-a-month stock counts.',
    ],
    clientScript:
      'If you notice stock going missing or cash not matching the till at 8 PM, the problem is usually the shift handover. Base gives your staff clean individual logins so every sale and cash count is pinned to who was on duty.',
    fullContent: (
      <div className="space-y-4 font-outfit text-navy/80 text-sm leading-relaxed">
        <p>
          Stock shrinkage in Nairobi retail shops rarely happens in bulk; it
          leaks through unrecorded sales, loose change rounding, and forgotten
          staff credits.
        </p>
        <h4 className="text-base font-bold text-navy mt-4">
          1. Blind Shift Closes
        </h4>
        <p>
          When a cashier clocks out, they should enter the physical cash counted
          in the drawer before the system reveals what was expected. This
          eliminates manual reconciliations that cover up discrepancies.
        </p>
        <h4 className="text-base font-bold text-navy mt-4">
          2. Real-Time Low Stock Alerts
        </h4>
        <p>
          Automated stock subtraction on every completed sale ensures you know
          exactly what is on the shelf without shutting down the shop for a full
          inventory count.
        </p>
      </div>
    ),
  },
  {
    id: 'second-branch-readiness',
    category: 'Grow & Scale',
    title: 'How Do You Know When Your Duka is Ready for a Second Branch?',
    summary:
      'Four clear operational and financial milestones that prove your shop can expand without running out of working capital.',
    readTime: '6 min read',
    hackCard: [
      'Milestone 1: The owner can step away for 7 consecutive days without sales dropping or ledger mistakes.',
      'Milestone 2: Cash flow covers 90 days of supplier credit across both locations.',
      'Milestone 3: Real-time inventory visibility allows inter-branch stock transfers.',
      'Milestone 4: Unit economics are proven per square meter of shelf space.',
    ],
    clientScript:
      'Opening a second branch doubles your rent and payroll, but only succeeds if you can see stock in both shops from one phone. Before signing a second lease, let’s get your first shop running on one centralized dashboard.',
    fullContent: (
      <div className="space-y-4 font-outfit text-navy/80 text-sm leading-relaxed">
        <p>
          Premature expansion is one of the leading causes of small retail
          failure in Kenya. When an owner tries to physically manage two
          locations without centralized software, stock leaks double and cash
          visibility drops.
        </p>
        <h4 className="text-base font-bold text-navy mt-4">
          1. Decentralized Staff, Centralized Oversight
        </h4>
        <p>
          Before opening shop #2, ensure your managers have standard digital
          operating procedures for inventory intake, price updates, and customer
          credit limits.
        </p>
        <h4 className="text-base font-bold text-navy mt-4">
          2. Inter-Branch Stock Transfers
        </h4>
        <p>
          Avoid buying duplicate inventory from distributors by shifting
          slow-moving items from Branch A to Branch B based on real-time
          neighborhood demand.
        </p>
      </div>
    ),
  },
];

const ResourcesPage: React.FC = () => {
  const [activeGuide, setActiveGuide] = useState<Guide | null>(null);

  const copyScript = (text: string) => {
    navigator.clipboard.writeText(text);
    message.success('Client explanation script copied!');
  };

  const shareGuideWhatsApp = (guide: Guide) => {
    const text = `Read this practical guide from Basepoint Learn: "${guide.title}" — ${window.location.origin}/resources#${guide.id}\n\nKey Takeaway: ${guide.hackCard[0]}`;
    window.open(
      `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`,
      '_blank',
    );
  };

  return (
    <>
      <SEO
        title="Basepoint Learn | Resources, Guides & Trade Insights"
        description="Practical, plain-language business guides, eTIMS compliance explainers, and retail management playbooks for East African businesses."
        canonical="/resources"
      />

      <div className="min-h-screen pt-28 pb-20 bg-surfaceAlt/20">
        <div className="max-w-6xl mx-auto px-6">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-mint/25 text-navy font-bold text-xs uppercase tracking-wider font-outfit mb-4">
              <BookOutlined className="text-sm" />
              Basepoint Learn
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold text-navy font-outfit mb-4">
              Practical guides for operating modern businesses
            </h1>
            <p className="text-navy/70 font-outfit text-base sm:text-lg leading-relaxed mb-6">
              Plain-language operating playbooks, eTIMS explainers, and
              cash-flow guides built specifically for African commerce.
            </p>

            {/* Mintlify Docs Link Strip */}
            <div className="inline-flex items-center gap-2 p-2 px-4 rounded-2xl bg-white border border-navy/10 text-xs font-outfit text-navy shadow-sm">
              <span className="text-navy/60">
                Looking for technical product documentation?
              </span>
              <a
                href="https://basepoint.mintlify.app"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-navy underline flex items-center gap-1"
              >
                Visit Developer & User Docs
                <LinkOutlined className="text-[10px]" />
              </a>
            </div>
          </div>

          {/* Guides Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {GUIDES.map((guide) => (
              <div
                key={guide.id}
                id={guide.id}
                className="bg-white rounded-3xl p-8 border border-navy/10 shadow-sm flex flex-col justify-between hover:shadow-md hover:border-mint transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <Tag
                      color="cyan"
                      className="font-outfit font-semibold uppercase text-[10px] px-2.5 py-0.5 rounded-full border-0"
                    >
                      {guide.category}
                    </Tag>
                    <span className="text-xs text-navy/40 font-outfit">
                      {guide.readTime}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-navy font-outfit mb-3 leading-snug">
                    {guide.title}
                  </h3>

                  <p className="text-navy/70 text-sm font-outfit leading-relaxed mb-6">
                    {guide.summary}
                  </p>

                  {/* 1-Page Hack Card Preview */}
                  <div className="bg-surfaceAlt/50 p-4 rounded-2xl border border-surfaceAlt mb-6">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-navy/50 font-outfit mb-2 flex items-center gap-1.5">
                      <FileTextOutlined />
                      1-Page Hack Card Takeaway
                    </div>
                    <p className="text-xs text-navy/80 font-outfit leading-relaxed">
                      &bull; {guide.hackCard[0]}
                    </p>
                  </div>
                </div>

                <div className="space-y-2 pt-2 border-t border-surfaceAlt">
                  <Button
                    type="primary"
                    onClick={() => setActiveGuide(guide)}
                    className="w-full h-auto py-2.5 rounded-xl font-bold font-outfit text-sm bg-navy border-navy hover:bg-navy/90"
                  >
                    Read Full Guide & Collab Kit
                  </Button>
                  <Button
                    onClick={() => shareGuideWhatsApp(guide)}
                    className="w-full h-auto py-2.5 rounded-xl font-semibold font-outfit text-xs border border-[#25D366]/40 text-[#128C7E] hover:bg-[#25D366]/10 flex items-center justify-center gap-1.5"
                  >
                    <WhatsAppOutlined />
                    Share on WhatsApp
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Honest Case Studies Section (Section 8.6 & Flag 1 compliance) */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-navy/10 text-center max-w-3xl mx-auto shadow-sm">
            <Tag
              color="green"
              className="font-outfit text-xs uppercase px-3 py-1 rounded-full mb-3 border-0"
            >
              Field Telemetry
            </Tag>
            <h3 className="text-2xl font-bold text-navy font-outfit mb-3">
              Customer Stories & Case Studies
            </h3>
            <p className="text-navy/70 font-outfit text-sm sm:text-base leading-relaxed mb-6">
              Our first comprehensive customer stories are coming soon — we are
              currently conducting early field pilots across Nairobi retail
              hubs. Real metrics and shop profiles will be published as verified
              data clears.
            </p>
            <div className="inline-block p-3 px-6 rounded-2xl bg-surfaceAlt font-outfit text-xs font-semibold text-navy/60">
              Pilot stat: 24 of 26 River Road shops onboarded in under 12
              minutes
            </div>
          </div>
        </div>
      </div>

      {/* Guide Detail & Collab Distribution Modal */}
      {activeGuide && (
        <Modal
          open={!!activeGuide}
          onCancel={() => setActiveGuide(null)}
          footer={null}
          width={700}
          className="rounded-3xl overflow-hidden font-outfit"
        >
          <div className="pt-4 pb-2">
            <Tag
              color="cyan"
              className="font-outfit font-semibold uppercase text-xs mb-3"
            >
              {activeGuide.category}
            </Tag>
            <h2 className="text-2xl font-bold text-navy font-outfit mb-4">
              {activeGuide.title}
            </h2>

            {/* Full text */}
            <div className="border-y border-surfaceAlt py-4 my-4">
              {activeGuide.fullContent}
            </div>

            {/* Collab Distribution Kit */}
            <div className="bg-mint/15 rounded-2xl p-5 border border-mint/40 mb-6">
              <h4 className="font-bold text-navy text-sm font-outfit mb-2 flex items-center gap-2">
                <ShareAltOutlined className="text-mint-dark" />
                Collab 30-Second Client Pitch
              </h4>
              <p className="text-xs text-navy/80 font-outfit leading-relaxed mb-3 italic">
                &ldquo;{activeGuide.clientScript}&rdquo;
              </p>
              <Button
                size="small"
                onClick={() => copyScript(activeGuide.clientScript)}
                className="text-xs font-bold font-outfit rounded-lg flex items-center gap-1"
              >
                <CopyOutlined />
                Copy Pitch
              </Button>
            </div>

            {/* Bottom Actions */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button
                type="primary"
                size="large"
                onClick={() => {
                  setActiveGuide(null);
                  history.push('/start');
                }}
                className="flex-1 py-3 h-auto rounded-xl font-bold font-outfit bg-navy border-navy hover:bg-navy/90"
              >
                Start free with Duka
              </Button>
              <Button
                size="large"
                onClick={() => shareGuideWhatsApp(activeGuide)}
                className="py-3 h-auto rounded-xl font-bold font-outfit text-white bg-[#25D366] hover:bg-[#20ba5a] border-0 flex items-center justify-center gap-2"
              >
                <WhatsAppOutlined className="text-lg" />
                Share Guide
              </Button>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default ResourcesPage;
