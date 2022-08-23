import { Fragment } from "react";

import Footer from "./components/Footer/Footer";
import FAQ from "./components/FAQ/FAQ";
import Navigation from "./components/Navigation/Navigation";
import Promo from "./components/Promo/Promo";
import PasswordsSection from "./components/PasswordsSection/PasswordsSection";

const App = () => {
  return (
    <Fragment>
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
    </Fragment>
  );
};

export default App;
