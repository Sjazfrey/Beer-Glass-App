import React, { Component } from 'react';
import glasses from '../Glasses.js';
export default class pictures extends Component {

    render() {
        return(
                <div id="pictures">
            
             {glasses.map((value, index) => {
                
                 return<div>
                     <h2 className="name text-center">{value.name}</h2>
<div>
                    <img className="image" src={value.image}></img>

                        <h3 className="info">{value.information}</h3>
</div>
                        </div>

             })}
             


                </div>







        )

}

}




            