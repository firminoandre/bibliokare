import React from 'react'
import UserContext from './UserContext'

export const Cards = () => {
   const [indice, setIndice] = React.useState(null)
   const books = React.useContext(UserContext);


   function getId({target}){
     setIndice(parseInt(target.value))
     console.log(indice)
   }

    return (
    <>
                
    <div className="grid grid-cols-3 gap-4 mt-10 mb-5">
        {books.map((livros, index) =>  <div key={livros.id} class="shadow-lg rounded-2xl p-4 bg-gray-200 dark:bg-gray-900 w-64 m-auto relative ">
                <div class="w-full h-full text-center">
                    <div class="flex h-full flex-col justify-between">
                        <img className="rounded-lg shadow-md" src={livros.cover}/>
                        <p class="font-bold text-gray-900 dark:text-white text-lg mt-4">
                           {livros.title}
                        </p>
                        <p class="dark:text-gray-50 text-gray-700 text-xs font-thin py-2 px-6">
                            {livros.author}
                        </p>
                    </div>
                    <button onClick={getId} value={index} type="button" class="w-10 h-10 text-base font-medium rounded-full text-white bg-gray-800 hover:bg-indigo-900">
                    +
            </button>
                </div>
            </div>
        )}
    </div>
    </>
    )
}
