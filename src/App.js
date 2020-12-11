import React from "react";
import Data from "./data"

function App() {
  return (
    <div>
      <h1>Hello World</h1>

      <div className="container-fluid">

        <div className="row mx-auto">

        {
          Data.games.map(game => {
            return (
              <div className="col-lg-4 col-sm-6">

                <div className="card text-center my-3">

                  <div className="card-body game-image" style={{backgroundImage: "url(" + game.image + ")"}}>

                  </div>                   
                  
                  <div className="card-footer">
                    <h4>{game.name}</h4>  
                    <p>{game.description.substring(0, 50)+"..."}</p>
                    <h6 className="my-4">£{game.price}</h6>
                    <a className="btn btn-primary">View More</a>
                  </div>     


                </div>


              </div>
            )
          })
        }
        </div>

      </div>            

    </div>
  );
}

export default App;
