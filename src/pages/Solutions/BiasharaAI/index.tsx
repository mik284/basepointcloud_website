import {
  ArrowDownOutlined,
  CheckCircleFilled,
  CompassOutlined,
  ExperimentOutlined,
  NodeIndexOutlined,
  RiseOutlined,
  SyncOutlined,
} from '@ant-design/icons';
import { Button, Checkbox, Form, Input, message, Select } from 'antd';
import React, { useState } from 'react';

import SEO from '@/components/SEO';

const { Option } = Select;

const capabilities = [
  {
    icon: <CompassOutlined className="text-2xl text-mint-dark" />,
    title: 'Sensing markets',
    description:
      'Continuously identifying emerging opportunities as market conditions shift.',
  },
  {
    icon: <ExperimentOutlined className="text-2xl text-electric" />,
    title: 'Validating commercial hypotheses',
    description:
      'Turning assumptions about what will work into tested, evidence-backed decisions.',
  },
  {
    icon: <NodeIndexOutlined className="text-2xl text-navy" />,
    title: 'Optimising supply-chain decisions',
    description:
      'Improving how goods, cash, and information move through the chain.',
  },
  {
    icon: <RiseOutlined className="text-2xl text-orange" />,
    title: 'Coordinating execution',
    description:
      'Aligning the people and systems that need to act once a decision is made.',
  },
  {
    icon: <SyncOutlined className="text-2xl text-cyan-600" />,
    title: 'Learning from outcomes',
    description:
      'Feeding what actually happened back into better future decisions.',
  },
];

const strategicPriorities = [
  'Validate the Business Augmentation Engine through measurable customer outcomes.',
  'Build a reusable intelligence infrastructure that compounds across industries.',
  'Embed Basepoint into recurring commercial and supply-chain workflows.',
  'Establish strategic partnerships that strengthen platform intelligence and distribution.',
  'Position Basepoint as a thought leader in adaptive business systems through research, product innovation, and market insights.',
];

const BiasharaAIPage: React.FC = () => {
  const [form] = Form.useForm();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const scrollToWaitlist = () => {
    const el = document.getElementById('waitlist-form');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  const onFinish = (values: any) => {
    setLoading(true);
    // In accordance with CTO spec, capture with attribution metadata
    const submissionPayload = {
      ...values,
      acquisition_motion: 'waitlist',
      source: 'biashara_ai_waitlist',
      submitted_at: new Date().toISOString(),
    };
    console.log('Biashara AI waitlist lead captured:', submissionPayload);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      message.success('Thank you for joining the waitlist!');
    }, 600);
  };

  return (
    <>
      <SEO
        title="Biashara AI | Commercial Intelligence & Business Augmentation Engine"
        description="The business augmentation engine for commercial decision-making. Biashara AI augments commercial decisions by sensing markets, validating hypotheses, and coordinating execution."
        keywords="Biashara AI, Commercial Intelligence, Business Augmentation, Market Sensing, Supply Chain Optimization, Basepoint"
        canonical="/solutions/biashara-ai"
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-white">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-30 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[45%] h-[45%] bg-mint/30 blur-[130px] rounded-full animate-float" />
          <div className="absolute bottom-[10%] right-[-5%] w-[40%] h-[40%] bg-electric/10 blur-[120px] rounded-full animate-float-delayed" />
        </div>

        <div className="max-w-5xl mx-auto px-6 text-center">
          {/* Kicker */}
          <div className="inline-block px-4 py-1.5 mb-8 rounded-full bg-navy/5 border border-navy/10">
            <span className="text-xs font-bold uppercase tracking-widest text-navy font-outfit">
              BIASHARA AI — COMING SOON
            </span>
          </div>

          {/* H1 */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-8 text-navy font-outfit">
            The business augmentation engine for commercial decision-making.
          </h1>

          {/* Subhead */}
          <p className="max-w-3xl mx-auto text-lg sm:text-xl text-navy/75 font-outfit leading-relaxed mb-10">
            Biashara AI augments commercial decision-making by continuously
            sensing markets, validating hypotheses, optimising supply-chain
            decisions, coordinating execution across stakeholders, and learning
            from outcomes. Rather than replacing management, it strengthens
            organisational judgment through continuous intelligence.
          </p>

          {/* Primary CTA (Only CTA permitted on this page per Flag 6) */}
          <div className="flex justify-center">
            <Button
              type="primary"
              size="large"
              onClick={scrollToWaitlist}
              className="px-10 py-4 h-auto rounded-full font-bold text-base font-outfit bg-navy border-navy hover:bg-navy/90 hover:border-navy/90 transition-all shadow-lg flex items-center gap-2"
            >
              Join the waitlist
              <ArrowDownOutlined className="text-xs" />
            </Button>
          </div>
        </div>
      </section>

      {/* Section: What it's designed to do */}
      <section className="py-20 bg-surfaceAlt/40 border-y border-surfaceAlt">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy font-outfit mb-4">
              What it&apos;s designed to do
            </h2>
            <p className="text-navy/70 font-outfit text-base">
              A continuous intelligence layer operating alongside your
              leadership team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((item, idx) => (
              <div
                key={item.title}
                className={`bg-white rounded-3xl p-8 border border-navy/5 shadow-sm hover:shadow-md transition-all duration-300 ${
                  idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div className="w-12 h-12 rounded-2xl bg-surfaceAlt flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-navy font-outfit mb-3">
                  {item.title}
                </h3>
                <p className="text-navy/70 font-outfit leading-relaxed text-sm sm:text-base">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section: Our philosophy (Pull-quote treatment) */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="w-12 h-1 bg-mint rounded-full mx-auto mb-10" />
          <blockquote className="text-2xl sm:text-4xl lg:text-5xl font-bold text-navy font-outfit leading-snug tracking-tight mb-8">
            &ldquo;Rather than replacing management, the platform strengthens
            organisational judgment through continuous intelligence.&rdquo;
          </blockquote>
          <p className="text-navy/60 font-medium font-outfit uppercase tracking-widest text-xs">
            Basepoint Core Philosophy
          </p>
        </div>
      </section>

      {/* Section: Where we're headed (Strategic priorities, next 18 months) */}
      <section className="py-20 bg-surfaceAlt/30 border-y border-surfaceAlt">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy font-outfit mb-4">
              Where we&apos;re headed
            </h2>
            <p className="text-navy/70 font-outfit text-base">
              Our strategic priorities for platform and intelligence development
              over the next 18 months.
            </p>
          </div>

          <div className="space-y-4 max-w-3xl mx-auto">
            {strategicPriorities.map((priority, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 border border-navy/5 shadow-sm flex items-start gap-4 transition-all hover:border-mint/60"
              >
                <div className="w-8 h-8 rounded-full bg-mint/20 text-navy font-bold text-sm flex items-center justify-center shrink-0 font-outfit">
                  {index + 1}
                </div>
                <p className="text-navy/85 font-outfit text-base pt-0.5 leading-relaxed">
                  {priority}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section: Waitlist Form */}
      <section id="waitlist-form" className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-surfaceAlt/50 border border-surfaceAlt rounded-[2.5rem] p-8 sm:p-12 shadow-sm">
            <div className="text-center mb-10">
              <div className="inline-block px-3 py-1 mb-4 rounded-full bg-mint/30 text-navy font-semibold text-xs uppercase tracking-wider font-outfit">
                Early Partner Access
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy font-outfit mb-3">
                Join the Biashara AI Waitlist
              </h2>
              <p className="text-navy/70 font-outfit text-sm sm:text-base max-w-lg mx-auto">
                Collaborate with us as we build the next generation of
                commercial intelligence for East African markets.
              </p>
            </div>

            {submitted ? (
              <div className="bg-white p-8 rounded-2xl border border-mint text-center animate-fade-in">
                <CheckCircleFilled className="text-4xl text-mint-dark mb-4" />
                <h3 className="text-2xl font-bold text-navy font-outfit mb-2">
                  You&apos;re on the waitlist!
                </h3>
                <p className="text-navy/70 font-outfit max-w-md mx-auto mb-6">
                  Thank you for your interest. Our partnership team will reach
                  out as private preview cohorts are scheduled.
                </p>
                <Button
                  onClick={() => setSubmitted(false)}
                  className="font-outfit text-sm"
                >
                  Submit another inquiry
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
                      Your Name
                    </span>
                  }
                  name="name"
                  rules={[
                    { required: true, message: 'Please enter your name' },
                  ]}
                >
                  <Input
                    placeholder="e.g. Sarah Ochieng"
                    size="large"
                    className="rounded-xl font-outfit"
                  />
                </Form.Item>

                <Form.Item
                  label={
                    <span className="font-semibold text-navy font-outfit">
                      Organisation Name
                    </span>
                  }
                  name="organisation"
                  rules={[
                    {
                      required: true,
                      message: 'Please enter your organisation name',
                    },
                  ]}
                >
                  <Input
                    placeholder="e.g. Apex Logistics or FinTech Solutions"
                    size="large"
                    className="rounded-xl font-outfit"
                  />
                </Form.Item>

                <Form.Item
                  label={
                    <span className="font-semibold text-navy font-outfit">
                      Organisation Type
                    </span>
                  }
                  name="organisation_type"
                  rules={[
                    {
                      required: true,
                      message: 'Please select your organisation type',
                    },
                  ]}
                >
                  <Select
                    size="large"
                    placeholder="Select organisation type"
                    className="font-outfit"
                  >
                    <Option value="tool_app_maker">Tool / App Maker</Option>
                    <Option value="platform">Platform</Option>
                    <Option value="enterprise">Enterprise</Option>
                    <Option value="other">Other</Option>
                  </Select>
                </Form.Item>

                <Form.Item
                  label={
                    <span className="font-semibold text-navy font-outfit">
                      Work Email
                    </span>
                  }
                  name="email"
                  rules={[
                    {
                      required: true,
                      type: 'email',
                      message: 'Please enter a valid work email',
                    },
                  ]}
                >
                  <Input
                    placeholder="sarah@example.com"
                    size="large"
                    className="rounded-xl font-outfit"
                  />
                </Form.Item>

                <Form.Item
                  label={
                    <span className="font-semibold text-navy font-outfit">
                      Areas of Interest
                    </span>
                  }
                  name="areas_of_interest"
                  rules={[
                    {
                      required: true,
                      message: 'Please select at least one area of interest',
                    },
                  ]}
                >
                  <Checkbox.Group className="flex flex-col gap-2 font-outfit">
                    <Checkbox value="sensing_markets">Sensing markets</Checkbox>
                    <Checkbox value="validating_hypotheses">
                      Validating commercial hypotheses
                    </Checkbox>
                    <Checkbox value="optimising_supply_chain">
                      Optimising supply-chain decisions
                    </Checkbox>
                    <Checkbox value="coordinating_execution">
                      Coordinating execution
                    </Checkbox>
                    <Checkbox value="learning_outcomes">
                      Learning from outcomes
                    </Checkbox>
                    <Checkbox value="partnership_integration">
                      General Partnership / Integration
                    </Checkbox>
                  </Checkbox.Group>
                </Form.Item>

                <div className="pt-4">
                  <Button
                    type="primary"
                    htmlType="submit"
                    loading={loading}
                    size="large"
                    className="w-full py-4 h-auto rounded-full font-bold text-base font-outfit bg-navy border-navy hover:bg-navy/90 hover:border-navy/90 transition-all shadow-md"
                  >
                    Join the waitlist
                  </Button>
                </div>
              </Form>
            )}
          </div>
        </div>
      </section>

      {/* CTA banner (footer of page per Section 10a) */}
      <section className="py-20 bg-navy text-white text-center px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-bold font-outfit mb-6 text-white">
            Help shape the next generation of commercial intelligence.
          </h2>
          <Button
            type="primary"
            size="large"
            onClick={scrollToWaitlist}
            className="px-8 py-3.5 h-auto rounded-full font-bold font-outfit bg-mint text-navy border-mint hover:bg-white hover:border-white transition-all shadow-lg"
          >
            Join the waitlist
          </Button>
        </div>
      </section>
    </>
  );
};

export default BiasharaAIPage;
