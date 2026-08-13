import DesignSystem from '../components/DesignSystem';
import Header from '../components/Header';
import HowVertexWorks from '../components/HowVertexWorks';
import Industry from '../components/Industry';
import LeadCaptureForm from '../components/LeadCaptureForm';

const REAL_ESTATE_FEATURES = [
  {
    key: 'lead-capture',
    title: 'Instant Lead Capture',
    detail: 'Capture buyer enquiries from Zillow, Realtor.com, or your website and route them instantly to the right agent.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    )
  },
  {
    key: 'tour-booking',
    title: 'Tour Booking Chatbot',
    detail: 'Let prospects book physical viewings automatically on your calendar based on agent availability.',
    image: 'https://images.unsplash.com/photo-1572120360610-d971b9d7767c?auto=format&fit=crop&w=800&q=80',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    )
  },
  {
    key: 'whatsapp-alerts',
    title: 'Listing Alerts',
    detail: 'Blast new listings directly to matched buyers via WhatsApp the second they hit the market.',
    image: 'https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?auto=format&fit=crop&w=800&q=80',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    )
  },
  {
    key: 'crm-sync',
    title: 'CRM Automation',
    detail: 'Automatically sync buyer profiles, requirements, and feedback to Salesforce, HubSpot, or Follow Up Boss.',
    image: 'https://images.unsplash.com/photo-1552581230-c01bc911b046?auto=format&fit=crop&w=800&q=80',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M4 4v5h.582m15.356 2A8.001 8.001 0 1121.21 8H17" />
    )
  }
];

function RealEstate() {
  return (
    <>
      <Header/>
      <Industry
        category="Real Estate Automation"
        title={<>Automate your <span className="text-[#FF5A36]">property pipeline.</span></>}
        description="Connect with buyers instantly, showcase listings on autopilot, and handle bookings without lifting a finger."
        features={REAL_ESTATE_FEATURES}
      />
      <HowVertexWorks/>
      <LeadCaptureForm />
    </>
  );
}

export default RealEstate;
