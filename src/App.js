import './App.css';
import Footer from './components/Footer';
import Navbar from "./components/Navbar";
import Welcome from './components/Welcome';

function App() {

  let users = [
    {
      id:1,
      name:"Messi",
      age:"21",
      src: "https://dynaimage.cdn.cnn.com/cnn/c_fill,g_auto,w_1200,h_675,ar_16:9/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F221208164147-argentina-lionel-messi.jpg",
      hobbies:["football","basketball"]
    },
    {
      id:2,
      name:"Ronaldo",
      age:"34",
      src:"https://www.planetsport.com/image-library/square/1200/c/cristiano-ronaldo-portugal-5-june-2022.jpg",
      hobbies:["music","dance"]
    }
  ]

  return (
   <>
    <Navbar/>
    {users.map((user)=>{
      return <Welcome key={user.id} name={user.name} age={user.age} src={user.src} hobbies={user.hobbies}/>
    })}
    <Footer/>
   </>
  );
}

export default App;
