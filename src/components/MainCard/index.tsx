import {ReactComponent as CarImage} from 'assets/images/car-header.svg'
import './styles.css'

export default function MainCard() {
    return (
        <div className='base-card main-card'>
            <div className='card-image-container'>
                <CarImage/>
            </div>
            <div className='description-container'>
                <h3>O carro perfeito para você</h3>
                <p>Conheça nossos carros e dê mais um passo na realização do seu sonho</p>
            </div>
        </div>
    );
}