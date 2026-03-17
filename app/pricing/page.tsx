import PricingSection from '@/src/sections/PricingSection'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
       {/* Hero Section */}
      <section
        className="relative min-h-130 overflow-hidden bg-cover bg-center bg-no-repeat md:min-h-100"
        style={{
          backgroundImage: "url('/images/aboutpage.jpg')",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50 z-1" />

        {/* Green gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(circle at 0% 50%, rgba(159,232,112,0.28) 0%, rgba(159,232,112,0.16) 18%, transparent 42%),
              radial-gradient(circle at 100% 50%, rgba(159,232,112,0.22) 0%, rgba(159,232,112,0.12) 18%, transparent 40%),
              linear-gradient(90deg, rgba(159,232,112,0.12) 0%, rgba(159,232,112,0.05) 20%, rgba(159,232,112,0.04) 50%, rgba(159,232,112,0.05) 80%, rgba(159,232,112,0.12) 100%)
            `,
          }}
        />

        {/* Inner shadow */}
        <div
          className="absolute inset-0"
          style={{
            boxShadow: "inset 0 0 180px rgba(0,0,0,0.4)",
          }}
        />

        {/* Content */}
        <div className="container-custom relative z-10 flex min-h-130 items-center pt-28 pb-14 md:min-h-140 md:pt-32 md:pb-16">
          <div>
            <h1 className="text-[64px] font-bold leading-[0.95] tracking-[-2px] text-white sm:text-[78px] md:text-[96px] lg:text-[110px]">
              Our Pricing Plan
            </h1>

            {/* Breadcrumb */}
            <div className="mt-8 flex items-center gap-2 text-[18px] font-medium md:text-[20px]">
              <Link
                href="/"
                className="text-(--primary) hover:opacity-90"
              >
                Home
              </Link>
              <span className="text-white">/</span>
              <span className="text-white">Pricing</span>
            </div>
          </div>
        </div>
      </section>

      <PricingSection />
    </div>
  )
}

export default page