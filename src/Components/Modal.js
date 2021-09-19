import React from 'react'
import UserContext from '../Hooks/UserContext'

export const Modal = (props) => {
    const books = React.useContext(UserContext)
    
    
    return (
        <div className="transition duration-150 ease-in-out">
      <div className="modal">
        <div className="overlay"></div>
        <div className="overscroll-auto modal-content mt-10">
            <div className="grid justify-items-center">
          <h2 className="font-extrabold text-4xl text-gray-900 dark:text-white text-lg mt-4">{books[props.indice].title}</h2>
          <p className="font-bold text-xl text-gray-900 dark:text-white  mt-2">{books[props.indice].author}</p>
          </div>
          <img src={books[props.indice].cover} className="rounded-lg shadow-md" width="100" height="100"/>
          <p className="text-justify mt-5">{books[props.indice].description}</p>
          
          <button onClick={props.getId} type="button" class="py-2 px-4 mt-4 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
              Fechar
          </button>
          
        </div>
      </div>
      </div>
    )
}
