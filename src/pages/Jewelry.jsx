import Header from '../components/Header';
import HowVertexWorks from '../components/HowVertexWorks';
import Industry from '../components/Industry';
import LeadCaptureForm from '../components/LeadCaptureForm';

const JEWELRY_FEATURES = [
  {
    key: 'consultations',
    title: 'Private consultations',
    detail: 'Allow clients to easily book premium virtual design calls or exclusive physical showroom consultations.',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    )
  },
  {
    key: 'custom-orders',
    title: 'Custom order tracker',
    detail: 'Keep clients in the loop with automated photo updates and 3D render approval requests during the crafting phase.',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M15 12a3 3 0 11-6 0 3 3 0 016 0zM2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    )
  },
  {
    key: 'digital-vault',
    title: 'Certificate delivery',
    detail: 'Automatically generate, sign, and deliver grading and appraisal certificates straight to the buyer\'s digital vault.',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    )
  },
  {
    key: 'maintenance-alerts',
    title: 'Clean & prong reminders',
    detail: 'Trigger automatic annual maintenance and complimentary prong check reminders to build lifelong client relationships.',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
    )
  }
];

function Jewelry() {
  return (
    <>
      <Header/>
      <Industry
        category="Luxury & Jewelry"
        title={<>Automate your <span className="text-[#FF5A36]">boutique experience.</span></>}
        description="Schedule custom consultations, manage custom order progress alerts, and automate cleaning follow-ups."
        features={JEWELRY_FEATURES}
      />
      <HowVertexWorks/>
      <LeadCaptureForm />
    </>
  );
}

export default Jewelry;
