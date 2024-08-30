import React, { useState } from 'react'
import'./AddProduct.css'
import upload_ico from '../../assets/upload_icon.svg'

const AddProduct = () => {

    const [image, setImage] = useState(false);
    const [productDetails, setProductDetails] = useState({
        name: '',
        original_price: '',
        discounted_price: '',
        category: 'Electronics',
        image: ''
    })

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    }

    const changeHandler = (e) => {
        setProductDetails({...productDetails, [e.target.name]: e.target.value})
    }

    const Add_Product = async () => {
        console.log(productDetails);
        let resData;
        let product = productDetails;

        let formData = new FormData();
        formData.append('product', image);

        await fetch('https://simple-goods-server.onrender.com/uploads', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
            },
            body: formData,
        }).then((resp) => resp.json()).then((data) => {resData = data});
        if(resData.success) {
            product.image = resData.image_url;
            console.log(product);
            await fetch('https://simple-goods-server.onrender.com/addproduct', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(product),
            }).then((resp) => resp.json()).then((data) => {
                data.success?alert('Product added successfully!'):alert('Failed to add product');
            })
        }
    }



  return (
    <div className='addproduct'>
        <div className="addproduct-itemfield">
            <p>Product Title</p>
            <input value={productDetails.name} onChange={changeHandler} type="text" name="name" placeholder='Enter Product Here' />
        </div>
        <div className="addproduct-price">
            <div className="addproduct-itemfield">
                <p>Price</p>
                <input value={productDetails.original_price} onChange={changeHandler} type="text" name="original_price" placeholder='Type Here'/>
            </div>
            <div className="addproduct-itemfield">
                <p>Sale Price</p>
                <input value={productDetails.discounted_price} onChange={changeHandler} type="text" name="discounted_price" placeholder='Type Here'/>
            </div>
        </div>
        <div className="addproduct-itemfield">
            <p>Product Category</p>
            <select value={productDetails.category} onChange={changeHandler} name="category" className='category-selector'>
                <option value="Electronics">Electronics</option>
                <option value="Fashion">Fashion</option>
                <option value="Sports">Sports</option>
                <option value="Accessories">Accessories</option>
            </select>
        </div>
        <div className="addproduct-itemfield">
            <label htmlFor="file-input">
                <img src={image?URL.createObjectURL(image):upload_ico} alt="" className='addproduct-upload-img' />
            </label>
            <input onChange={handleImageChange} type="file" name='image' id='file-input' hidden />
        </div>
        <button onClick={() => {Add_Product()}} className="addproduct-btn">ADD</button>

    </div>
  )
}

export default AddProduct
