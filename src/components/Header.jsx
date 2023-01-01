import './../styles/Header.css';

const Header = () => {
    return (
        <div className='Header'>
            <div className='title wrapper'>
                <h1>Écoutez le Message</h1>
                <p>Notre Seigneur sera bientôt là, etes-vous pret pour le grande depart?</p>
            </div>

            <div className='legende wrapper'>
                <p> 
                    <cite> 
                        252 Puissions-nous tous être prêts pour l’Enlèvement, tous dans l’Arche de sécurité, en Jésus-Christ, 
                        ayant été baptisés dans un seul Esprit pour y entrer; là-haut, 
                        à l’étage supérieur, où nous pouvons voir la Lumière de l’Évangile qui brille 
                        à l’intérieur et ponctuer chaque Parole d’un “amen”. Accorde-le, 
                        Seigneur. Bénis-les et garde-les. Je les réclame pour qu’ils soient des 
                        joyaux pour Ta couronne, Seigneur, au Nom de Jésus. Amen.
                    </cite>
                    <br/>
                    <span className='auteur'>
                        62-0531 - Le conflit entre Dieu et Satan<br/>
                        Rev. William Marrion Branham
                    </span>
                </p>
            </div>
            
        </div>
    );
}

export default Header;