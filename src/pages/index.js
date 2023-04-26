import HeaderMenu from "@/components/navigation"
/*
  { link: string; label: string; links: { link: string; label: string }[] }[]
*/
export default function Home () {
  const links = [
    { link: "/", label: "Inicio" },
    { link: "/nosotros", label: "Nosotros" },
    { link: "/servicios", label: "Servicios" },
    { link: "#", label: "Equipos de alquiler", links: [
      { link: "/maquinaria-liviana", label: "Maquinaria Liviana", icon: "/" },
      { link: "/maquinaria-pesada", label: "Maquinaria Pesada", icon: "/" },
      { link: "/transporte-de-carga", label: "Transporte de carga y Tracto camiones", icon: "/" }
    ] },
    { link: "/portafolio", label: "Portafolio" },
    { link: "/trabaja-con-nosotros", label: "Trabaja con nosotros" }
  ]

  return <HeaderMenu links={links} />
}