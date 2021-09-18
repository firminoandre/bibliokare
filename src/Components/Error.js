import React from 'react'

export const Error = () => {
    return (
        <div class="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-primary flex flex-col items-center justify-center">
            <div class="w-25 bg-white rounded-lg shadow-md p-20">
                <div class="w-16 mx-auto relative -mt-10 mb-3">
                     <img class="-mt-1" src="https://cdn.icon-icons.com/icons2/1380/PNG/512/vcsconflicting_93497.png" alt="cookie"/>
        </div>
      <p class="w-full sm:w-48 text-extrabold block leading-normal text-gray-800 text-md mb-3">
         Por algum motivo, encontramos um erro na página, volte mais tarde!
      </p>
      <div class="flex items-center justify-between">
      </div>
  </div>
</div>
    )
}
