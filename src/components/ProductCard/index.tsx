import {ReactComponent as ProductImage} from 'assets/images/car-card.svg'
import './styles.css'

export default function ProductCard() {
    return (
        <div className='base-card product-card'>
            <div className='card-image-container'>
                <ProductImage/>
            </div>
            <div className='description-container'>
                <h3>Audi Supra TT</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, nisi</p>
            </div>
            <button className='product-card-button'>Comprar</button>
        </div>
    );
}