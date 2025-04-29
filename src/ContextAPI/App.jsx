import { BioProvider } from "./index";
import { Home } from "./Home";
import { About } from "./About";

export const App1 = () => {
  return (
    <BioProvider>
      <Home />
      <About />
    </BioProvider>
  );
};
