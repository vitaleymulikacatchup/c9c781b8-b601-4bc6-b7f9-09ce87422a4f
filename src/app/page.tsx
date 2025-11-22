"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroLogo from '@/components/sections/hero/HeroLogo';
import FeatureCardSix from '@/components/sections/feature/FeatureCardSix';
import PricingCardThree from '@/components/sections/pricing/PricingCardThree';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import TestimonialCardThree from '@/components/sections/testimonial/TestimonialCardThree';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Sparkles, Star, ThumbsUp } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="soft"
      contentWidth="large"
      sizing="large"
      background="none"
      cardStyle="glass-depth"
      primaryButtonStyle="radial-glow"
      secondaryButtonStyle="solid"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          brandName="SaaSFlow"
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763801571407-ilj62c0d.jpg"
          logoAlt="SaaSFlow logo"
          button={{
            text: "Start Free Trial",
            href: "#contact"
          }}
          className="backdrop-blur-sm"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroLogo
          logoText="SaaSFlow"
          description="Streamline your workflow. Automate your business. Accelerate your growth with our powerful SaaS platform."
          buttons={[
            { text: "Start Free Trial", href: "#pricing" },
            { text: "Watch Demo", href: "https://www.youtube.com" }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763801572301-n5wxi3ci.jpg"
          imageAlt="Modern tech workspace with bright lighting"
          showDimOverlay={false}
          containerClassName="min-h-screen"
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardSix
          title="Powerful Features Built for Scale"
          description="Everything you need to succeed in one unified platform. Streamline operations, boost productivity, and drive growth."
          tag="Features"
          features={[
            {
              id: 1,
              title: "Real-time Analytics Dashboard",
              description: "Monitor your key metrics and performance indicators in real-time. Get actionable insights to make better business decisions instantly.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763801572991-6v9e1etl.jpg"
            },
            {
              id: 2,
              title: "Cloud Infrastructure",
              description: "Enterprise-grade cloud infrastructure with 99.99% uptime guarantee. Scale automatically as your business grows without any hassle.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763801574051-1p0w6ea0.jpg"
            },
            {
              id: 3,
              title: "Advanced Security",
              description: "Bank-level security with encryption, SSO, and compliance certifications. Protect your data with military-grade protection standards.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763801574874-mwqsumus.jpg"
            }
          ]}
          textboxLayout="split"
          buttons={[
            { text: "Explore All Features", href: "https://saasflow.example.com/features" }
          ]}
          containerClassName="py-24"
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardThree
          title="Simple, Transparent Pricing"
          description="Choose the plan that fits your needs. Scale up or down anytime with no hidden fees."
          tag="Pricing"
          plans={[
            {
              id: "starter",
              price: "$29/mo",
              name: "Starter",
              buttons: [
                { text: "Get Started", href: "https://app.saasflow.example.com/signup" },
                { text: "Learn More", href: "#" }
              ],
              features: [
                "Up to 5 projects",
                "Basic analytics",
                "Community support",
                "1 GB storage",
                "API access"
              ]
            },
            {
              id: "professional",
              badge: "Most Popular",
              badgeIcon: Sparkles,
              price: "$99/mo",
              name: "Professional",
              buttons: [
                { text: "Get Started", href: "https://app.saasflow.example.com/signup" },
                { text: "Learn More", href: "#" }
              ],
              features: [
                "Unlimited projects",
                "Advanced analytics",
                "Priority support",
                "100 GB storage",
                "Advanced API access",
                "Team collaboration"
              ]
            },
            {
              id: "enterprise",
              price: "Custom",
              name: "Enterprise",
              buttons: [
                { text: "Contact Sales", href: "#contact" },
                { text: "Learn More", href: "#" }
              ],
              features: [
                "Unlimited everything",
                "Custom analytics",
                "24/7 dedicated support",
                "Unlimited storage",
                "Custom integrations",
                "SLA guarantee"
              ]
            }
          ]}
          textboxLayout="default"
          animationType="slide-up"
          containerClassName="py-24"
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardTwo
          title="Trusted by Thousands"
          description="See how SaaSFlow is transforming businesses worldwide with measurable results."
          tag="Impact"
          metrics={[
            {
              id: "1",
              value: "50K+",
              description: "Active Users Globally"
            },
            {
              id: "2",
              value: "$2.5B",
              description: "Total Value Processed"
            },
            {
              id: "3",
              value: "99.99%",
              description: "Platform Uptime"
            },
            {
              id: "4",
              value: "150+",
              description: "Countries Supported"
            }
          ]}
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="four-items-2x2-equal-grid"
          containerClassName="py-24"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardThree
          title="What Our Customers Say"
          description="Real feedback from real users who are transforming their businesses with SaaSFlow."
          tag="Testimonials"
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              handle: "@sarahj",
              testimonial: "SaaSFlow completely transformed how we manage our operations. The analytics dashboard alone has saved us countless hours every week. Highly recommended!",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763801575622-l5xgzs5t.jpg"
            },
            {
              id: "2",
              name: "Michael Chen",
              handle: "@mchen",
              testimonial: "Outstanding platform. The integration with our existing tools was seamless, and the support team is incredibly responsive. This is the best investment we made this year.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763801576769-8brubfef.jpg"
            },
            {
              id: "3",
              name: "Emily Rodriguez",
              handle: "@emilycode",
              testimonial: "The automation features have been game-changing for our team. We've reduced manual work by 80% and can focus on strategic initiatives. Simply amazing.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763801577560-5ovpazid.jpg"
            },
            {
              id: "4",
              name: "David Kim",
              handle: "@davidkim_io",
              testimonial: "Enterprise-grade solution at a reasonable price. The security features give us peace of mind, and scalability is effortless as we grow. Five stars!",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763801578298-7gke7rjy.jpg"
            },
            {
              id: "5",
              name: "Jessica Martinez",
              handle: "@jessmartinez",
              testimonial: "The best customer support I've experienced with any SaaS platform. They actually listen and implement feature requests. Love this product.",
              icon: Star
            },
            {
              id: "6",
              name: "Thomas Anderson",
              handle: "@t_anderson",
              testimonial: "Switched from a competitor three months ago. The difference is night and day. SaaSFlow is more intuitive, faster, and significantly cheaper. No regrets.",
              icon: ThumbsUp
            }
          ]}
          textboxLayout="default"
          animationType="slide-up"
          containerClassName="py-24"
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitMedia
          title="Frequently Asked Questions"
          description="Find answers to common questions about SaaSFlow. Can't find what you're looking for? Contact our support team."
          tag="Help"
          faqs={[
            {
              id: "1",
              title: "How do I get started with SaaSFlow?",
              content: "Getting started is simple. Sign up for a free trial, connect your data sources, and start building dashboards in minutes. Our onboarding guide will walk you through every step. No credit card required."
            },
            {
              id: "2",
              title: "What payment methods do you accept?",
              content: "We accept all major credit cards, wire transfers, and ACH payments for annual subscriptions. Enterprise customers can also arrange custom payment terms with our sales team."
            },
            {
              id: "3",
              title: "Can I cancel my subscription anytime?",
              content: "Absolutely. You can cancel your subscription at any time from your account settings. Your access continues until the end of your billing cycle. No questions asked."
            },
            {
              id: "4",
              title: "Is my data secure on SaaSFlow?",
              content: "Yes. We use bank-level AES-256 encryption, comply with GDPR and SOC 2, and conduct regular security audits. Your data is always encrypted in transit and at rest."
            },
            {
              id: "5",
              title: "Do you offer API access?",
              content: "Yes. All plans include API access for custom integrations. Professional and Enterprise plans include advanced API features and higher rate limits."
            },
            {
              id: "6",
              title: "What is your uptime guarantee?",
              content: "We guarantee 99.99% uptime for all plans. This is backed by our SLA, which includes service credits if we fail to meet this commitment."
            }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763801579774-c3osi8iz.jpg"
          imageAlt="Customer support team helping a client"
          mediaPosition="right"
          textboxLayout="default"
          animationType="smooth"
          containerClassName="py-24"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Newsletter"
          title="Stay Updated with SaaSFlow"
          description="Subscribe to our newsletter for product updates, industry insights, and exclusive tips to maximize your SaaS business growth."
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763801578983-m4czdgga.jpg"
          imageAlt="Modern office workspace with team collaboration"
          mediaPosition="right"
          inputPlaceholder="Enter your email"
          buttonText="Subscribe"
          termsText="We respect your privacy. Unsubscribe at any time. No spam, we promise."
          containerClassName="py-24"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="SaaSFlow"
          columns={[
            {
              items: [
                { label: "Product", href: "#" },
                { label: "Features", href: "#features" },
                { label: "Pricing", href: "#pricing" },
                { label: "Security", href: "#" }
              ]
            },
            {
              items: [
                { label: "Company", href: "#" },
                { label: "About Us", href: "#" },
                { label: "Blog", href: "#" },
                { label: "Careers", href: "#" }
              ]
            },
            {
              items: [
                { label: "Resources", href: "#" },
                { label: "Documentation", href: "#" },
                { label: "API Reference", href: "#" },
                { label: "Support", href: "#" }
              ]
            },
            {
              items: [
                { label: "Legal", href: "#" },
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" },
                { label: "Contact", href: "#contact" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}