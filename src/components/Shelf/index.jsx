import './styles.css'

export const Shelf = ({ name, image, description, price, colors }) => {

    return (
        <>
            <li className='product-item'>
                <img src={image} alt={name} />
                <div className='color-selector'>
                    {colors?.map((item, index) => (<div key={index} style={{backgroundColor: item}}></div>))}
                </div>
                <div className='product-summary-infos'>
                    <div className='product-price'>
                        <p>{price?.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
                    </div>
                    <div className='product-name'>
                        {name}
                    </div>
                    <div className='product-description'>
                        <p>{description}</p>
                    </div>
                    <div className='buy-button'>
                        <button>
                            Adicionar
                        </button>
                    </div>
                </div>
            </li>


        </>
    )
}