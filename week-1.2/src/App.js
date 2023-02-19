import Content from "./Content";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import "./style.css";

function App() {
  return (
    <div className="App">
      <Topbar />
      <Content />
      <Sidebar />
      <Footer />
    </div>
  );
}

export default App;
