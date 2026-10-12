import {
  ArrowRightOutlined,
  BookOutlined,
  CheckCircleFilled,
  MessageOutlined,
  SafetyCertificateOutlined,
} from '@ant-design/icons';
import { history } from '@umijs/max';
import { Button, Form, Input, message, Select } from 'antd';
import React, { useState } from 'react';

import SEO from '@/components/SEO';

const { Option } = Select;

const CollabsPage: React.FC = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [applied, setApplied] = useState(false);

  const onFinish = (values: any) => {
    setLoading(true);
    // CRM data contract: collab_application_started -> collab_applied
    const payload = {
      ...values,
      acquisition_motion: 'partner',
      acquisition_channel: 'collabs',
      applied_at: new Date().toISOString(),
    };
    console.log('[Collabs Network Application]:', payload);
    setTimeout(() => {
      setLoading(false);
      setApplied(true);
      message.success(
        'Application received! Our community lead will reach out via WhatsApp.',
      );
    }, 700);
  };

  const scrollToApply = () => {
    const el = document.getElementById('apply-section');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <SEO
        title="Base Collabs | People Who Help Businesses Achieve More™"
        description="Base Collabs brings independent business experts, advisors, and resellers into one coordinated network — sharing knowledge, opening doors, and earning through attributable referrals."
        canonical="/collabs"
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-white">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-30 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[45%] h-[45%] bg-mint/40 blur-[130px] rounded-full animate-float" />
          <div className="absolute bottom-[10%] right-[-5%] w-[40%] h-[40%] bg-electric/15 blur-[120px] rounded-full animate-float-delayed" />
        </div>

        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full bg-mint/25 border border-mint/40">
            <span className="w-2 h-2 rounded-full bg-mint-dark" />
            <span className="text-xs font-bold uppercase tracking-wider text-navy font-outfit">
              BASE COLLABS NETWORK
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold leading-tight tracking-tight mb-8 text-navy font-outfit">
            People who help businesses{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-navy via-electric to-mint-dark">
              Achieve More™
            </span>
          </h1>

          <p className="max-w-3xl mx-auto text-lg sm:text-xl text-navy/75 font-outfit leading-relaxed mb-10">
            Base Collabs brings independent business experts, advisors, and
            resellers into one coordinated network — sharing practical trade
            knowledge, opening doors, helping local shops adopt modern tools,
            and creating attributable earning opportunities for one another.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button
              type="primary"
              size="large"
              onClick={scrollToApply}
              className="px-8 py-4 h-auto rounded-full font-bold text-base font-outfit bg-navy border-navy hover:bg-navy/90 hover:border-navy/90 transition-all shadow-md flex items-center gap-2"
            >
              Become a Collab
              <ArrowRightOutlined className="text-xs" />
            </Button>
            <Button
              size="large"
              onClick={() => history.push('/refer')}
              className="px-8 py-4 h-auto rounded-full font-bold text-base font-outfit bg-white border border-navy/20 text-navy hover:border-navy transition-all"
            >
              Refer a Business
            </Button>
          </div>
        </div>
      </section>

      {/* Network Pillars */}
      <section className="py-20 bg-surfaceAlt/40 border-y border-surfaceAlt">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy font-outfit mb-3">
              How Base Collabs works
            </h2>
            <p className="text-navy/70 font-outfit text-base">
              The coordination lives on WhatsApp where trade happens. The
              attribution lives on Basepoint web infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-8 border border-navy/5 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-mint/20 text-navy flex items-center justify-center text-xl mb-6 font-outfit">
                <MessageOutlined />
              </div>
              <h3 className="text-xl font-bold text-navy font-outfit mb-3">
                WhatsApp Operating Layer
              </h3>
              <p className="text-navy/70 font-outfit text-sm leading-relaxed">
                Connect daily with 100+ vetted accountants, retail consultants,
                and tech advisors. Share real market insights, trade
                opportunities, and field solutions.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-navy/5 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-surfaceAlt text-electric flex items-center justify-center text-xl mb-6 font-outfit">
                <SafetyCertificateOutlined />
              </div>
              <h3 className="text-xl font-bold text-navy font-outfit mb-3">
                Unique Referral Attribution
              </h3>
              <p className="text-navy/70 font-outfit text-sm leading-relaxed">
                Every Collab receives a dedicated{' '}
                <code className="text-navy font-mono text-xs bg-surfaceAlt px-1.5 py-0.5 rounded">
                  collab_id
                </code>{' '}
                and referral links that survive WhatsApp forwards and track
                right through merchant activation.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-navy/5 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-orange/10 text-orange flex items-center justify-center text-xl mb-6 font-outfit">
                <BookOutlined />
              </div>
              <h3 className="text-xl font-bold text-navy font-outfit mb-3">
                Distribution Hack Cards
              </h3>
              <p className="text-navy/70 font-outfit text-sm leading-relaxed">
                Access client-ready 1-page guides, practical eTIMS checklists,
                and 30-second scripts to educate merchants and position yourself
                as a trusted advisor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Network Standards Callout */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-navy text-white rounded-3xl p-10 sm:p-14 relative overflow-hidden shadow-xl">
            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl font-bold font-outfit mb-4 text-white">
                &ldquo;Setting a higher standard so every agent and every
                business can Achieve More 💚™&rdquo;
              </h3>
              <p className="text-white/75 font-outfit text-sm sm:text-base max-w-xl mx-auto">
                Base Collabs is not a spam affiliate scheme. It is a
                credentialed community of professionals committed to operating
                integrity, local business growth, and measurable customer value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Application Intake Section */}
      <section
        id="apply-section"
        className="py-20 bg-surfaceAlt/30 border-t border-surfaceAlt"
      >
        <div className="max-w-2xl mx-auto px-6">
          <div className="bg-white rounded-[2.5rem] p-8 sm:p-12 border border-navy/10 shadow-lg">
            <div className="text-center mb-8">
              <div className="inline-block px-3 py-1 mb-3 rounded-full bg-mint/25 text-navy font-bold text-xs uppercase tracking-wider font-outfit">
                Vetted Membership
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-navy font-outfit mb-2">
                Apply to Become a Base Collab
              </h2>
              <p className="text-navy/60 font-outfit text-sm">
                Applications are reviewed within 48 hours. Approved members
                receive community access and unique referral credentials.
              </p>
            </div>

            {applied ? (
              <div className="text-center py-8 animate-fade-in">
                <CheckCircleFilled className="text-4xl text-mint-dark mb-4" />
                <h3 className="text-2xl font-bold text-navy font-outfit mb-2">
                  Application Submitted
                </h3>
                <p className="text-navy/70 font-outfit text-sm max-w-md mx-auto mb-6">
                  Thank you! Our crew lead will review your background and
                  message your WhatsApp number with onboarding details.
                </p>
                <Button
                  onClick={() => setApplied(false)}
                  className="font-outfit text-sm"
                >
                  Submit another application
                </Button>
              </div>
            ) : (
              <Form
                form={form}
                layout="vertical"
                onFinish={onFinish}
                className="space-y-4"
              >
                <Form.Item
                  label={
                    <span className="font-semibold text-navy font-outfit">
                      Your Full Name
                    </span>
                  }
                  name="full_name"
                  rules={[
                    { required: true, message: 'Please enter your name' },
                  ]}
                >
                  <Input
                    placeholder="e.g. David Mwangi"
                    size="large"
                    className="rounded-xl font-outfit"
                  />
                </Form.Item>

                <Form.Item
                  label={
                    <span className="font-semibold text-navy font-outfit">
                      WhatsApp Phone Number
                    </span>
                  }
                  name="phone"
                  rules={[
                    {
                      required: true,
                      message: 'Please enter your WhatsApp contact',
                    },
                  ]}
                  extra={
                    <span className="text-[11px] text-navy/50">
                      Used for official Base Collabs community coordination
                    </span>
                  }
                >
                  <Input
                    placeholder="07XX XXX XXX"
                    size="large"
                    className="rounded-xl font-outfit"
                  />
                </Form.Item>

                <Form.Item
                  label={
                    <span className="font-semibold text-navy font-outfit">
                      Email Address
                    </span>
                  }
                  name="email"
                  rules={[
                    {
                      required: true,
                      type: 'email',
                      message: 'Please enter your email',
                    },
                  ]}
                >
                  <Input
                    placeholder="david@consulting.co.ke"
                    size="large"
                    className="rounded-xl font-outfit"
                  />
                </Form.Item>

                <Form.Item
                  label={
                    <span className="font-semibold text-navy font-outfit">
                      Operating Zone / Territory
                    </span>
                  }
                  name="zone"
                  rules={[
                    {
                      required: true,
                      message: 'Please select your primary territory',
                    },
                  ]}
                >
                  <Select
                    size="large"
                    placeholder="Select your primary market"
                    className="font-outfit"
                  >
                    <Option value="nairobi_cbd">
                      Nairobi — CBD & River Road
                    </Option>
                    <Option value="nairobi_westlands">
                      Nairobi — Westlands & Kilimani
                    </Option>
                    <Option value="nairobi_eastleigh">
                      Nairobi — Eastleigh & Gikomba
                    </Option>
                    <Option value="nairobi_industrial">
                      Nairobi — Industrial Area
                    </Option>
                    <Option value="mombasa">Mombasa & Coast</Option>
                    <Option value="kisumu">Kisumu & Western</Option>
                    <Option value="nakuru">Nakuru & Rift Valley</Option>
                    <Option value="other">Other East Africa Territory</Option>
                  </Select>
                </Form.Item>

                <Form.Item
                  label={
                    <span className="font-semibold text-navy font-outfit">
                      Collab Role / Specialty
                    </span>
                  }
                  name="category"
                  rules={[
                    {
                      required: true,
                      message: 'Please select your role category',
                    },
                  ]}
                >
                  <Select
                    size="large"
                    placeholder="Select role category"
                    className="font-outfit"
                  >
                    <Option value="reseller">
                      Authorized Reseller / Agent
                    </Option>
                    <Option value="advisor">
                      Business Advisor / Accountant
                    </Option>
                    <Option value="champion">Technical / Setup Champion</Option>
                    <Option value="industry_expert">
                      Hospitality / Retail Specialist
                    </Option>
                  </Select>
                </Form.Item>

                <div className="pt-3">
                  <Button
                    type="primary"
                    htmlType="submit"
                    loading={loading}
                    size="large"
                    className="w-full h-auto py-4 rounded-full font-bold font-outfit text-base bg-navy border-navy hover:bg-navy/90 hover:border-navy/90 shadow-md"
                  >
                    Submit Application
                  </Button>
                </div>
              </Form>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default CollabsPage;
