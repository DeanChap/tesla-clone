import Model from "./components/Model";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div
      className="
      bg-[url('https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Model-3-Desktop-NA.jpg')] 
      lg:bg-[url('https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Model-3-Desktop-NA.jpg')] 
      h-screen bg-cover bg-center "
    >
      <Navbar />
      <Model />
    </div>
  );
}

export default App;
