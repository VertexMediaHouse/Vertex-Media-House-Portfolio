import Header from '../components/Header';
import IndustrySlider from '../components/IndustrySlider';
import LeadCaptureForm from '../components/LeadCaptureForm';
import ServicesGrid from '../components/ServiceGrid';

function Home() {
  return (
    <>
      <Header />
      <ServicesGrid/>
      <LeadCaptureForm />
    </>
  );
}

export default Home;
