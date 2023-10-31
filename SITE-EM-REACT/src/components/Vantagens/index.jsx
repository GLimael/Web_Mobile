import './Vantagens.css';

export default function Vantagens () {
    return (
        <div className='vantagens'>
            <div className='vantagem'>
                <img src="./images/trofeu.png" alt="Troféu" />
                <div className='vantagensDescricao'>
                    <h4>High Quality</h4>
                    <p>crafted from top materials</p>
                </div>
            </div>
            <div className='vantagem'>
                <img src="./images/selo.png" alt="Selo" />
                <div className='vantagensDescricao'>
                    <h4>Warranty Protection</h4>
                    <p>Over 2 years</p>
                </div>
            </div>
            <div className='vantagem'>
                <img src="./images/pacote.png" alt="Pacote" />
                <div className='vantagensDescricao'>
                    <h4>Free Shipping</h4>
                    <p>Order over 150 $</p>
                </div>
            </div>
            <div className='vantagem'>
                <img src="./images/suporte.png" alt="Suporte" />
                <div className='vantagensDescricao'>
                    <h4>24 / 7 Support</h4>
                    <p>Dedicated support</p>
                </div>
            </div>
        </div>
    )
}