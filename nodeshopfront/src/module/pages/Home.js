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
                            this is the title or a phrase relate to the product
                        </h1>
                        <p>Elit reiciendis aspernatur obcaecati accusantium corporis? Mollitia eius ratione excepturi.</p>
                        <a href="#" className="btn btn-outline-secondary btn-lg text-white">
                            Read More
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
                <div id="newsletter" class="bg-dark text-white py-5">
                    <div className="container">
                        <div className="row">
                            
                                <div className="col-md-4">
                                    <input type="text" class="form-control form-control-lg" placeholder="Enter your Name" />
                                </div>

                                <div className="col-md-4">
                                    <input type="email" class="form-control form-control-lg" placeholder="Enter your Email" />
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

                <section class="py-5">
                    <div class="container">
                        <div class="row">
                        <div class="col-md-3">
                            <div class="card text-center border-primary">
                            <div class="text-card card-body">
                                <h3>Feature One</h3>
                                <p>
                                Amet alias a ipsa tempora ullam asperiores aperiam rem? 
                                </p>
                            </div>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="card text-white bg-primary">
                            <div class="text-card card-body">
                                <h3>Feature Two</h3>
                                <p>
                                Amet alias a ipsa tempora ullam asperiores aperiam rem? 
                                </p>
                            </div>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="card text-center border-primary">
                            <div class="text-card card-body">
                                <h3>Feature Three</h3>
                                <p>
                                Amet alias a ipsa tempora ullam asperiores 
                                </p>
                            </div>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="card text-white bg-primary">
                            <div class="text-card card-body">
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
                <section class="m5 text-center bg-light">
                    <div class="container">
                        <div class="row">
                        <div class="m-5">
                            <h3>Why this Product?</h3>
                            <p>
                            Consectetur dolor at delectus dolores fugiat! Rerum inventore cumque quidem corporis iusto temporibus nesciunt minima! Harum harum qui dolores natus dolore repudiandae quae animi aliquid nobis sed? Quod culpa quia?
                            </p>
                        </div>
                        </div>
                    </div>
                </section>

                {/* TEAM */}

                <section class="text-center team">
                    <div class="container p-5">
                    <h1 class="text-center text-white">Team</h1>
                    <p class="text-white">
                        Equipo de desarrollo altamente especializado y capacitado para implementar proyectos de cualquier tipo
                    </p>
                    <div class="row">
                        <div class="col-lg-4">
                            <div class="team-card card">
                                <div class="mt-3 card-body">
                                <img src={pipe} class="img-fluid rounded-circle w-50" />
                                <h3>Felipe Espinoza</h3>
                                <p>
                                    Ingeniero Civil Informático <br/>
                                </p>
                                <div class="d-flex flex-row justify-content-center">
                                    <div class="p-4">
                                    <a href="#"><i class="fab fa-facebook-f"></i></a>
                                    </div>
                                    <div class="p-4">
                                    <a href="#"><i class="fab fa-twitter"></i></a>
                                    </div>
                                    <div class="p-4">
                                    <a href="#"><i class="fab fa-instagram"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>

                        <div class="col-lg-4">
                            <div class="team-card card">
                                <div class="mt-3 card-body">
                                <img src={lucas} class="img-fluid rounded-circle w-50" />
                                <h3>Lucas Péndola</h3>
                                <p>
                                    Ingeniero Civil Informático <br/>
                                    

                                </p>
                                <div class="d-flex flex-row justify-content-center">
                                    <div class="p-4">
                                    <a href="#"><i class="fab fa-facebook-f"></i></a>
                                    </div>
                                    <div class="p-4">
                                    <a href="#"><i class="fab fa-twitter"></i></a>
                                    </div>
                                    <div class="p-4">
                                    <a href="#"><i class="fab fa-instagram"></i></a>
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