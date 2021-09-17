import React from 'react'
import UserContext from '../Hooks/UserContext'
import '../index.css'



export const Cards = () => {
   const [indice, setIndice] = React.useState(null)
   const [modal, setModal] = React.useState(false)
  
   const books = React.useContext(UserContext);
   
   function getId({target}){
     setModal(!modal)
     setIndice(parseInt(target.value))
     console.log(indice)
   }

    return (
    <>
              
    <div className="grid grid-cols-3 gap-4 mt-10 mb-5">
        {books.map((livros, index) =>  <div key={livros.id} class="shadow-lg rounded-2xl p-4 bg-gray-200 dark:bg-gray-900 w-64 m-auto relative ">
                <div class="w-full h-full text-center">
                    <div class="flex h-full flex-col justify-between">
                        
                        <img className="rounded-lg shadow-md " src={livros.cover}/>
                        
                        <p class="font-extrabold text-gray-900 dark:text-white text-lg mt-4">
                           {livros.title}
                        </p>
                        <p class="font-bold dark:text-gray-50 text-gray-700 text-xs font-thin py-2 px-6">
                            {livros.author}
                        </p>
                    </div>
                    <button onClick={getId} value={index} type="button" class="w-10 h-10 text-base font-medium rounded-full text-white bg-gray-800 transform hover:bg-indigo-700 hover:scale-110 motion-safe:transform-none">
                    +
            </button>
                </div>
            </div>
        )}
    </div>
    {modal && (
        <div className="modal">
          <div onClick={getId} className="overlay"></div>
          <div className="overscroll-auto modal-content mt-10">
              <div className="grid justify-items-center">
            <h2 className="font-extrabold text-gray-900 dark:text-white text-lg mt-4">{books[indice].title}</h2>
            <p className="font-bold text-gray-900 dark:text-white  mt-2">{books[indice].author}</p>
            </div>
            <img src={books[indice].cover} className="rounded-lg shadow-md" width="100" height="100"/>
            <p className="text-justify mt-5">{books[indice].description}</p>
            
            <button onClick={getId} type="button" class="py-2 px-4 mt-4 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                Fechar
            </button>
            
          </div>
        </div>
      )}
     
    </>
  
    )
}
