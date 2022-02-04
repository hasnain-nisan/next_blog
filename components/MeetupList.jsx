import React from 'react';
import MeetupItem from './MeetupItem';

const MeetupList = () => {

  const numb = [1,2,3,4,5,6]

  return (
    <div className="p-5 w-full flex flex-col items-center justify-center">
        {
            numb.map((num, index) => <MeetupItem key={index}/>)
        }
    </div>
  )
};

export default MeetupList;
