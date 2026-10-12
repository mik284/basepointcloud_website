import {
  CopyOutlined,
  GiftOutlined,
  LockOutlined,
  SafetyCertificateOutlined,
  WhatsAppOutlined,
} from '@ant-design/icons';
import { Button, Input, message } from 'antd';
import React, { useState } from 'react';

import SEO from '@/components/SEO';

const ReferPage: React.FC = () => {
  const [collabId, setCollabId] = useState('COLLAB-047');
  const [copied, setCopied] = useState(false);

  const referralUrl = `https://basepoint.co.ke/start?ref=${encodeURIComponent(
    collabId.trim() || 'COLLAB-047',
  )}&utm_source=collabs&utm_medium=referral&utm_campaign=duka_referral`;

  const whatsAppMessage = `Habari! I recommend using Base Duka to organize your shop's daily sales, stock, and M-Pesa tracking. You can start free in under 2 minutes here: ${referralUrl}`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(referralUrl);
    setCopied(true);
    message.success('Referral link copied to clipboard!');
    setTimeout(() => setCopied(false), 3000);
  };

  const shareOnWhatsApp = () => {
    const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(
      whatsAppMessage,
    )}`;
    window.open(url, '_blank');
  };

  return (
    <>
      <SEO
        title="Refer a Business & Earn | Base Collabs Referral Engine"
        description="Refer a local business to Base Duka. Help them get started on modern inventory and sales management, and earn rewards upon verified activation."
        canonical="/refer"
      />

      <div className="min-h-screen pt-28 pb-20 bg-surfaceAlt/20">
        <div className="max-w-4xl mx-auto px-6">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-mint/25 text-navy font-bold text-xs uppercase tracking-wider font-outfit mb-4">
              <GiftOutlined className="text-sm" />
              Base Collabs Referral Engine
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold text-navy font-outfit mb-4">
              Refer a business. Help them get started. Earn when they activate.
            </h1>
            <p className="text-navy/70 font-outfit text-base leading-relaxed">
              Convert your trusted local business relationships into
              attributable acquisition. Help retail shops move off messy paper
              ledgers.
            </p>
          </div>

          {/* Interactive Link Generator Card */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-navy/10 shadow-lg mb-12">
            <h2 className="text-xl sm:text-2xl font-bold text-navy font-outfit mb-2">
              Generate Your Attributable Referral Link
            </h2>
            <p className="text-navy/60 font-outfit text-xs sm:text-sm mb-6">
              Enter your assigned Collab ID to generate a tracking link that
              persists across WhatsApp forwards.
            </p>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-navy/60 mb-2 font-outfit">
                  Your Collab Identifier
                </label>
                <Input
                  size="large"
                  value={collabId}
                  onChange={(e) => setCollabId(e.target.value.toUpperCase())}
                  placeholder="e.g. COLLAB-047"
                  className="font-mono text-base rounded-xl font-outfit font-bold text-navy"
                  prefix={
                    <SafetyCertificateOutlined className="text-mint-dark mr-1" />
                  }
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-navy/60 mb-2 font-outfit">
                  Generated Unique Link (With Campaign Attribution)
                </label>
                <div className="flex flex-col sm:flex-row gap-2">
                  <Input
                    readOnly
                    size="large"
                    value={referralUrl}
                    className="font-mono text-xs sm:text-sm bg-surfaceAlt/60 rounded-xl"
                  />
                  <Button
                    type="primary"
                    size="large"
                    onClick={copyToClipboard}
                    className="h-auto py-3 px-6 rounded-xl font-bold font-outfit bg-navy border-navy hover:bg-navy/90 shrink-0 flex items-center justify-center gap-2"
                  >
                    <CopyOutlined />
                    {copied ? 'Copied!' : 'Copy Link'}
                  </Button>
                </div>
              </div>

              {/* 1-Click WhatsApp Share */}
              <div className="pt-3">
                <Button
                  size="large"
                  onClick={shareOnWhatsApp}
                  className="w-full h-auto py-3.5 rounded-xl font-bold font-outfit text-base bg-[#25D366] hover:bg-[#20ba5a] text-white border-0 shadow-sm flex items-center justify-center gap-2"
                >
                  <WhatsAppOutlined className="text-xl" />
                  Share with Merchant on WhatsApp
                </Button>
              </div>
            </div>
          </div>

          {/* Qualified Event Flow */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-navy/5 shadow-sm mb-12">
            <h3 className="text-xl font-bold text-navy font-outfit mb-6 text-center">
              How Referral Rewards Are Qualified
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
              <div className="p-4 rounded-2xl bg-surfaceAlt/40 text-center">
                <div className="w-8 h-8 rounded-full bg-navy text-white flex items-center justify-center mx-auto mb-3 font-bold text-xs font-outfit">
                  1
                </div>
                <h4 className="font-bold text-navy font-outfit text-sm mb-1">
                  Referral Click
                </h4>
                <p className="text-navy/60 text-xs font-outfit">
                  Merchant opens your unique Collab link.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-surfaceAlt/40 text-center">
                <div className="w-8 h-8 rounded-full bg-navy text-white flex items-center justify-center mx-auto mb-3 font-bold text-xs font-outfit">
                  2
                </div>
                <h4 className="font-bold text-navy font-outfit text-sm mb-1">
                  Self-Serve Signup
                </h4>
                <p className="text-navy/60 text-xs font-outfit">
                  Merchant creates their free Duka workspace.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-surfaceAlt/40 text-center">
                <div className="w-8 h-8 rounded-full bg-navy text-white flex items-center justify-center mx-auto mb-3 font-bold text-xs font-outfit">
                  3
                </div>
                <h4 className="font-bold text-navy font-outfit text-sm mb-1">
                  Merchant Activation
                </h4>
                <p className="text-navy/60 text-xs font-outfit">
                  Merchant rings up live sales and tracks stock.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-mint/30 border border-mint text-center">
                <div className="w-8 h-8 rounded-full bg-mint-dark text-white flex items-center justify-center mx-auto mb-3 font-bold text-xs font-outfit">
                  4
                </div>
                <h4 className="font-bold text-navy font-outfit text-sm mb-1">
                  Reward Qualified
                </h4>
                <p className="text-navy/70 text-xs font-outfit">
                  Attribution verified in CRM and credited to Collab.
                </p>
              </div>
            </div>

            <p className="text-center text-xs text-navy/50 font-outfit mt-6">
              *Rewards trigger on verified merchant activation, protecting the
              network from unactivated lead spam.
            </p>
          </div>

          {/* Anti-Abuse & Program Rules (Section 3.2 compliance) */}
          <div className="bg-surfaceAlt/50 rounded-2xl p-6 border border-surfaceAlt text-xs text-navy/70 space-y-2 font-outfit">
            <div className="flex items-center gap-2 font-bold text-navy text-sm mb-1">
              <LockOutlined className="text-navy" />
              Program Guidelines & Quality Controls
            </div>
            <p>
              • Unique phone numbers and business entities are verified on
              signup to prevent duplicate entries.
            </p>
            <p>
              • Self-referrals (referring your own registered businesses) are
              strictly disqualified.
            </p>
            <p>
              • Rewards are credited upon verified product value milestones in
              accordance with Basepoint Finance rules.
            </p>
            <p>
              • To request an official Collab ID or register as a credentialed
              partner, apply at{' '}
              <a href="/collabs" className="text-navy font-bold underline">
                Base Collabs
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReferPage;
