import Link from "next/link"

import { createStyles, Title, Text, Button, Container, rem } from '@mantine/core';
import { Dots } from './Dots';

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: 'relative',
    paddingTop: rem(120),
    paddingBottom: rem(80),

    [theme.fn.smallerThan('sm')]: {
      paddingTop: rem(80),
      paddingBottom: rem(60),
    },
  },

  inner: {
    position: 'relative',
    zIndex: 1,
  },

  dots: {
    position: 'absolute',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],

    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  dotsLeft: {
    left: 0,
    top: 0,
  },

  title: {
    textAlign: 'center',
    fontWeight: 800,
    fontSize: rem(40),
    letterSpacing: -1,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    marginBottom: theme.spacing.xs,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,

    [theme.fn.smallerThan('xs')]: {
      fontSize: rem(28),
      textAlign: 'left',
    },
  },

  highlight: {
    color: theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 4 : 6],
  },

  description: {
    textAlign: 'center',

    [theme.fn.smallerThan('xs')]: {
      textAlign: 'left',
      fontSize: theme.fontSizes.md,
    },
  },

  controls: {
    marginTop: theme.spacing.lg,
    display: 'flex',
    justifyContent: 'center',

    [theme.fn.smallerThan('xs')]: {
      flexDirection: 'column',
    },
  },

  control: {
    '&:not(:first-of-type)': {
      marginLeft: theme.spacing.md,
    },

    [theme.fn.smallerThan('xs')]: {
      height: rem(42),
      fontSize: theme.fontSizes.md,

      '&:not(:first-of-type)': {
        marginTop: theme.spacing.md,
        marginLeft: 0,
      },
    },
  },
}));

export function AboutUs () {
  const { classes } = useStyles();

  return (
    <Container className={classes.wrapper} size={1400}>
      <Dots className={classes.dots} style={{ left: 0, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 60, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 0, top: 140 }} />
      <Dots className={classes.dots} style={{ right: 0, top: 60 }} />

      <div className={classes.inner}>
        <Title className={classes.title}>
          Un poco mas sobre{' '}
          <Text component="span" className={classes.highlight} inherit>
            nosotros
          </Text>
        </Title>

        <Container p={0} size={1000} style={{ margin: "50px auto"}}>
          <Text size="lg" color="dimmed" className={classes.description}>
          Desde nuestra fundación en 2015, en Benaia Ingeniería nos hemos dedicado a proveer maquinaria y equipos de construcción de alta calidad a través de servicios de alquiler, compra y venta. Con una trayectoria impecable en el sector petrolero e industrial, hemos ampliado nuestro portafolio para incluir la construcción de viviendas, edificios y obras públicas como puentes, acueductos, alcantarillados y estructuras metálicas. Además, contamos con experiencia en el mantenimiento de vías y edificaciones. En Benaia Ingeniería, nuestro compromiso es brindar soluciones de calidad a nuestros clientes y ayudarles a lograr sus objetivos en cada proyecto.
          </Text>
        </Container>

        <div className={classes.controls}>
          <Button component="a" href="/" className={classes.control} size="lg" variant="default" color="gray">
            Ver nuestros equipos
          </Button>
          <Button component="a" href="/" className={classes.control} size="lg">
            Contactanos
          </Button>
        </div>
      </div>
    </Container>
  );
}