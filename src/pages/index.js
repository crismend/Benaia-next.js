import { AboutUs } from "@/components/about-us";
import Features from "@/components/features";
import Hero from "@/components/hero";
import { Divider } from "@mantine/core";

export default function Home () {

  return (
    <>
      <Hero />
      <AboutUs />
      <Divider my="xl"/>
      <Features />
    </>  
  )
}