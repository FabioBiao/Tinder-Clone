import React, { useState, useEffect } from 'react';
import TinderCard from 'react-tinder-card';
import database from './firebase';
import "./TinderCards.css";

// import axios from './axios';
// import { SwipeableDrawer } from '@material-ui/core';

function TinderCards() {
    //const people = []; 
    //people.push('Sadic','pedro'); bellow equivalent in react

    //const [people, setPeople] = useState([]);
    //setPeople([...setPeople,'Sadic','Samgy']);

    //initialize variable
    // const [people, setPeople] = useState([
    //     {
    //         name: 'Sadic Samgy',
    //         url: 'https://upload.wikimedia.org/wikipedia/commons/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg'
    //     },
    //     {
    //         name: 'Pedro Moreira',
    //         url: 'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTY2NzA3ODE3OTgwMzcyMjYw/jeff-bezos-andrew-harrer_bloomberg-via-getty-images.jpg'
    //     },
    //     {
    //         name: 'Sandra Bullok',
    //         url: 'https://i.pinimg.com/564x/a4/2f/39/a42f39daacbb47e15a3545f937dc8cb3.jpg'
    //     },
    // ]);

    const [people, setPeople] = useState([]);
    // bellow piece of code which runs based on a condition
    useEffect(() => {
        // get data from firebase DB and set 
        /*         
            database.collection('people').onSnapshot(snapshot => {
            setPeople(
                snapshot.docs.map(doc => doc.data())
            );
        }); */

        // to prevent multiple listeners
        const unsubscribe = database.collection('people').onSnapshot(snapshot => {
            setPeople(
                snapshot.docs.map(doc => doc.data())
            );
        });

        return () => {
            unsubscribe();
        }

    }, []);  // leaving empty array means it will run once when component loads and never again

    const swiped = (direction, nameToDelete) => {
        console.log("removing: " + nameToDelete);
        // setLastDirection(direction);
    }

    const outOfFrame = (name) => {
        console.log(name + 'left the screen');
    }

    return (
        <div className="tinderCards">
            <div className="tinderCards__cardContainer">
                {people.map(person => (
                    // <h1>{person.name}</h1>
                    <TinderCard
                        className="swipe"
                        key={person.name}
                        preventSwipe={['up', 'down']}
                        onSwipe={(dir) => swiped(dir, person.name)}
                        onCardleftScreen={() => outOfFrame(person.name)}
                    >
                        {/*  no-repeat center */}
                        <div style={{ background: `url(${person.url})` }} className="card">
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>

        </div>
    )
}

export default TinderCards
