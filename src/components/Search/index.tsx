import './styles.css'

export default function Search() {
    return (
        <div className='base-card search'>
            <div className='search-container'>
                <input type="text" placeholder='Digite sua busca' />
                <button className='search-button'>Buscar</button>
            </div>
        </div>
    );
}