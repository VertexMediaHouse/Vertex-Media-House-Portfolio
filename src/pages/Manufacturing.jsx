import Header from '../components/Header';
import HowVertexWorks from '../components/HowVertexWorks';
import Industry from '../components/Industry';
import LeadCaptureForm from '../components/LeadCaptureForm';

const MANUFACTURING_FEATURES = [
  {
    key: 'inventory-alerts',
    title: 'Auto-Reordering',
    detail: 'Trigger vendor purchase orders automatically when raw material stock levels drop below custom safety thresholds.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
    )
  },
  {
    key: 'qa-reports',
    title: 'Inspection Tracking',
    detail: 'Generate digital quality checks and audit-ready reports on the fly right from the factory floor tablet.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    )
  },
  {
    key: 'client-updates',
    title: 'Order Status Sync',
    detail: 'Automatically update distributors with real-time tracking alerts as jobs progress from assembly to shipping.',
    image: 'https://images.unsplash.com/photo-1566577134770-3d85bb3a9cc4?auto=format&fit=crop&w=800&q=80',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
    )
  },
  {
    key: 'shift-handover',
    title: 'Shift Syncing',
    detail: 'Keep production flowing by automatically logging handovers, outputs, and maintenance alerts across shift changes.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    )
  }
];

function Manufacturing() {
  return (
    <>
      <Header/>
      <Industry
        category="Manufacturing Automation"
        title={<>Automate your <span className="text-[#FF5A36]">supply & production.</span></>}
        description="Integrate raw material sensors, automate order routing to vendors, and trigger instant delivery alerts for distributors."
        features={MANUFACTURING_FEATURES}
      />
      <HowVertexWorks/>
      <LeadCaptureForm />
    </>
  );
}

export default Manufacturing;
