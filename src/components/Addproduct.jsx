import React from 'react'
import Navbar from './Navbar'

const Addproduct = () => {
  return (
    <div>
        <Navbar/>
        <div className="container bg-info p-5 mt-3 rounded">
            <div className="row ">
                <div className="col col-12">

                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-4 col-lg-4">

                            <label htmlFor="" className="form-label">Product Code</label>
                            <input type="number" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-4 col-lg-4">

                            <label htmlFor="" className="form-label">Product Name</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-4 col-lg-4">

                            <label htmlFor="" className="form-label">Product Catagory</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-4 col-lg-4">

                            <label htmlFor="" className="form-label">Product Description</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-4 col-lg-4">

                            <label htmlFor="" className="form-label">Stock Quantity</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-4 col-lg-4">

                            <label htmlFor="" className="form-label">Product Brand</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-4 col-lg-4">

                            <label htmlFor="" className="form-label">Product Rating</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-4 col-lg-4">

                            <label htmlFor="" className="form-label">Product Image url</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-4 col-lg-4">

                            <label htmlFor="" className="form-label">Product Price</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-4 col-lg-4">

                            <label htmlFor="" className="form-label">Discount </label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col col-12 text-center g-3">

                            <button className="btn btn-success">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>




    </div>
  )
}

export default Addproduct