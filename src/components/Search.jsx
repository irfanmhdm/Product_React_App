import React from 'react'
import Navbar from './Navbar'

const Search = () => {
  return (
    <div>
        <Navbar/>
        <div className="container">
            <div className="row">
                <div className="col col-12">

                    <div className="row">
                        <div className="col col-12 col-sm-6">

                            <label htmlFor="" className="form-label">Product Code</label>
                            <input type="number" className="form-control" />
                        </div>
                        <div className="col col-12 g-3">

                            <div className="col col-12 g-3">

                            <button className="btn btn-primary">Search</button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    </div>
  )
}

export default Search