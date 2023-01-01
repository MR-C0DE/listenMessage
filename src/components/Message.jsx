import { useState } from 'react';
import './../styles/Message.css';

const Message = () =>{
    const [inputPrenom, setInputPrenom] = useState('');
    const [inputNom, setInputNom] = useState('');
    const [inputCourriel, setInputCourriel] = useState('');
    const [inputConfirmation, setInputConfirmation] = useState('');
    const [inputRaison, setInputRaison] = useState('');
    const [textMessage, setTextMessage] = useState('');
    const [error, setError] = useState(<div></div>);

    const setValuePrenom = (event)=>{
        event.preventDefault();
        setInputPrenom(event.target.value);
    }
    const setValueNom = (event)=>{
        event.preventDefault();
        setInputNom(event.target.value);
    }
    const setValueCourriel = (event)=>{
        event.preventDefault();
        setInputCourriel(event.target.value);
    }
    const setValueConfirmation = (event)=>{
        event.preventDefault();
        setInputConfirmation(event.target.value);
    }
    const setValueRaison = (event)=>{
        event.preventDefault();
        setInputRaison(event.target.value);
    }
    const setValueTextMessage = (event)=>{
        event.preventDefault();
        setTextMessage(event.target.value);
    }

    const interaction = async () =>{
        const dataSend = {
            action_effectuee : 'Envoi',
            element : 'message',
            lien : '#',
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

    const handleClickBtn = async () => {

        if(inputCourriel === inputConfirmation){

        
            const data = {
                prenom : inputPrenom,
                nom    : inputNom,
                courriel: inputCourriel,
                raison : inputRaison,
                message : textMessage
            }

            let response = await fetch('/api/message', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(data)
            });
    
            if(response.ok) {

                setError(
            <div>
                <p style={{color:'green'}}>Le message est envoyé.</p>
            </div>);

            //Envoi de l'interaction
            interaction();
               
            }
            else {
                // Afficher dans l'inferface graphique
                setError(
                    <div>
                        <p style={{color:'red'}}>{response.statusText}</p>
                    </div>
                    );
            }
        }else{
            setError(
            <div>
                <p style={{color:'red'}}>Une erreur est survenue, verifiez votre courriel.</p>
            </div>
            );
        }
    }
    return (
        <div className='Message'>

            <div className='message-content wrapper'>

                <form noValidate>
                    <div>
                        <h3>Contactez-nous</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
                    </div>
                    <div>
                        <input onInput={setValuePrenom} placeholder='Entrez votre prenom' type="text" name="prenom" id="prenom" />
                    </div>
                    <div>
                        <input onInput={setValueNom} placeholder='Entrez votre nom' type="text" name="nom" id="nom" />
                    </div>
                    <div>
                        <input onInput={setValueCourriel} placeholder='Entrez votre courriel' type="text" name="couriel" id="name" />
                    </div>
                    <div>
                        <input onInput={setValueConfirmation} placeholder='Confirmation du courriel' type="text" name="courriel-confirmation" id="courriel-confirmation" />
                    </div>
                    <div>
                       <select onChange={setValueRaison} name="selection" id="" >
                            <option value="0">Choisir une raison</option>
                            <option value="Je souhaite me faire baptiser au nom du Seigneur Jesus-Christ">Je souhaite me faire baptiser au nom du Seigneur Jesus-Christ</option>
                            <option value="autre">Autre</option>
                       </select>
                    </div>
                    <div>
                        <textarea onInput={setValueTextMessage} placeholder='Entrez un message'  name="message" id="msg-content" cols="30" rows="10"></textarea>
                    </div>
                    {error}
                    <div>
                        <input onClick={handleClickBtn} type="button" value={"Envoyer le message"} name="btn-sub" id="btn-sub" />
                    </div>
                </form>

            </div>

        </div>
    );
}

export default Message;