import Header from '../components/Header';
import Industry from '../components/Industry';
import IndustrySlider from '../components/IndustrySlider';
import LeadCaptureForm from '../components/LeadCaptureForm';
import ServicesGrid from '../components/ServiceGrid';

function Home() {
  return (
    <>
      <Header />
      <ServicesGrid />
      <IndustrySlider/>
      <LeadCaptureForm />
    </>
  );
}

export default Home;
