import { Header } from "./components/header/Header";
import { Meals } from "./components/meals/Meals";
import { CartContextProvider } from "./store/CartContext";

function App() {
  return (
    <CartContextProvider>
      <Header />
      <Meals />
    </CartContextProvider>
  );
}

export default App;
