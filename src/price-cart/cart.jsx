import React, {component} from "react";
import Cart from './cartUI';

class Carts extends component{
    render(){
        return(
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-4">
                        <Cart title="$0"/>
                    </div>
                    <div className="col-md-4">
                        <Cart/>
                    </div>
                    <div className="col-md-4">
                        <Cart/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Carts;