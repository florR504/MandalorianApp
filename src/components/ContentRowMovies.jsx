import Cart from "./Cart";


function ContentRowMovies(){
  const cartValues = [{titulo :'Movies in data base', color: 'blue', cifra: 21, icono: "fas fa-film fa-2x text-gray-300" },
                     {titulo :'Total awards', color: '#1cc88a', cifra: 79, icono: "fas fa-award fa-2x text-gray-300" },
                     {titulo :'Actors quantity', color: '#f6c23e', cifra: 49, icono: "fas fa-user fa-2x text-gray-300" }]
    return(
        <div class="row">
       
        <Cart cartValues = {cartValues}/>
        <div class="col-md-4 mb-4">
          <div class="card border-left-success shadow h-100 py-2">
            <div class="card-body">
              <div class="row no-gutters align-items-center">
                <div class="col mr-2">
                  <div class="text-xs font-weight-bold text-success text-uppercase mb-1">
     
                    Total awards
                  </div>
                  <div class="h5 mb-0 font-weight-bold text-gray-800">79</div>
                </div>
                <div class="col-auto">
                  <i class="fas fa-award fa-2x text-gray-300"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-4 mb-4">
          <div class="card border-left-warning shadow h-100 py-2">
            <div class="card-body">
              <div class="row no-gutters align-items-center">
                <div class="col mr-2">
                  <div class="text-xs font-weight-bold text-warning text-uppercase mb-1">
                    Actors quantity
                  </div>
                  <div class="h5 mb-0 font-weight-bold text-gray-800">49</div>
                </div>
                <div class="col-auto">
                  <i class="fas fa-user fa-2x text-gray-300"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    )

}
export default ContentRowMovies;