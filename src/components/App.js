/* eslint-disable react/jsx-pascal-case */
import LatestRoles from '../components/LatestRoles/LatestRoles';
import '../styles/App.css';
import AboutCompany from './AboutCompany/AboutCompany';
import CandidateHub from './CandidateHub/CandidateHub';
import Clients from './Clients/Clients';
import Departments from './Departments/Departments';
import Footer from './Footer/Footer';
import Home from './Home/Home'
import Insights from './Insights/Insights';
import Testimonials from './Testimonials/Testimonials';

function App() {
  return (
    <div className="App">
     <Home />
     <AboutCompany />
     <Departments />
     <CandidateHub />
     <Clients />
     <LatestRoles />
     <Testimonials />
     <Insights />
     <Footer />
    </div>
  );
}

export default App;
