import { Footer, Header } from "compositions";
import { AllProviders } from "data";
import LinksPage from "./pages/LinksPage";


function App() {
  return (
    <AllProviders>
      <Header />
      <LinksPage />
      <Footer />
    </AllProviders>
  );
}

export default App;
