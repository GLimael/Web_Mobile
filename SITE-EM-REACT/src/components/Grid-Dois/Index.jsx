import Card from './Card';
import './Grid-Dois.css';


export default function GridDois () {
    return (
        <div className='gridDois'>
            <h3>Our Products</h3>
            <div className='primeirasImg'>
                <Card imagem='./images/grid2-img1.png' titulo='Syltherine' descricao='Stylish cafe chair' precoNovo='Rp 2.500.000' precoAntigo='3.500.000'/>
                <Card imagem='./images/grid2-img2.png' titulo='Leviosa' descricao='Stylish cafe chair' precoNovo='Rp 2.500.000'/>
                <Card imagem='./images/grid2-img3.png' titulo='Lolito' descricao='Luxury big sofa' precoNovo='Rp 7.000.000' precoAntigo='14.000.000'/>
                <Card imagem='./images/grid2-img4.png' titulo='Respira' descricao='Outdoor bar table and stool' precoNovo='Rp 500.000'/>
            </div>
            <div className='segundasImg'>
                <Card imagem='./images/grid2-img5.png' titulo='Grifo' descricao='Night lamp' precoNovo='Rp 1.500.000'/>
                <Card imagem='./images/grid2-img6.png' titulo='Muggo' descricao='Small mug' precoNovo='Rp 150.000'/>
                <Card imagem='./images/grid2-img7.png' titulo='Pingky' descricao='Cute bed set' precoNovo='Rp 7.000.000' precoAntigo='14.000.000'/>
                <Card imagem='./images/grid2-img8.png' titulo='Potty' descricao='Minimalist flower pot' precoNovo='Rp 500.000'/>
            </div>
            <a href="#">See More</a>
        </div>
    )
}