import { Link } from 'react-router-dom';
import './styles.css'

export default function DescCard() {
    return (
        <div className='base-card desc-card'>
            <button className='desc-card-button'><Link to="/catalog">Ver catálogo</Link></button>
            <div className='description-container'>
                <p>Comece agora a navegar</p>
            </div>
        </div>
    );
}