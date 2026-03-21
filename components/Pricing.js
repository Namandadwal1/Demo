import React from 'react';

function Pricing() {
  const plans = [
    {
      name: 'Starter Plan',
      price: '₹12,000',
      description: 'Best for small businesses or personal websites.',
      features: [
        '1–2 Page Website',
        'Modern and Clean Design',
        'Mobile Responsive Design',
        'Contact Form Integration',
        'Basic SEO Setup',
        '3 Days Delivery',
      ],
      buttonText: 'Choose Starter'
    },
    {
      name: 'Business Plan',
      price: '₹20,000',
      description: 'Perfect for growing businesses that want a professional online presence.',
      features: [
        '4–6 Page Website',
        'Premium UI/UX Design',
        'Fully Mobile Responsive',
        'Contact Forms & Lead Collection',
        'Basic Animations & Interactions',
        'SEO Optimized Structure',
        'Social Media Integration',
        '5 Days Delivery',
      ],
      buttonText: 'Choose Business',
      isPopular: true
    },
    {
      name: 'Premium Plan',
      price: '₹45,000',
      description: 'Best for businesses that want a high-quality professional website.',
      features: [
        '8–10 Page Custom Website',
        'Advanced UI/UX Design',
        'Fast Performance Optimization',
        'Advanced Animations & Interactions',
        'SEO Optimization',
        'CMS or Admin Panel (optional)',
        'E-commerce Integration (basic)',
        'Analytics Setup',
        'Priority Support',
        '7 Days Delivery',
      ],
      buttonText: 'Choose Premium'
    }
  ];

  return (
    <section className="py-24 bg-white text-black" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-extrabold text-heading sm:text-5xl tracking-tight">
            Simple, One-Time Pricing
          </h2>
          <p className="mt-4 text-xl text-body">
            No monthly subscriptions. Pay once and own your professional website forever.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`flex flex-col p-8 rounded-2xl border ${
                plan.isPopular 
                  ? 'border-brand shadow-xl bg-neutral-primary-soft relative transform md:-translate-y-4' 
                  : 'border-default shadow-sm bg-white'
              } transition-all duration-300 hover:shadow-lg`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-brand text-black text-xs font-bold uppercase tracking-wider py-1.5 px-4 rounded-full shadow-sm">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-heading">{plan.name}</h3>
                <p className="mt-3 text-sm text-body min-h-[40px] leading-relaxed">{plan.description}</p>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline text-heading">
                  <span className="text-5xl font-extrabold tracking-tight">{plan.price}</span>
                </div>
                <div className="mt-1">
                  <span className="text-sm font-medium text-body bg-gray-100 text-black px-2 py-1 rounded-md">One-time payment</span>
                </div>
              </div>

              <ul role="list" className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <svg className="w-5 h-5 shrink-0 text-fg-brand mt-0.5 mr-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 11.917 9.724 16.5 19 7.5"/>
                    </svg>
                    <span className="text-body text-sm font-medium">{feature}</span>
                  </li>
                ))}
              </ul>

              <button 
                type="button" 
                className={`w-full font-semibold rounded-lg text-sm px-5 py-3.5 text-center transition-all duration-200 mt-auto ${
                  plan.isPopular 
                    ? 'text-black bg-brand hover:bg-brand-strong shadow-md hover:shadow-lg border-black  focus:ring-4 focus:ring-brand-medium' 
                    : 'text-brand bg-white border-2 border-brand border-black hover:bg-brand focus:ring-4 focus:ring-brand-medium'
                }`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;