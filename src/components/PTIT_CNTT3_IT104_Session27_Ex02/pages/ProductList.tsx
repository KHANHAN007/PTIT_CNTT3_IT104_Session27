import { NavLink } from 'react-router-dom';

export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
}
export const products: Product[] = [
    { id: 1, name: 'Sản phẩm 1', price: 100, description: 'Mô tả sản phẩm 1' },
    { id: 2, name: 'Sản phẩm 2', price: 200, description: 'Mô tả sản phẩm 2' },
    { id: 3, name: 'Sản phẩm 3', price: 300, description: 'Mô tả sản phẩm 3' },
];
function ProductList() {

    return (
        <div>
            <div className='bg-[#007BFF] p-4 rounded mb-4 flex flex-col items-center'>
                <h1 className="text-2xl font-bold  text-white-800 text-white">Trang chi tiết sản phẩm</h1>
                <p className="text-white">Danh sách sản phẩm</p>
            </div>
            <div>
                <h2 className="text-xl font-bold mb-2 text-white-800">Danh sách sản phẩm</h2>
                <ul className='flex gap-4'>
                    {products.map((product) => (
                        <li key={product.id} className="mb-2 border p-4 rounded shadow-md w-1/3">
                            <h3 className="text-lg font-semibold text-white-800">{product.name}</h3>
                            <p className="text-white-600">{product.price}</p>
                            <NavLink to={`/product/` + product.id} className="text-blue-500 hover:underline">
                                Xem chi tiết
                            </NavLink>  
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default ProductList
