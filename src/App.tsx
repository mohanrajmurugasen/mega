import { Provider } from "react-redux";
import { store } from "./store/store";
import Routing from "./Routes";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Routing />
        <button className="inquiry">Inquiry Form</button>
      </Provider>
    </div>
  );
}

export default App;
