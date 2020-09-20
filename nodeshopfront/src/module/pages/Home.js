import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import axios from "axios";

//assets
import image from '../../images/fondo.jpg'
import pipe from '../../images/pipe.jpg'
import lucas from '../../images/lucas.jpg'

import './styles/Home.css'



class Home extends React.Component{

    render(){
        return(
            <React.Fragment>
                {/* HEADER */}
              
                    <div className="main-background">
                <div className="background-overlay text-white py-5">
                    <div className="container">
                    <div className="row d-flex h-100">
                        <div className="col-sm-6 text-center justify-content-center align-self-center">
                        <h1>
                            Bienvenido a ElectroStore
                        </h1>
                        <p>Elit reiciendis aspernatur obcaecati accusantium corporis? Mollitia eius ratione excepturi.</p>
                        <a href="#" className="btn btn-outline-secondary btn-lg text-white">
                            Acerca de nosotros
                        </a>
                        </div>
                        <div className="col-sm-6">
                            {/* <img src={image} className="img-fluid d-none d-sm-block" alt="Background"/> */}
                   
                        </div>
                        </div>
                    </div>
                    </div>
                    </div>
           
                {/* NEWSLETTER */}
                <div id="newsletter" className="bg-dark text-white py-5">
                    <div className="container">
                        <div className="row">
                            
                                <div className="col-md-4">
                                    <input type="text" className="form-control form-control-lg" placeholder="Ingresa tu Nombre" />
                                </div>

                                <div className="col-md-4">
                                    <input type="email" className="form-control form-control-lg" placeholder="Ingresa tu Email" />
                                </div>

                                <div className="col-md-4">
                                    <button className="btn btn-primary btn-lg btn-block">
                                    Suscribe
                                    </button>
                                </div>
                            
                        </div>

                    </div>
                </div>

                {/* FEATURES */}

                <section className="py-5">
                    <div className="container">
                        <div className="row">
                        <div className="col-md-3">
                            <div className="card text-center border-primary">
                            <div className="text-card card-body">
                                <h3>Feature One</h3>
                                <p>
                                Amet alias a ipsa tempora ullam asperiores aperiam rem? 
                                </p>
                            </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card text-white bg-primary">
                            <div className="text-card card-body">
                                <h3>Feature Two</h3>
                                <p>
                                Amet alias a ipsa tempora ullam asperiores aperiam rem? 
                                </p>
                            </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card text-center border-primary">
                            <div className="text-card card-body">
                                <h3>Feature Three</h3>
                                <p>
                                Amet alias a ipsa tempora ullam asperiores 
                                </p>
                            </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card text-white bg-primary">
                            <div className="text-card card-body">
                                <h3>Feature Four</h3>
                                <p>
                                Amet alias a ipsa tempora ullam asperiores aperiam rem? 
                                </p>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </section>

                {/* ABOUT */}
                <section className="m5 text-center bg-light">
                    <div className="container">
                        <div className="row">
                        <div className="m-5">
                            <h3>Why this Product?</h3>
                            <p>
                            Consectetur dolor at delectus dolores fugiat! Rerum inventore cumque quidem corporis iusto temporibus nesciunt minima! Harum harum qui dolores natus dolore repudiandae quae animi aliquid nobis sed? Quod culpa quia?
                            </p>
                        </div>
                        </div>
                    </div>
                </section>

                {/* TEAM */}

                <section className="text-center team">
                    <div className="container p-5">
                    <h1 className="text-center text-white">Team</h1>
                    <p className="text-white">
                        Equipo de desarrollo altamente especializado y capacitado para implementar proyectos de cualquier tipo
                    </p> 
                    <div className="row justify-content-md-center">
                        <div className="col-lg-4">
                            <div className="team-card card">
                                <div className="mt-3 card-body">
                                <img src={pipe} className="img-fluid rounded-circle" />
                                <h3>Felipe Espinoza</h3>
                                <p>
                                    Ingeniero Civil Informático <br/>
                                </p>
                                <div className="d-flex flex-row justify-content-center">
                                    <div className="p-4">
                                    <a href="https://www.facebook.com/pipe.sebastian.7/" target="_blank"><i className="fab fa-facebook-f"></i></a>
                                    </div>
                                    <div className="p-4">
                                    <a href="#"><i className="fab fa-twitter"></i></a>
                                    </div>
                                    <div className="p-4">
                                    <a href="#"><i className="fab fa-instagram"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="team-card card">
                                <div className="mt-3 card-body">
                                <img src={lucas} className="img-fluid rounded-circle" />
                                <h3>Lucas Péndola</h3>
                                <p>
                                    Ingeniero Civil Informático <br/>
                                    

                                </p>
                                <div className="d-flex flex-row justify-content-center">
                                    <div className="p-4">
                                    <a href="https://www.facebook.com/profile.php?id=1363447873 " target="_blank"><i className="fab fa-facebook-f"></i></a>
                                    </div>
                                    <div className="p-4">
                                    <a href="#"><i className="fab fa-twitter"></i></a>
                                    </div>
                                    <div className="p-4">
                                    <a href="#"><i className="fab fa-instagram"></i></a>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    </div>
                </section>

            </React.Fragment>
        )
    }

    
}

export default Home