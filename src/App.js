import './App.css'
import { Header } from "./components/Header";
import { Banner } from './components/Banner';
import { Tipbar } from './components/Tipbar';
import { TipbarBrands } from './components/TipbarBrands';
import { ProductSummary } from './components/ProductSummary';
import { InfoCard } from './components/InfoCard';
import { NewsletterPopup } from './components/NewsletterPopup';
import { Footer } from './components/Footer';
function App() {
  return (
    <div className="App">
      <NewsletterPopup/>
      <Header/>
      <Banner />
      <Tipbar />
      <TipbarBrands />
      <ProductSummary />
      <InfoCard />
      <Footer />
    </div>
  );
}

export default App;
