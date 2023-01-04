import { useState } from 'react';
import { useEffect } from 'react';
import './../styles/Suggestion.css';
import getProxyApi from './function/proxy';

const Suggestion = () => {
    const [data, setData] = useState({sermon:'', link_listen:'', link_download:''});
    const getData = async ()=> {
        const headers = { 'Content-Type': 'application/json' }
        fetch(getProxyApi('api/suggestion'), { headers })
            .then(response => response.json())
            .then(dataRecevied=> setData(dataRecevied));
            return true;
    }
    useEffect(()=>{
        getData();
    },[])

    const interaction = async (event) =>{
        const id = event.target.getAttribute('id');
        const dataSend = {
            action_effectuee : id,
            element : data.sermon,
            lien : (id === 'lecture')? data.link_listen : data.link_download,
            date_interaction: new Date().toUTCString()
        }

        let response =  await fetch(getProxyApi('interaction'), {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(dataSend)
        });

        if(!response.ok){
           alert('Une erreur est survenue!');
        }
    }
    
    return (
        <div className="Suggestion">

            <div className="content wrapper">

                <h2>Suggestion</h2>
                <p>Ecoutez le sermon : <span>{data.sermon}</span></p>
                <div className='btn'>
                    <a onClick={interaction}  rel="noopener" target={'_blank'} href={data.link_listen}><button id='lecture' className='press'>Appuyer sur Play pour ecouter la predication</button></a>
                    <a onClick={interaction}  href={data.link_download}><button id='telecharger' className='download'>Telecharger le sermons</button></a>
                </div>
            </div>
        </div>
    );
}

export default Suggestion;