import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import MeetupItem from './MeetupItem';

const data = [
  {
    id: uuidv4(),
    image: "https://images.unsplash.com/photo-1644241687200-eadaf7601290?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
    title: "How a Government Shutdown Affects Sculpture Festivals",
    address: "8265 Edgemont Street Voorhees, NJ 08043"
  },
  {
    id: uuidv4(),
    image: "https://images.unsplash.com/photo-1638913972776-873fc7af3fdf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
    title: "How Did Digital Currency wBecome the Best? Find Out.",
    address: "34 E. Glen Eagles Drive Avon Lake, OH 44012"
  },
  {
    id: uuidv4(),
    image: "https://images.unsplash.com/photo-1644178285226-3876a7a29794?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
    title: "How Libaries Made Me a Better Person",
    address: "9607 Swanson St. Cape Coral, FL 33904"
  },
  {
    id: uuidv4(),
    image: "https://images.unsplash.com/photo-1644242833305-18665cc0bf75?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
    title: "9 Ways Knowing About Music Will Land You in Jail",
    address: "31 South Ann St. Eugene, OR 97402"
  },
  {
    id: uuidv4(),
    image: "https://images.unsplash.com/photo-1640622308059-b9982ca75964?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
    title: "Shocking Ways Software Developments Will Make You a Better Dancer",
    address: "266 Gainsway Drive Blacksburg, VA 24060"
  }
]

const MeetupList = () => {

  

  return (
    <div className="p-5 w-full flex flex-col items-center justify-center">
        {
            data.map((item) => <MeetupItem key={item.id} item={item}/>)
        }
    </div>
  )
};

export default MeetupList;
