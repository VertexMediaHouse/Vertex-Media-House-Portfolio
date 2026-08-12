import { Link } from 'react-router-dom';
import LeadCaptureForm from '../components/LeadCaptureForm';
import Header from '../components/Header';
import IndustrySlider from '../components/IndustrySlider';

function Automate() {
  return (
    <>
    <Header/>
    <IndustrySlider/>
    <LeadCaptureForm />
    </>
  );
}

export default Automate;
