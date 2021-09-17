import React from "react";
import { Cards } from "./Cards";
import './index.css';
import UserContext from "./UserContext";
import { Header } from "./Header";
import useFetch from "./useFetch";



const App = () => {
  const [allBooks, setAllBooks] = React.useState(null);
  const {request, data, loading, error} = useFetch();

  
  React.useEffect(() => {
    request('https://ibook-cataline.herokuapp.com/books')
  }, [])
    if(error) return <p>{error}</p>
    if(loading) return <div className="text-white font-extrabold">Carregando...</div>
    return (
      <>
      
      <UserContext.Provider value={data}>
        <Header />
        
        <div className="hidden md:flex text-3xl font-extrabold mt-5 ml-10 text-black text-white sm:text-4xl">
        Livros recentes
        <svg class="ml-3 mt-3 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13">
          </path>
        </svg>
        </div>

      {data && <Cards />} 
      
      </UserContext.Provider>
    </>
    )  
}



export default App;
