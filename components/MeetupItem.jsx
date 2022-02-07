import React from 'react';
import {useRouter} from 'next/router'

const MeetupItem = ({item}) => {

   const router = useRouter()

   const showDetailsHandler = () => {
      router.push('/meetup/' + item.id)
   }

  return (
   <div className="w-full md:w-1/2 px-4">
      <div className="shadow-lg bg-white rounded-lg overflow-hidden mb-10">
         <img
            src={item.image}
            alt="image"
            className="w-full h-[300px] object-cover"
         />
         <div className="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
            <h3 className="text-2xl mb-5">
               {item.title}
            </h3>
            <p className="text-base text-gray-700 leading-relaxed mb-7">
               {item.address}
            </p>
            <button
               onClick={showDetailsHandler}
               className="
               inline-block py-2 px-7
               border border-[#E5E7EB]
               rounded-full
               text-base text-body-color
               font-medium
               hover:border-primary hover:bg-primary hover:text-white
               transition
               hover:shadow-md bg-blue-400
               "
            >
               View Details
            </button>
         </div>
      </div>
   </div>
  )
};

export default MeetupItem;
