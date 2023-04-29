import { createStyles, Avatar, Text, Group, Title, Space, Container, rem } from '@mantine/core';
import { IconPhoneCall, IconAt } from '@tabler/icons-react';

const useStyles = createStyles((theme) => ({
  icon: {
    color: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[5],
  },

  title: {
    fontSize: rem(34),
    fontWeight: 900,

    [theme.fn.smallerThan('sm')]: {
      fontSize: rem(24),
    },
  },

  highlight: {
    color: theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 4 : 6],
  },

  people_container: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gap: rem(20),

    [theme.fn.smallerThan("md")]: {
      gridTemplateColumns: "1fr",
      gridAutoFlow: "row",
      gap: rem(25),
      maxWidth: "60%",
      margin: "0 auto"
    }
  },
  name: {
    
  },
}));

function UserCard ({ avatar, name, title, phone, email }) {
  const { classes } = useStyles();
  return (
    <div>
      <Group noWrap>
        <Avatar src={avatar} size={140} radius="md" />
        <div>
          <Text fz="md" tt="uppercase" fw={700} c="dimmed">
            {title}
          </Text>

          <Text fz="lg" fw={500} className={classes.name}>
            {name}
          </Text>

        {/*  <Group noWrap spacing={10} mt={3}>
            <IconAt stroke={1.5} size="1rem" className={classes.icon} />
            <Text fz="xs" c="dimmed">
              {email}
            </Text>
          </Group>

          <Group noWrap spacing={10} mt={5}>
            <IconPhoneCall stroke={1.5} size="1rem" className={classes.icon} />
            <Text fz="xs" c="dimmed">
              {phone}
            </Text>
          </Group> */}
        </div>
      </Group>
    </div>
  );
}

export default function PeopleList () {
  const { classes } = useStyles();

  const peopleData = [
    {
      avatar: "/img/1-Elver.jpg",
      title: "Gerente General",
      name: "Elver Mosso"
    },
    {
      avatar: "/img/2-cesar.jpg",
      title: "Ingeniero Civil",
      name: "Cesar Avellaneda"
    },
    {
      avatar: "/img/3-sergio.jpg",
      title: "Ingeniero Industrial",
      name: "Sergio Herrera"
    },
    {
      avatar: "/img/4-johana.jpg",
      title: "Ingeniera Civil",
      name: "Johana Gutierrez"
    },
    {
      avatar: "/img/5-astrid.jpg",
      title: "Supervisora HSE",
      name: "Astrid Parra"
    },
  ]

  return (
    <Container size="lg" py="xl">
      <Title order={2} className={classes.title} ta="center" mt="sm">
        Conoce a nuestro equipo de <Text className={classes.highlight} component='strong'>profesionales</Text>
      </Title>

      <div className={classes.people_container} style={{ marginTop: "70px"}}>
        {peopleData.map(person => (
          <UserCard key={`person-${person.name}`} {...person} />
        ))}
      </div>

    </Container>
  )
}