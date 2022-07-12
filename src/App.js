import Footer from "./components/Footer/Footer";
import FAQ from "./components/FAQ/FAQ";
import Navigation from "./components/Navigation/Navigation";
import Promo from "./components/Promo/Promo";
import PasswordsSection from "./components/PasswordsSection/PasswordsSection";

function App() {
  return (
    <div>
      <section className="mainSection container">
        <Navigation />
        <Promo />
        <PasswordsSection />
      </section>
      <section className="faqSection container">
        <FAQ />
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
