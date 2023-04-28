import { createStyles, Overlay, Container, Title, Button, Text, rem } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  hero: {
    position: 'relative',
    backgroundImage:
      'url(/img/header2.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },

  container: {
    height: rem(700),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    // paddingBottom: `calc(${theme.spacing.xl} * 6)`,
    zIndex: 1,
    position: 'relative',

    [theme.fn.smallerThan('sm')]: {
      height: rem(500),
      paddingBottom: `calc(${theme.spacing.xl} * 3)`,
      justifyContent: 'center',
      alignItems: 'center',
    },
  },

  title: {
    color: theme.white,
    fontSize: rem(55),
    fontWeight: 900,
    lineHeight: 1.1,
    width: "50%",

    [theme.fn.smallerThan('sm')]: {
      fontSize: rem(45),
      width: '100%',
      textAlign: 'center',
    },

    [theme.fn.smallerThan('xs')]: {
      fontSize: rem(40),
      marginTop: rem(50)
    },
  },

  description: {
    color: theme.white,
    maxWidth: 600,
    fontSize: rem(23),

    [theme.fn.smallerThan('sm')]: {
      maxWidth: '100%',
      fontSize: theme.fontSizes.md,
      textAlign: 'center',
    },
  },

  control: {
    marginTop: `calc(${theme.spacing.xl} * 1.5)`,

    [theme.fn.smallerThan('sm')]: {
      width: '40%',
      height: rem(40),
      fontSize: theme.fontSizes.xl,
    },
  },
}));

export default function Hero () {
  const { classes } = useStyles();

  return (
    <div className={classes.hero}>
      <Overlay
        gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)"
        opacity={1}
        zIndex={0}
      />
      <Container className={classes.container}>
        <Title className={classes.title} size="3xl">Alquila la mejor maquinaria pesada para tu proyecto con <strong className="gradient-text">Benaia Ingeniería S.A.S.</strong></Title>
        <Text className={classes.description} size="xl" mt="xl">
          En Benaia, no solo ofrecemos servicios de desarrollo, ingeniería, arquitectura y obra civil de alto nivel, sino que también te proporcionamos acceso a la mejor maquinaria pesada para que tu proyecto sea un éxito. {/* Con nuestro servicio de alquiler, obtendras maquinaria de alta calidad y un equipo de profesionales altamente capacitados que te ayudarán en todo momento. */}
        </Text>

        <Button variant="gradient" size="xl" radius="xl" className={classes.control}>
          Contactanos
        </Button>
      </Container>
    </div>
  );
}