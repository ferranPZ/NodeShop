import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import axios from "axios";
 
import "sweetalert2/src/sweetalert2.scss";
 
//import { withRouter } from "react-router-dom";
const baseUrl = "http://localhost:3000";

class EditComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataProducto: {},
      dataCategoria: [],
      idProducto: "",
      nombre: "",
      descripcion: "",
      unidades: "",
      valor: "",
      estado: "",
      categoria_idcategoria: "",
      stringCategoria: "",
      //imagen modal
      file: null,
      profileImg: "../dist/img/user2-160x160.jpg",
      fileName: "",
      changeImage: false,
      //validation
      validationNombre: "",
      validationDescripcion: "",
      validationUnidades: "",
      validationValor: "",
      validationEstado: "",
      validationFile: "",
      validationCategoria: "",
      //
      categoriaSelectName: "",
      categoriaSelectId: "",
    };
 
  }
 
  
  componentDidMount() {
    let idProducto = this.props.match.params.id;
    const url = baseUrl + "/producto?id=" + idProducto;
    const url2 = baseUrl + "/categoria";
    const requestOne = axios.get(url);
    const requestTwo = axios.get(url2);
    axios
      .all([requestOne, requestTwo])
      .then(
        axios.spread((...responses) => {
          const responseOne = responses[0];
          const responseTwo = responses[1];
          if (responseOne.status === 200 && responseTwo.status === 200) {
            const data = responseOne.data.body[0];
            const data2 = responseTwo.data;
            this.setState({
              dataProducto: data,
              dataCategoria: data2.body,
              idProducto: data.idProducto,
              nombre: data.nombre,
              descripcion: data.descripcion,
              unidades: data.unidades,
              valor: data.valor,
              file: data.imagen,

              categoria_idcategoria: data.categoria_idcategoria,
              stringCategoria: data2.nombre,
            });
          } else {
            alert("Error web service");
          }
        })
      )
      .catch((errors) => {
        alert("Error server " + errors);
      });
  }
  render() {
     
    return (
     <div className="row">
  <div className="col-12 col-sm-6">
    <h3 className="d-inline-block d-sm-none">LOWA Men’s Renegade GTX Mid Hiking Boots Review</h3>
    <div className="col-12">
      <img src="../../dist/img/prod-1.jpg" className="product-image" alt="Product Image" />
    </div>
    <div className="col-12 product-image-thumbs">
      <div className="product-image-thumb active"><img src="../../dist/img/prod-1.jpg" alt="Product Image" /></div>
      <div className="product-image-thumb"><img src="../../dist/img/prod-2.jpg" alt="Product Image" /></div>
      <div className="product-image-thumb"><img src="../../dist/img/prod-3.jpg" alt="Product Image" /></div>
      <div className="product-image-thumb"><img src="../../dist/img/prod-4.jpg" alt="Product Image" /></div>
      <div className="product-image-thumb"><img src="../../dist/img/prod-5.jpg" alt="Product Image" /></div>
    </div>
  </div>
  <div className="col-12 col-sm-6">
    <h3 className="my-3">LOWA Men’s Renegade GTX Mid Hiking Boots Review</h3>
    <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terr.</p>
    <hr />
    <h4>Available Colors</h4>
    <div className="btn-group btn-group-toggle" data-toggle="buttons">
      <label className="btn btn-default text-center active">
        <input type="radio" name="color_option" id="color_option1" autoComplete="off" defaultChecked />
        Green
        <br />
        <i className="fas fa-circle fa-2x text-green" />
      </label>
      <label className="btn btn-default text-center">
        <input type="radio" name="color_option" id="color_option2" autoComplete="off" />
        Blue
        <br />
        <i className="fas fa-circle fa-2x text-blue" />
      </label>
      <label className="btn btn-default text-center">
        <input type="radio" name="color_option" id="color_option3" autoComplete="off" />
        Purple
        <br />
        <i className="fas fa-circle fa-2x text-purple" />
      </label>
      <label className="btn btn-default text-center">
        <input type="radio" name="color_option" id="color_option4" autoComplete="off" />
        Red
        <br />
        <i className="fas fa-circle fa-2x text-red" />
      </label>
      <label className="btn btn-default text-center">
        <input type="radio" name="color_option" id="color_option5" autoComplete="off" />
        Orange
        <br />
        <i className="fas fa-circle fa-2x text-orange" />
      </label>
    </div>
    <h4 className="mt-3">Size <small>Please select one</small></h4>
    <div className="btn-group btn-group-toggle" data-toggle="buttons">
      <label className="btn btn-default text-center">
        <input type="radio" name="color_option" id="color_option1" autoComplete="off" />
        <span className="text-xl">S</span>
        <br />
        Small
      </label>
      <label className="btn btn-default text-center">
        <input type="radio" name="color_option" id="color_option1" autoComplete="off" />
        <span className="text-xl">M</span>
        <br />
        Medium
      </label>
      <label className="btn btn-default text-center">
        <input type="radio" name="color_option" id="color_option1" autoComplete="off" />
        <span className="text-xl">L</span>
        <br />
        Large
      </label>
      <label className="btn btn-default text-center">
        <input type="radio" name="color_option" id="color_option1" autoComplete="off" />
        <span className="text-xl">XL</span>
        <br />
        Xtra-Large
      </label>
    </div>
    <div className="bg-gray py-2 px-3 mt-4">
      <h2 className="mb-0">
        $80.00
      </h2>
      <h4 className="mt-0">
        <small>Ex Tax: $80.00 </small>
      </h4>
    </div>
    <div className="mt-4">
      <div className="btn btn-primary btn-lg btn-flat">
        <i className="fas fa-cart-plus fa-lg mr-2" /> 
        Add to Cart
      </div>
      <div className="btn btn-default btn-lg btn-flat">
        <i className="fas fa-heart fa-lg mr-2" /> 
        Add to Wishlist
      </div>
    </div>
    <div className="mt-4 product-share">
      <a href="#" className="text-gray">
        <i className="fab fa-facebook-square fa-2x" />
      </a>
      <a href="#" className="text-gray">
        <i className="fab fa-twitter-square fa-2x" />
      </a>
      <a href="#" className="text-gray">
        <i className="fas fa-envelope-square fa-2x" />
      </a>
      <a href="#" className="text-gray">
        <i className="fas fa-rss-square fa-2x" />
      </a>
    </div>
  </div>
 <div className="row mt-4">
  <nav className="w-100">
    <div className="nav nav-tabs" id="product-tab" role="tablist">
      <a className="nav-item nav-link active" id="product-desc-tab" data-toggle="tab" href="#product-desc" role="tab" aria-controls="product-desc" aria-selected="true">Description</a>
      <a className="nav-item nav-link" id="product-comments-tab" data-toggle="tab" href="#product-comments" role="tab" aria-controls="product-comments" aria-selected="false">Comments</a>
      <a className="nav-item nav-link" id="product-rating-tab" data-toggle="tab" href="#product-rating" role="tab" aria-controls="product-rating" aria-selected="false">Rating</a>
    </div>
  </nav>
  <div className="tab-content p-3" id="nav-tabContent">
    <div className="tab-pane fade show active" id="product-desc" role="tabpanel" aria-labelledby="product-desc-tab"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae condimentum erat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed posuere, purus at efficitur hendrerit, augue elit lacinia arcu, a eleifend sem elit et nunc. Sed rutrum vestibulum est, sit amet cursus dolor fermentum vel. Suspendisse mi nibh, congue et ante et, commodo mattis lacus. Duis varius finibus purus sed venenatis. Vivamus varius metus quam, id dapibus velit mattis eu. Praesent et semper risus. Vestibulum erat erat, condimentum at elit at, bibendum placerat orci. Nullam gravida velit mauris, in pellentesque urna pellentesque viverra. Nullam non pellentesque justo, et ultricies neque. Praesent vel metus rutrum, tempus erat a, rutrum ante. Quisque interdum efficitur nunc vitae consectetur. Suspendisse venenatis, tortor non convallis interdum, urna mi molestie eros, vel tempor justo lacus ac justo. Fusce id enim a erat fringilla sollicitudin ultrices vel metus. </div>
    <div className="tab-pane fade" id="product-comments" role="tabpanel" aria-labelledby="product-comments-tab"> Vivamus rhoncus nisl sed venenatis luctus. Sed condimentum risus ut tortor feugiat laoreet. Suspendisse potenti. Donec et finibus sem, ut commodo lectus. Cras eget neque dignissim, placerat orci interdum, venenatis odio. Nulla turpis elit, consequat eu eros ac, consectetur fringilla urna. Duis gravida ex pulvinar mauris ornare, eget porttitor enim vulputate. Mauris hendrerit, massa nec aliquam cursus, ex elit euismod lorem, vehicula rhoncus nisl dui sit amet eros. Nulla turpis lorem, dignissim a sapien eget, ultrices venenatis dolor. Curabitur vel turpis at magna elementum hendrerit vel id dui. Curabitur a ex ullamcorper, ornare velit vel, tincidunt ipsum. </div>
    <div className="tab-pane fade" id="product-rating" role="tabpanel" aria-labelledby="product-rating-tab"> Cras ut ipsum ornare, aliquam ipsum non, posuere elit. In hac habitasse platea dictumst. Aenean elementum leo augue, id fermentum risus efficitur vel. Nulla iaculis malesuada scelerisque. Praesent vel ipsum felis. Ut molestie, purus aliquam placerat sollicitudin, mi ligula euismod neque, non bibendum nibh neque et erat. Etiam dignissim aliquam ligula, aliquet feugiat nibh rhoncus ut. Aliquam efficitur lacinia lacinia. Morbi ac molestie lectus, vitae hendrerit nisl. Nullam metus odio, malesuada in vehicula at, consectetur nec justo. Quisque suscipit odio velit, at accumsan urna vestibulum a. Proin dictum, urna ut varius consectetur, sapien justo porta lectus, at mollis nisi orci et nulla. Donec pellentesque tortor vel nisl commodo ullamcorper. Donec varius massa at semper posuere. Integer finibus orci vitae vehicula placerat. </div>
  </div>
</div>

</div>

    );
  }
 
 
}
export default EditComponent;
