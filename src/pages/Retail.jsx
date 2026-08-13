import Header from '../components/Header';
import HowVertexWorks from '../components/HowVertexWorks';
import Industry from '../components/Industry';
import LeadCaptureForm from '../components/LeadCaptureForm';

const RETAIL_FEATURES = [
  {
    key: 'abandoned-cart',
    title: 'Cart Recovery Automation',
    detail: 'Automatically ping customers who left items in their cart with custom WhatsApp discounts or friendly email reminders.',
    image: 'https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&w=800&q=80',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
    )
  },
  {
    key: 'loyalty-rewards',
    title: 'Loyalty & Referrals',
    detail: 'Track shopping points and auto-deliver redeemable rewards codes directly to clients after qualifying purchases.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5a2 2 0 10-2 2h2zm0 0h4m-4 0H8m12 3v7a2 2 0 01-2 2H6a2 2 0 01-2-2v-7m16 0h-4M4 11h4m12 0h2a1 1 0 001-1V7a1 1 0 00-1-1h-3M4 11H2a1 1 0 00-1 1v3a1 1 0 001 1h3" />
    )
  },
  {
    key: 'stock-sync',
    title: 'Omnichannel Sync',
    detail: 'Keep your brick-and-mortar store POS inventory and e-commerce Shopify catalog perfectly synced in real-time.',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
    )
  },
  {
    key: 'refund-processing',
    title: 'Instant Returns',
    detail: 'Generate shipping labels and process instant refund notifications as soon as packages are scanned at the post office.',
    image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=800&q=80',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
    )
  }
];

function Retail() {
  return (
    <>
      <Header/>
      <Industry
        category="Retail Operations"
        title={<>Scale your <span className="text-[#FF5A36]">retail systems.</span></>}
        description="Handle e-commerce orders, sync online-offline stock in real-time, and trigger automated post-purchase updates."
        features={RETAIL_FEATURES}
      />
      <HowVertexWorks/>
      <LeadCaptureForm />
    </>
  );
}

export default Retail;
