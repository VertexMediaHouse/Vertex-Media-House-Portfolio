import Header from '../components/Header';
import Industry from '../components/Industry';
import HowVertexWorks from '../components/HowVertexWorks';
import LeadCaptureForm from '../components/LeadCaptureForm';

const AUTOMATION_FEATURES = [
  {
    key: 'chatbot',
    title: 'AI Product Chatbot',
    detail: 'Answers product questions and qualifies leads 24/7, no waiting on your team.',
    image: 'https://images.unsplash.com/photo-1531747118685-ca8fa6e08806?auto=format&fit=crop&w=800&q=80',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
    )
  },
  {
    key: 'voice-agent',
    title: 'AI Voice & Booking',
    detail: 'Picks up calls and books appointments straight into your calendar — no missed calls.',
    image: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=800&q=80',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    )
  },
  {
    key: 'email-dashboard',
    title: 'Email & Dashboard',
    detail: 'Sequences run on autopilot, with a live dashboard tracking opens and replies.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h2a2 2 0 002-2z" />
    )
  },
  {
    key: 'social-posting',
    title: 'Social Auto-Posting',
    detail: 'Content gets scheduled and published across platforms — zero manual posting.',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=800&q=80',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M8.684 10.742l-2.006-2.006a1 1 0 00-1.414 0L3.586 10a1 1 0 000 1.414l6 6a1 1 0 001.414 0l6-6a1 1 0 000-1.414l-1.678-1.678a1 1 0 00-1.414 0l-2.006 2.006a1 1 0 01-1.414 0z" />
    )
  },
  {
    key: 'inventory',
    title: 'Inventory Manager',
    detail: 'Stock updates and reorder alerts happen automatically — no manual tracking.',
    image: 'https://images.unsplash.com/photo-1553413719-875871274712?auto=format&fit=crop&w=800&q=80',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
    )
  },
  {
    key: 'crm',
    title: 'CRM Portal',
    detail: 'Leads and deals stay organized and synced in one place, automatically.',
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800&q=80',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    )
  },
  {
    key: 'blogging',
    title: 'Auto Blog Posting',
    detail: 'Blog posts get drafted and published on schedule, without you writing every one.',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=800&q=80',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
    )
  },
  {
    key: 'product-videos',
    title: 'AI Product Videos',
    detail: 'Product and demo videos get generated automatically — no production cycle needed.',
    image: 'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?auto=format&fit=crop&w=800&q=80',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 00-2 2z" />
    )
  }
];

function Automate() {
  return (
    <>
      <Header />
      <Industry
        category="Automation That Works"
        title={<>Put your business on <span className="text-[#FF5A36]">autopilot.</span></>}
        description="We build systems that handle the repetitive work behind your business — from capturing leads to routing, support, reporting, and everything in between."
        features={AUTOMATION_FEATURES}
      />
      <HowVertexWorks/>
      <LeadCaptureForm />
    </>
  );
}

export default Automate;
