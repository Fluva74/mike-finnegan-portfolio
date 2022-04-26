import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Chip from "@material-ui/core/Chip";
import Hidden from "@material-ui/core/Hidden";

const useStyles = makeStyles((theme) => ({
  mainTitle: {
    color: "#ffbf00",
  },
  cardMedia: {
    width: 160,
    flex: 2,
  },
  card: {
    display: "flex",
    justifyContent: "center",
    height: 300,
  },
  cardContent: {
    alignSelf: "center",
    flex: 5,
  },
  cardTitle: {
    fontSize: "1.8rem",
    fontWeight: "600",
  },
  icon: {
    color: "#ffbf00",
  },
  links: {
    display: "flex",
    marginRight: "auto",
  },
  notice: {
    fontSize: ".7em",
    color: "#8E846F",
  },
  tag: {
    color: "#838382",
    marginRight: 5,
    marginBottom: 5,
  },
}));

function TagsContainer({ tags }) {
  const styles = useStyles();
  return (
    <div>
      {tags.map((tag) => (
        <Chip
          className={styles.tag}
          label={tag}
          variant="outlined"
          key={tag}
        ></Chip>
      ))}
    </div>
  );
}

function Project({ title, description, imageUrl, tags, links, notice, }) {
  const styles = useStyles();
  return (
    <Grid item>
      <div>
        <Card className={styles.card}>
          <CardContent className={styles.cardContent}>
            <Typography className={styles.cardTitle} paragraph>
              {title}
            </Typography>
            <Typography variant="subtitle1" paragraph>
              {description}
            </Typography>
            <Hidden mdUp>
              <TagsContainer tags={tags} />
            </Hidden>
          </CardContent>
          <Hidden xsDown>
            <CardMedia className={styles.cardMedia} image={imageUrl}></CardMedia>
          </Hidden>
        </Card>
      </div>
      <CardActions>
        <div className={styles.links}>
          {links.map((linkItem) => (
            <IconButton href={linkItem.href} key={linkItem.href}>
              <linkItem.icon className={styles.icon} />
            </IconButton>
          ))}
        </div>
        <div>
          <Typography className={styles.notice} variant="h7" paragraph>
            {notice}
          </Typography>
        </div>
        <Hidden smDown>
          <TagsContainer tags={tags} />
        </Hidden>
      </CardActions>
    </Grid>
  );
}


export default function Projects() {
  const styles = useStyles();
  return (
    <Container maxWidth="md" id="projects">
      <Box pt={8} mb={2}>
        <Typography className={styles.mainTitle} variant="h4">Projects</Typography>
      </Box>
      <Grid container direction="column" spacing={4}>
        {projectsData.map((data) => (
          <Project {...data} key={data.title} />
        ))}
      </Grid>
    </Container>
  );
}

const projectsData = [
  {
    title: "Big Lebowski Quote Generator",
    description: "Random quotes from the movie 'The Big Lebowski'.",
    imageUrl: "https://static3.srcdn.com/wordpress/wp-content/uploads/2021/06/the-big-lebowski-the-stranger-real-imaginary-narrator.jpg?q=50&fit=crop&w=960&h=500&dpr=1.5",
    imageAlt: "Project 1 Image.",
    tags: ["React", "Node.js", "MongoDB", "Rest API"],
    notice: "This app was deployed on Heroku. Please allow up to 30 seconds on initial load time.",
    links: [
      {
        icon: GitHubIcon,
        href: "https://github.com/Fluva74/api_project",
      },
      {
        icon: OpenInNewIcon,
        href: "https://lebowski-quote-generator.herokuapp.com",
        target: blank,
      },
    ],

  },
  {
    title: "Margarita Mockup",
    description: "Mockup site about margaritas",
    imageUrl: "https://i.ibb.co/R7S3z2C/Screenshot-2022-02-18-at-12-48-00-Margaritas.png",
    imageAlt: "Project 2 Image.",
    tags: ["React"],
    links: [
      {
        icon: GitHubIcon,
        href: "https://github.com/Fluva74/building1",
      },
      {
        icon: OpenInNewIcon,
        href: "https://margaritatales.netlify.app/",
      },
    ],

  },
  {
    title: "dinner?",
    description: "A recipe app with search option.",
    imageUrl: "https://i.ibb.co/S0wWdH8/Screenshot-2022-01-27-at-15-36-35-React-App.png",
    imageAlt: "Project 3 Image.",
    tags: ["React.js", "Rest API", "Node.js"],
    notice: "This app was deployed on Heroku. Please allow up to 30 seconds on initial load time.",
    links: [
      {
        icon: GitHubIcon,
        href: "https://github.com/Fluva74/react-recipe",
      },
      {
        icon: OpenInNewIcon,
        href: "https://dinner-recipe-app.herokuapp.com/",
      },
    ],
  },
  {
    title: "Personal Portfolio",
    description: "A portfolio created with Gatsby and Material UI.",
    imageUrl: "https://i.ibb.co/qj191Bc/Screenshot-2022-01-28-at-11-03-02-https-mikefinneganportfolio-gatsbyjs-io.png",
    imageAlt: "Project 4 Image.",
    tags: ["Gatsby", "Material-UI", "React.js"],
    links: [
      {
        icon: GitHubIcon,
        href: "https://github.com/Fluva74/mike-finnegan-portfolio",
      },
      {
        icon: OpenInNewIcon,
        href: "https://mikefinneganportfolio.gatsbyjs.io/",
      },
    ],
  },
];