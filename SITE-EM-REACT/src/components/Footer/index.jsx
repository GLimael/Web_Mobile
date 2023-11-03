import './Footer.css';

export default function Footer () {
    return (
        <div className='footer'>
            <div className='footerConteudoPrincipal'>
                <h4>Funiro.</h4>
                <div className='footerP'>
                    <p>400 University Drive Suite 200 Coral Gables,</p>
                    <p>FL 33134 USA</p>
                </div>
            </div>
            <div className='footerConteudo'>
                <h5>Link</h5>
                <div className='footerBotoes'>
                    <a href="#">Home</a>
                    <a href="#">Shop</a>
                    <a href="#">About</a>
                    <a href="#">Contract</a>
                </div>
            </div>
            <div className='footerConteudo'>
                <h5>Help</h5>
                <div className='footerBotoes'>
                    <a href="#">Payment Options</a>
                    <a href="#">Returns</a>
                    <a href="#">Privacy Policies</a>
                </div>
            </div>
            <div className='footerConteudo'>
                <h5>Newsletter</h5>
                <div className='newsletter'>
                    <input type="text" placeholder='Enter Your Email Address' />
                    <a href="#">Subscribe</a>
                </div>
            </div>
        </div>
    )
}