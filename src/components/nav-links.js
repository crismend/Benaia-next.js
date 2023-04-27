const links = [
  { link: "/", label: "Inicio" },
  { link: "/nosotros", label: "Nosotros" },
  { link: "/servicios", label: "Servicios" },
  { link: "#", label: "Equipos de alquiler",
    links: [
      {
        link: "/maquinaria-liviana",
        label: "Maquinaria Liviana",
        icon: "/img/cargador.png"
      },
      {
        link: "/maquinaria-pesada",
        label: "Maquinaria Pesada",
        icon: "/img/cavador.png"
      },
      {
        link: "/transporte-de-carga",
        label: "Transporte de carga y Tracto camiones",
        icon: "/img/camion-volquete.png"
      }
    ]
  },
  { link: "/portafolio", label: "Portafolio" },
  { link: "/trabaja-con-nosotros", label: "Trabaja con nosotros" }
]

export { links }