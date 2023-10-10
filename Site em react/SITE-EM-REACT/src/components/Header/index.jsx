import './Header.css'

const Header = () => {
    return (
        <body className='corpo'>
            <div className="empresa">
                <img src="../images/Logo.png" alt="Logo da empresa" />
                <h2>Furniro</h2>
            </div>
            <div className="botoes">
                <a href="#">Home</a>
                <a href="#">Shop</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
            </div>
            <div className="icones">
                <img src="../images/User.png" alt="Ícone usuário" />
                <img src="../images/Search.png" alt="Ícone de busca" />
                <img src="../images/Heart.png" alt="Ícone favoritos" />
                <img src="../images/Cart.png" alt="Ícone de de carrinho" />
            </div>
        </body>
    )
}

export default Header;