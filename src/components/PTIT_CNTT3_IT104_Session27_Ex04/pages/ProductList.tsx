import React, { useEffect } from 'react'
import { useSearchParams } from "react-router";

function ProductList() {
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('search') || '';
    console.log(query);
    const [searchTerm, setSearchTerm] = React.useState(query);

    useEffect(() => {
        const q = searchParams.get('search') || '';
        setSearchTerm(q);
    }, [searchParams]);

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    }
    const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const q = searchTerm.trim();
        if (q)
            setSearchParams({ query: q });
        else
            setSearchParams({});

    }
    return (
        <div>
            <form action="" onSubmit={handleSearchSubmit} className='mb-4'>
                <input type="text" placeholder='Nhập sản phẩm cần tìm' value={searchTerm} onChange={handleSearchChange} />
                <button className='btn btn-primary'>Search</button>
            </form>
        </div>
    )
}

export default ProductList
