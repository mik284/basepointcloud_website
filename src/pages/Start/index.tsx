import {
  ArrowRightOutlined,
  CheckCircleFilled,
  LockOutlined,
  MailOutlined,
  PhoneOutlined,
  SafetyCertificateOutlined,
  ShopOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { history, useLocation } from '@umijs/max';
import { Button, Form, Input, message, Select } from 'antd';
import React, { useEffect, useState } from 'react';

import SEO from '@/components/SEO';

const { Option } = Select;

const StartPage: React.FC = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [provisioned, setProvisioned] = useState(false);
  const [accountDetails, setAccountDetails] = useState<any>(null);
  const location = useLocation();

  // Extract UTMs, referral and collab IDs from query string
  const [trackingContext, setTrackingContext] = useState<
    Record<string, string>
  >({
    acquisition_motion: 'self_serve',
    acquisition_channel: 'organic',
    landing_page: '/start',
    utm_source: '',
    utm_medium: '',
    utm_campaign: '',
    referral_code: '',
    collab_id: '',
    first_touch_timestamp: new Date().toISOString(),
  });

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const utmSource = params.get('utm_source') || '';
    const utmMedium = params.get('utm_medium') || '';
    const utmCampaign = params.get('utm_campaign') || '';
    const refCode = params.get('ref') || params.get('referral_code') || '';
    const collabId =
      params.get('collab_id') || (refCode.startsWith('COLLAB-') ? refCode : '');

    let detectedChannel = 'organic';
    if (refCode || collabId) detectedChannel = 'referral_collab';
    else if (
      utmMedium === 'cpc' ||
      utmSource.includes('google') ||
      utmSource.includes('search')
    )
      detectedChannel = 'search';
    else if (
      utmMedium.includes('social') ||
      utmSource.includes('instagram') ||
      utmSource.includes('facebook')
    )
      detectedChannel = 'social';
    else if (utmSource.includes('partner')) detectedChannel = 'partner';

    setTrackingContext({
      acquisition_motion: 'self_serve',
      acquisition_channel: detectedChannel,
      landing_page: '/start',
      utm_source: utmSource,
      utm_medium: utmMedium,
      utm_campaign: utmCampaign,
      referral_code: refCode,
      collab_id: collabId,
      first_touch_timestamp: new Date().toISOString(),
    });
  }, [location.search]);

  const onFinish = (values: any) => {
    setLoading(true);

    // CTO event taxonomy contract: cta_start_clicked -> signup_started -> account_provisioned
    const payload = {
      ...values,
      ...trackingContext,
      signup_at: new Date().toISOString(),
      modules_active: ['base_duka'],
    };

    console.log(
      '[Attribution Contract] Provisioning Self-Serve Duka:',
      payload,
    );

    setTimeout(() => {
      setLoading(false);
      setAccountDetails(values);
      setProvisioned(true);
      message.success('Your Base Duka workspace is ready!');
    }, 800);
  };

  return (
    <>
      <SEO
        title="Start Free with Base Duka | Instant Setup"
        description="Connect your sales, stock, money, and customers into one clear picture. Get started with Base Duka in under 2 minutes."
        canonical="/start"
      />

      <div className="min-h-screen pt-28 pb-20 bg-surfaceAlt/20">
        <div className="max-w-xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-mint/20 text-navy font-bold text-xs uppercase tracking-wider font-outfit mb-4">
              <span className="w-2 h-2 rounded-full bg-mint-dark" />
              Instant Free Signup
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-navy font-outfit mb-3">
              Start free with Base Duka
            </h1>
            <p className="text-navy/70 font-outfit text-sm sm:text-base leading-relaxed">
              Base connects your sales, stock, money, and customers into one
              clear picture — so you always know what matters before it matters.
            </p>
          </div>

          {/* Referral Banner if present */}
          {trackingContext.referral_code && (
            <div className="mb-6 p-3.5 bg-mint/30 border border-mint rounded-2xl flex items-center gap-3">
              <SafetyCertificateOutlined className="text-xl text-navy" />
              <div className="text-xs font-outfit text-navy">
                <span className="font-bold">Referral Applied:</span>{' '}
                {trackingContext.referral_code} (Base Collabs network referral)
              </div>
            </div>
          )}

          {/* Provisioning Card */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-navy/10 shadow-lg">
            {provisioned ? (
              <div className="text-center py-6 animate-fade-in">
                <div className="w-16 h-16 rounded-full bg-mint/25 text-mint-dark flex items-center justify-center text-3xl mx-auto mb-5">
                  <CheckCircleFilled />
                </div>
                <h2 className="text-2xl font-bold text-navy font-outfit mb-2">
                  Welcome to Base Duka!
                </h2>
                <p className="text-navy/70 font-outfit text-sm max-w-sm mx-auto mb-8">
                  Your shop{' '}
                  <span className="font-bold text-navy">
                    &ldquo;{accountDetails?.business_name}&rdquo;
                  </span>{' '}
                  is set up. You can start logging sales and inventory right
                  away.
                </p>

                <div className="bg-surfaceAlt/50 p-5 rounded-2xl border border-surfaceAlt text-left mb-8 space-y-2 font-outfit text-sm">
                  <div className="flex justify-between">
                    <span className="text-navy/60">Owner:</span>
                    <span className="font-semibold text-navy">
                      {accountDetails?.owner_name}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-navy/60">Phone / M-Pesa:</span>
                    <span className="font-semibold text-navy">
                      {accountDetails?.phone}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-navy/60">Category:</span>
                    <span className="font-semibold text-navy capitalize">
                      {accountDetails?.category}
                    </span>
                  </div>
                </div>

                <Button
                  type="primary"
                  size="large"
                  onClick={() => history.push('/')}
                  className="w-full h-auto py-3.5 rounded-full font-bold font-outfit text-base bg-navy border-navy hover:bg-navy/90"
                >
                  Enter Workspace
                </Button>
              </div>
            ) : (
              <Form
                form={form}
                layout="vertical"
                onFinish={onFinish}
                initialValues={{ category: 'retail' }}
                className="space-y-4"
              >
                <Form.Item
                  label={
                    <span className="font-semibold text-navy font-outfit">
                      Business or Shop Name
                    </span>
                  }
                  name="business_name"
                  rules={[
                    {
                      required: true,
                      message: 'Please enter your business name',
                    },
                  ]}
                >
                  <Input
                    prefix={<ShopOutlined className="text-navy/40 mr-1" />}
                    placeholder="e.g. Mama Mboga Grocers or River Road Hardware"
                    size="large"
                    className="rounded-xl font-outfit"
                  />
                </Form.Item>

                <Form.Item
                  label={
                    <span className="font-semibold text-navy font-outfit">
                      Your Full Name
                    </span>
                  }
                  name="owner_name"
                  rules={[
                    { required: true, message: 'Please enter your name' },
                  ]}
                >
                  <Input
                    prefix={<UserOutlined className="text-navy/40 mr-1" />}
                    placeholder="e.g. John Kamau"
                    size="large"
                    className="rounded-xl font-outfit"
                  />
                </Form.Item>

                <Form.Item
                  label={
                    <span className="font-semibold text-navy font-outfit">
                      Phone Number (M-Pesa enabled)
                    </span>
                  }
                  name="phone"
                  rules={[
                    {
                      required: true,
                      message: 'Please enter a valid phone number',
                    },
                  ]}
                >
                  <Input
                    prefix={<PhoneOutlined className="text-navy/40 mr-1" />}
                    placeholder="07XX XXX XXX"
                    size="large"
                    className="rounded-xl font-outfit"
                  />
                </Form.Item>

                <Form.Item
                  label={
                    <span className="font-semibold text-navy font-outfit">
                      Email (Optional)
                    </span>
                  }
                  name="email"
                >
                  <Input
                    prefix={<MailOutlined className="text-navy/40 mr-1" />}
                    placeholder="you@domain.com"
                    size="large"
                    className="rounded-xl font-outfit"
                  />
                </Form.Item>

                <Form.Item
                  label={
                    <span className="font-semibold text-navy font-outfit">
                      Shop Category
                    </span>
                  }
                  name="category"
                  rules={[
                    {
                      required: true,
                      message: 'Please select your shop category',
                    },
                  ]}
                >
                  <Select size="large" className="font-outfit">
                    <Option value="retail">General Retail / Duka</Option>
                    <Option value="pharmacy">Pharmacy / Chemist</Option>
                    <Option value="cosmetics">Cosmetics & Beauty</Option>
                    <Option value="electronics">
                      Electronics & Phone Repair
                    </Option>
                    <Option value="hardware">Hardware & Construction</Option>
                    <Option value="other">Other Single-Location Shop</Option>
                  </Select>
                </Form.Item>

                <Form.Item
                  label={
                    <span className="font-semibold text-navy font-outfit">
                      Create Password / PIN
                    </span>
                  }
                  name="password"
                  rules={[
                    {
                      required: true,
                      min: 4,
                      message: 'Create a PIN or password (min 4 characters)',
                    },
                  ]}
                >
                  <Input.Password
                    prefix={<LockOutlined className="text-navy/40 mr-1" />}
                    placeholder="••••••••"
                    size="large"
                    className="rounded-xl font-outfit"
                  />
                </Form.Item>

                {/* Submit button */}
                <div className="pt-3">
                  <Button
                    type="primary"
                    htmlType="submit"
                    loading={loading}
                    size="large"
                    className="w-full h-auto py-4 rounded-full font-bold font-outfit text-base bg-navy border-navy hover:bg-navy/90 hover:border-navy/90 transition-all shadow-md flex items-center justify-center gap-2"
                  >
                    Create Free Workspace
                    <ArrowRightOutlined className="text-xs" />
                  </Button>
                </div>

                <div className="text-center pt-2">
                  <p className="text-xs text-navy/50 font-outfit">
                    Free forever for single dukas • No credit card required
                  </p>
                </div>
              </Form>
            )}
          </div>

          {/* Assisted route qualification fallback */}
          <div className="text-center mt-8">
            <p className="text-xs text-navy/60 font-outfit">
              Running multiple branches or need an ERP rollout?{' '}
              <button
                type="button"
                onClick={() => history.push('/contact')}
                className="text-navy font-bold underline bg-transparent border-0 cursor-pointer p-0"
              >
                Talk to our enterprise team
              </button>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default StartPage;
