import { useState } from "react";
import './ProductForm.scss'
import { Chat } from '../Chat/Chat'


export const ProductForm = () => {

    const URI = 'http://localhost:8080/api/productos'
    const [productData, setProductData] = useState()
    const [prodId, setProdId] = useState('');


    //Manejar el estado
    const handleFormChange = (e) => {
        setProductData({
            ...productData,
            [e.target.name]: e.target.value
        })
    };

    // Submitir nuevo producto
    const onHandleSubmit = async (e) => {
        e.preventDefault()
        const res = await fetch(URI, {
            withCredntials: true,
            credentials: 'include',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({productData})
        }).then(res => res.json())
        if (res.status === 401) {
            console.log('ERROR 401')
        } else {
            console.log('Producto agregado')
        }
    }

    const onHandleUpdate = async (e) => {
        e.preventDefault()
        //await axios.put(URI + `/${prodId}`, productData).then((response)=>console.log(response))
        console.log(URI + `/${prodId}`)
        console.log(prodId)
        const res = await fetch(URI  + `/${prodId}`, {
            withCredntials: true,
            credentials: 'include',
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({productData})
        }).then(res => res.json())
        if (res.status === 401) {
            console.log('ERROR 401')
        } else {
            console.log(res)
        }
    }

    const onHandleDelete = async (e) => {
        e.preventDefault()
        //await axios.delete(URI + `/${prodId}`).then((response)=>console.log(response))
        const res = await fetch(URI  + `/${prodId}`, {
            withCredntials: true,
            credentials: 'include',
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(res => res.json())
        if (res.status === 401) {
            console.log('ERROR 401')
        } else {
            console.log(res)
        }
    }

    const inputs = [
        { name: "nombre", placeholder: "Nombre" },
        { name: "tipo", placeholder: "Categoría" },
        { name: "precio", placeholder: "Precio" },
        { name: "imagen", placeholder: "URL imagen" },
        { name: "stock", placeholder: "Stock" },

    ];

    return (
        <div className="row container-fluid justify-content-center mt-5 mx-0">
            <div className='cart-summary col-8 col-md-5 my-auto pt-3'>
                <form className="row justify-content-center" name='formMensaje' id='formMensaje'>
                    <div className="col-11 mb-2 row justify-content-center">
                        {inputs.map((input) => (
                            <div key={input.name} className="form-group row">
                                <input
                                    className="mb-1"
                                    name={input.name}
                                    placeholder={input.placeholder}
                                    type="text"
                                    onChange={handleFormChange}
                                />
                            </div>
                        ))}
                    </div>
                    <div className="cart-btn mt-100 row justify-content-center">
                        <button type='submit' className='mt-1 col-5 btnCheckout mb-3 fs-4' onClick={onHandleSubmit}>Submitir</button>
                    </div>
                    <div className="form-group row justify-content-center">
                        <input className="mb-1 col-7" name='id' type="text" placeholder='ID' onChange={(e) => setProdId(e.target.value)} />
                    </div>
                    <div className="cart-btn mt-100 row justify-content-center">
                        <button type='submit' className='mt-1 col-5 btnCheckout mb-1 fs-4' onClick={onHandleUpdate}>Actualizar</button>
                    </div>
                    <div className="cart-btn mt-100 row justify-content-center">
                        <button type='submit' className='mt-1 col-5 btnCheckout mb-1 fs-4' onClick={onHandleDelete}>Eliminar</button>
                    </div>
                </form>
            </div>

            <div className="container my-auto row justify-content-center">
                <Chat />
            </div>
        </div>
    )
}