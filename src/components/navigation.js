import Link from 'next/link'
import { useState } from 'react';
import {
  createStyles,
  Header,
  Menu,
  Group,
  Center,
  Burger,
  Container,
  rem
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import {
  IconChevronDown,
} from '@tabler/icons-react';
import Image from 'next/image';

const useStyles = createStyles((theme) => ({
  header: {
    display:"flex",
    justifyContent:"center",
    alignItems: "center",
    background: "#f2f2f2",
    padding: "5px"
  },
  inner: {
    height: rem(56),
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  container: {width: "100%"},

  links: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  burger: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: `${rem(8)} ${rem(12)}`,
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    },
  },

  linkLabel: {
    marginRight: rem(5),
  },

  dropdown_mobile: {
    justifyContent: "start"
  }
}));

export default function HeaderMenu({ links }) {
  const [opened, { toggle }] = useDisclosure(false);
  const [userMenuOpened, setUserMenuOpened] = useState(false);
  const { classes, cx } = useStyles();

  const items = links.map((link) => {
    const menuItems = link.links?.map((item) => (
      <Menu.Item key={item.link}>
        <Link href={item.link} style={{color: "#000", textDecoration: "none"}}>
          {item.label}
        </Link>
      </Menu.Item>
    ));

    if (menuItems) {
      return (
        <Menu key={link.label} trigger="hover" transitionProps={{ exitDuration: 0 }} withinPortal>
          <Menu.Target>
            <Link
              href={link.link}
              className={classes.link}
              onClick={(event) => event.preventDefault()}
            >
              <Center className={classes.dropdown_mobile}>
                <span className={classes.linkLabel}>
                  {link.label}
                </span>
                <IconChevronDown size="0.9rem" stroke={1.5} />
              </Center>
            </Link>
          </Menu.Target>
          <Menu.Dropdown>{menuItems}</Menu.Dropdown>
        </Menu>
      );
    }

    return (
      <a
        key={link.label}
        href={link.link}
        className={classes.link}
      >
        {link.label}
      </a>
    );
  });

  return (
    <Header height={65} className={classes.header}>
      <Container className={classes.container}>
        <div className={classes.inner}>
          <Image src="/img/LOGO-BENAIA.png" alt="logo" width={65} height={60}  />
          <Group spacing={5} className={classes.links}>
            {items}
          </Group>
          
          <Menu
            width={260}
            position="bottom-end"
            transitionProps={{ transition: 'pop-top-right' }}
            onClose={() => setUserMenuOpened(false)}
            onOpen={() => setUserMenuOpened(true)}
            withinPortal
          >
            <Menu.Target>
              <Burger opened={opened} onClick={toggle} className={cx(classes.burger, { [classes.userActive]: userMenuOpened })} size="sm" />
            </Menu.Target>
            <Menu.Dropdown>
              {items}
            </Menu.Dropdown>
          </Menu>
        </div>
      </Container>
    </Header>
  );
}