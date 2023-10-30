import './Card.css'

export default function Card (props) {
    return (
        <div className='card'>
            <img src={props.imagem} alt="Imagem de fundo" />
            <div className='conteudoCard'>
                <h4>{props.titulo}</h4>
                <p className='descricaoConteudo'>{props.descricao}</p>
                <div className='PrecoConteudo'>
                    <p className='precoNovo'>{props.precoNovo}</p>
                    <p className='precoAntigo'>{props.precoAntigo}</p>
                </div>
            </div>
        </div>
    )
}