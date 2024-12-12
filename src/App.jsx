import './App.css';
import Card, { CardItem } from './components/card';
import Navbar from './pages/Navbar';
import rasm from "./images/rasm1.png"
import rasm2 from "./images/rasm2.png"
import rasm3 from "./images/rasm3.png"
import rasm4 from "./images/rasm4.png"
import Footer from './pages/Footer';
import './style/main.css';


function App() {
  return (
    <div className="App">
      <Navbar />
      <CardItem
        image={rasm}
        title="The best online vintage clothing stores to shop more sustainably this summer"
        description="There’s no better time than now to familiarise yourself with the best online vintage clothing stores. If you want to overhaul your wardrobe for the long run, mixing vintage with high street clothing is the key to being trendy as well as sustainable."
        description2="But vintage shopping isn’t easy, you can easily spend hours in a store and walk out with..."
        author="Jane Cooper"
        date="Oct 16, 2022"
        stats={{ views: 1.5, rating: 5 }} />
      <CardItem
        image={rasm2}
        title="The best online vintage clothing stores to shop more sustainably this summer"
        description="There’s no better time than now to familiarise yourself with the best online vintage clothing stores. If you want to overhaul your wardrobe for the long run, mixing vintage with high street clothing is the key to being trendy as well as sustainable."
        description2="But vintage shopping isn’t easy, you can easily spend hours in a store and walk out with..."
        author="Jane Cooper"
        date="Oct 16, 2022"
        stats={{ views: 1.5, rating: 5 }} />
      <CardItem
        image={rasm3}
        title="The best online vintage clothing stores to shop more sustainably this summer"
        description="There’s no better time than now to familiarise yourself with the best online vintage clothing stores. If you want to overhaul your wardrobe for the long run, mixing vintage with high street clothing is the key to being trendy as well as sustainable."
        description2="But vintage shopping isn’t easy, you can easily spend hours in a store and walk out with..."
        author="Jane Cooper"
        date="Oct 16, 2022"
        stats={{ views: 1.5, rating: 5 }} />
      <CardItem
        image={rasm4}
        title="The best online vintage clothing stores to shop more sustainably this summer"
        description="There’s no better time than now to familiarise yourself with the best online vintage clothing stores. If you want to overhaul your wardrobe for the long run, mixing vintage with high street clothing is the key to being trendy as well as sustainable."
        description2="But vintage shopping isn’t easy, you can easily spend hours in a store and walk out with..."
        author="Jane Cooper"
        date="Oct 16, 2022"
        stats={{ views: 1.5, rating: 5 }} />

        <Footer />
    </div>
  );
}
export default App;
