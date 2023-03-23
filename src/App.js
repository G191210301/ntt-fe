
import './App.css';
import Header from './component/header';
import Slider from './component/slider';
import NavBar from './component/navBar';
import ContentTitle from './component/contentTitle';
import ProductList from './component/card';
import Footer from './component/footer';



function App() {
  return (
    <div>
      <Header/>
      <NavBar/>
      <Slider/>
      <ContentTitle/>
      <ProductList/>
      <Footer/>
    
    </div>
  );
}

export default App;
