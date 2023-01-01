import './../styles/App.css';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';
import Message from './Message';
import Suggestion from './Suggetion';


function App() {
  return (
    <div className="App">
      <Header/>
      <Suggestion/>
      <Content/>
      <Message/>
      <Footer/>
    </div>
  );
}

export default App;
