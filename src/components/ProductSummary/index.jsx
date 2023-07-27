import './styles.css'
import { Shelf } from '../Shelf'
import ProductImage1 from '../../assets/images/product-image1.png'
import ProductImage2 from '../../assets/images/product-image2.png'


export const ProductSummary = () => {

    const products = [
        {
            Id:1, 
            name: 'Faux Suede Mini Skirt',
            price: 500,
            description: 'A faux suede mini skirt featuring exposed button-front closures and panel seam construction.',
            image: ProductImage1,
            colors: ['#DEAC71', '#D37164', '#6497D3', '#3C3B79']

        },
        {
            Id:2, 
            name: 'Ruched Rose Print Mini Skirt',
            price: 320,
            description: 'A satin mini skirt featuring an allover floral print, ruched side with self-tie closure, concealed back zipper, and a flounce hem.',
            image: ProductImage2,
            colors:  ['#353535', '#D84E4B', '#CFC9B0', '#EAE9E5']
        },
        {
            Id: 3, 
            name: 'Faux Suede Mini Skirt',
            price: 500,
            description: 'A faux suede mini skirt featuring exposed button-front closures and panel seam construction.',
            image: ProductImage1,
            colors: ['#DEAC71', '#D37164', '#6497D3', '#3C3B79']
        },
        {
            Id: 4, 
            name: 'Ruched Rose Print Mini Skirt',
            price: 320,
            description: 'A satin mini skirt featuring an allover floral print, ruched side with self-tie closure, concealed back zipper, and a flounce hem.',
            image: ProductImage2,
            colors: ['#353535', '#D84E4B', '#CFC9B0', '#EAE9E5']
        }
    ]

    console.log('products', products)
    return (
        <div className='shelf'>
            <h1 className='shelf-title'>As mais pedidas</h1>
        <ul>
        {products.map((item, index) => (
                    <Shelf
                        key={index}
                        description={item.description}
                        name={item.name}
                        price={item.price}
                        image={item.image}
                        colors={item.colors} 
                    />
                ))}
            </ul>
        </div>
    )
}