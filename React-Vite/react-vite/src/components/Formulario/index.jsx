import './Formulario.css'
import CampoTexto from '../CampoTexto';

const Formulario = () => {
    return (
        <section className='formulario'>
            <form>
                <h2>Preencha seus dados para roubarmos eles: </h2>
                <CampoTexto label='Nome' placeholder='Digite o seu Nome' />
                
            </form>
        </section>
    );
};

export default Formulario;