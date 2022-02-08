import React from 'react';
import MeetupItem from './MeetupItem';

const MeetupList = ({meetups}) => {
  return (
    <div className="p-5 w-full flex flex-col items-center justify-center">
        {
            meetups.map((item) => <MeetupItem key={item.id} item={item}/>)
        }
    </div>
  )
};

export default MeetupList;
