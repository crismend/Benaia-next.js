import {
  createStyles,
  Badge,
  Group,
  Title,
  Text,
  Card,
  SimpleGrid,
  Container,
  rem,
} from '@mantine/core';
import {
  Icon3dCubeSphere,
  IconBuildingCastle,
  IconHeartHandshake,
  IconSpeakerphone,
  IconStars,
  IconTractor
} from '@tabler/icons-react';

const featuresData = [
  {
    title: 'Arquitectura y obra civil',
    description:
      'This dust is actually a powerful poison that will even make a pro wrestler sick, Regice cloaks itself with frigid air of -328 degrees Fahrenheit',
    icon: IconBuildingCastle,
  },
  {
    title: 'Proyectos de Ingenieria',
    description:
      'People say it can run at the same speed as lightning striking, Its icy body is so cold, it will not melt even if it is immersed in magma',
    icon: Icon3dCubeSphere,
  },
  {
    title: 'Alquiler de maquinaria',
    description:
      'They’re popular, but they’re rare. Trainers who show them off recklessly may be targeted by thieves',
    icon: IconTractor,
  },
  {
    title: 'Consultorias',
    description:
      'They’re popular, but they’re rare. Trainers who show them off recklessly may be targeted by thieves',
    icon: IconSpeakerphone,
  },
  {
    title: 'Apoyo Tecnico',
    description:
      'They’re popular, but they’re rare. Trainers who show them off recklessly may be targeted by thieves',
    icon: IconHeartHandshake,
  },
  {
    title: 'Calidad',
    description:
      'They’re popular, but they’re rare. Trainers who show them off recklessly may be targeted by thieves',
    icon: IconStars,
  },
];

const useStyles = createStyles((theme) => ({
  title: {
    fontSize: rem(34),
    fontWeight: 900,

    [theme.fn.smallerThan('sm')]: {
      fontSize: rem(24),
    },
  },

  description: {
    maxWidth: 1000,
    margin: 'auto',

    '&::after': {
      content: '""',
      display: 'block',
      backgroundColor: theme.fn.primaryColor(),
      width: rem(45),
      height: rem(2),
      marginTop: theme.spacing.sm,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },

  highlight: {
    color: theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 4 : 6],
  },

  card: {
    border: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1]
    }`,
  },

  cardTitle: {
    '&::after': {
      content: '""',
      display: 'block',
      backgroundColor: theme.fn.primaryColor(),
      width: rem(45),
      height: rem(2),
      marginTop: theme.spacing.sm,
    },
  },
}));

export default function Features () {
  const { classes, theme } = useStyles();
  const features = featuresData.map((feature) => (
    <Card key={feature.title} shadow="md" radius="md" className={classes.card} padding="xl">
      <feature.icon size={rem(50)} stroke={2} color={theme.fn.primaryColor()} />
      <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
        {feature.title}
      </Text>
      <Text fz="sm" c="dimmed" mt="sm">
        {feature.description}
      </Text>
    </Card>
  ));

  return (
    <Container size="lg" py="xl" id="servicios">
      <Group position="center">
        <Badge variant="filled" size="lg">
          los mejores en toda colombia
        </Badge>
      </Group>

      <Title order={2} className={classes.title} ta="center" mt="sm">
        Todos nuestros <Text className={classes.highlight} component='strong'>servicios</Text>
      </Title>

      <Text c="dimmed" className={classes.description} ta="center" mt="md">
      En Benaia Ingeniería, nos dedicamos a proporcionar servicios de alta calidad para el desarrollo de proyectos de arquitectura, obra civil e ingeniería. Nuestro equipo especializado en consultoría de obras públicas, construcción y arquitectura se esfuerza por garantizar el éxito de cada proyecto que emprendemos. Además, ofrecemos alquiler de maquinaria de todo tipo con excelente garantía y una relación calidad-precio inmejorable. Confía en nosotros para llevar tu proyecto al siguiente nivel.
      </Text>

      <SimpleGrid cols={3} spacing="xl" mt={50} breakpoints={[{ maxWidth: 'md', cols: 1 }]}>
        {features}
      </SimpleGrid>
    </Container>
  );
}