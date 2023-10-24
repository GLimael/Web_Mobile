import './Formulario.css'
import CampoTexto from '../CampoTexto';

const Formulario = () => {
    return (
        <section className='forms'>
            <form>
                <h2>Preencha seus dados para roubarmos eles: </h2>
                <CampoTexto label='Nome' placeholder='Digite o seu Nome' />
                <CampoTexto label='Sobrenome' placeholder='Digite o seu Sobrenome' />
                
            </form>
        </section>
    );
};

export default Formulario;