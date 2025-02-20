import "./App.scss";

import { Footer, Header } from "./components";
import AllRouters from "./routers/Allrouters";

function App() {
  return (
    <div>
      <Header />
      <AllRouters />
      <Footer />
    </div>
  );
}

export default App;
