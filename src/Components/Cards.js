import React from 'react'
import UserContext from '../Hooks/UserContext'
import '../index.css'
import { Modal } from './Modal'




export const Cards = () => {
   const [indice, setIndice] = React.useState(null)
   const [modal, setModal] = React.useState(false)
  
   const books = React.useContext(UserContext);
   
   function getId({target}){
     setModal(!modal)
     setIndice(parseInt(target.value))
   }

   function exit(){
       setModal(false)
   }

   

    return (
    <>
              
    <div className="grid grid-cols-3 gap-4 mt-10 mb-5">
        {books.map((livros, index) =>  <div key={livros.id} class="shadow-lg rounded-2xl p-4 bg-gray-200 dark:bg-gray-900 w-64 m-auto relative ">
                <div class="w-full h-full text-center">
                    <div class="flex h-full flex-col justify-between">
                        <div  className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-90">
                        <img className="rounded-lg shadow-md " src={livros.cover}/>
                        
                        </div>
                        
                        <p class="font-extrabold text-gray-900 dark:text-white text-lg mt-4">
                           {livros.title}
                        </p>
                        <p class="font-bold dark:text-gray-50 text-gray-700 text-xs font-thin py-2 px-6">
                            {livros.author}
                        </p>
                    </div>
                    <button onClick={getId} value={index} type="button" class="mt-2 w-10 h-10 text-base font-medium rounded-full text-white bg-gray-800 transition duration-500 ease-in-out bg-indigo-700 hover:bg-indigo-900 transform hover:-translate-y-1 hover:scale-90">
                    +
            </button>
                </div>
            </div>
        )}
    </div>
    
    {modal && <Modal indice={indice} getId={getId}/>}
    
    </>
  
    )
}

export default Cards;