import { useEffect } from 'react';
import { useState } from 'react';
import './../styles/Content.css';
import getProxyApi from './function/proxy';

const Content = () => {
    const [data, setData] = useState([]);
    const getData = async ()=> {
        const headers = { 'Content-Type': 'application/json' }
        fetch(getProxyApi('contenu'), { headers })
            .then(response => response.json())
            .then(dataRecevied=> setData(dataRecevied));
            return true;
    }
    useEffect(()=>{
        getData();
    },[]) 

    const interaction = async (event) =>{
        const tableau = event.target.getAttribute('class').split('+');
        const titre = document.getElementById('titre' + event.target.getAttribute('id')).textContent;
        const dataSend = {
            action_effectuee :tableau[0],
            element : titre,
            lien : tableau[1],
            date_interaction: new Date().toUTCString()
        }

        let response =  await fetch('/interaction', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(dataSend)
        });

        if(!response.ok){
           alert('Une erreur est survenue!');
        }
    }
    


    return (
        <div className="Content">
            <div className='content-element wrapper'>


                {data.map((element, i)=>{
                    return (
                        <div key={i + 'e'} className='element'>
                            <div className='tableau'>
                                <h2>{element.title}</h2>
                            </div>
                            <div className='description'>
                                <h3 id={'titre' + element.id_contenu}>{element.sousTitle}</h3>
                                <p>{element.paragraph} </p>
                            </div>
                            <div>
                            <a onClick={interaction} href={element.link_about}><button id={element.id_contenu} className={'A-propos+' + element.link_about}>En savoir plus</button></a>
                            </div>
                        </div>
                    );
                })}

            </div>
        </div>
    );
}

export default Content;