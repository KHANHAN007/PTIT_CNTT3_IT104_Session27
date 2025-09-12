import { NavLink, useParams } from "react-router-dom";
import type { Product } from "./ProductList";

type Props = {
    products: Product[];
}
function ProductDetail({ products }: Props) {
    const params = useParams<any>();
    const id = params.id ? Number(params.id) : undefined;
    const productId = products.find((product) => product.id === id);
    return (
        <div>
            <div className='bg-[#007BFF] p-4 rounded mb-4 flex flex-col items-center'>
                <h1 className="text-2xl font-bold  text-white-800 text-white">Trang chi tiết sản phẩm</h1>
                <p className="text-white">Chi tiết sản phẩm</p>
            </div>
            <div>
                <h2>{productId?.name}</h2>
                <p>Giá: {productId?.price}</p>
                <p>Mô tả: {productId?.description}</p>
                <NavLink to={`/product`} className="text-blue-500 hover:underline">Quay lại</NavLink>
            </div>
        </div>
    )
}

export default ProductDetail
