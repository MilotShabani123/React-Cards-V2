import { useState } from "react";
import Card from "./Card";
import { MdAccountCircle } from "react-icons/md";
import './Card.css'

const data = () => {
    const [cards, setCards] = useState([
    {
        id: 1,
        date: '3.3.0 (14/05/2018)',
        content: 'File system changed from Dokan to CBFS Host Cloud Drive is now a network drive Various bug fixes and stability improvments Share permissions re-design and optimization',
        button: 'New',
        color: '#5fe35f'
    },
    {
        id: 2,
        date: '3.1.0 (20/05/2015)',
        content: 'Introducing Host Cloud Drive - virtual drive functionality New Share options amd managment New, more user friendly design Sync optimizations Various performance improvments and bug fixes ',
        button: 'Fix',
        color: '#1010c4'
    },
    {
        id: 3,
        date: '3.1.0 (20/05/2015)',
        content: 'Added Settings for Auto Start Added Update Notification Speed Optimization Bug fixes',
        button: 'Improvment',
        color: '#8a2be2'
    },
    {
        id: 4,
        date: '3.3.0 (14/05/2018)',
        content: 'File system changed from Dokan to CBFS Host Cloud Drive is now a network drive Various bug fixes and stability improvments Share permissions re-design and optimization',
        button: 'New',
        color: '#5fe35f'
    },
    {
        id: 5,
        date: '3.1.0 (20/05/2015)',
        content: 'Introducing Host Cloud Drive - virtual drive functionality New Share options amd managment New, more user friendly design Sync optimizations Various performance improvments and bug fixes',
        button: 'Fix',
        color: '#1010c4'
    },
    {
        id: 6,
        date: '3.1.0 (20/05/2015)',
        content: 'Added Settings for Auto Start Added Update Notification Speed Optimization Bug fixes',
        button: 'Improvment',
        color: '#8a2be2'
    },
    ]);
  return (
        <div className="map-holder">
            {cards.map((card) => {
                return(
                    <div className="container">
                        <div className="card">
                            <h2 id="date">{card.date}</h2>
                            <div className="main-content">
                                <button className="button2" style={{backgroundColor: card.color}}>{card.button}</button>
                                    <div className='img'>
                                        <MdAccountCircle/>
                                    </div>
                                    <h3>Kevin Joe</h3>
                            </div>
                            <p>{card.content}</p>
                            <button className='button'>Download</button>
                        </div>
                    </div>
                );
            })}
        </div>
  )
}

export default data