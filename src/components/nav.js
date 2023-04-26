import Image from 'next/image'
import { Navbar, Container } from 'react-bootstrap'

export default function Nav () {
    return (
        <Navbar bg='light' expand='lg' fixed='top'>
            <Container>
                <Navbar.Brand>
                    <Image
                        src="/img/LOGO-BENAIA.png"
                        alt="Logo Benaia"
                        className="img-logo"
                        width={50}
                        height={50}
                    />
                    <strong className="company">INGENIERIA S.A.S</strong>
                </Navbar.Brand>
            </Container>

            
        </Navbar>    
    )
}

export function Navi() {
    return (
        <nav className="navbar navbar-expand-lg bg-light p-1 sticky-top">
            <div className="container">
                <a className=" navbar-brand" href="#">
                    <Image
                        src="/img/LOGO-BENAIA.png"
                        alt="Logo Benaia"
                        className="img-logo"
                        width={50}
                        height={50}
                    />
                    <span className="company">INGENIERIA S.A.S</span>
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">
                                Inicio
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#nosotros">
                                Nosotros
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#servicios">
                                Servicios
                            </a>
                        </li>
                        <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle"
                                href="#"
                                id="navbarDropdown"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Equipos de Alquiler
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li>
                                    <a className="dropdown-item" href="/maquinariaPesada">
                                        {" "}
                                        <Image className="iconoMaquinaria" src="/img/cavador.png" alt="Icono de maquina excavadora" width={40} height={40} />{" "}
                                        Maquinaria pesada
                                    </a>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li>
                                    <a className="dropdown-item" href="/maquinariaLiviana">
                                        {" "}
                                        <Image
                                            className="iconoMaquinaria"
                                            src="/img/cargador.png"
                                            alt="Icono de maquina excavadora" width={40} height={40}
                                        />{" "}
                                        Maquinaria liviana
                                    </a>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li>
                                    <a className="dropdown-item" href="/cargaPesada">
                                        {" "}
                                        <Image
                                            className="iconoMaquinaria"
                                            src="/img/camion-volquete.png"
                                            alt="Icono de maquina excavadora" width={40} height={40}
                                        />{" "}
                                        Transporte de cargas y Tracto Camiones
                                    </a>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#portafolio">
                                Portafolio
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/trabaja">
                                Trabaja con nosotros
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}