import React, { FunctionComponent } from "react";
import { makeStyles } from "@material-ui/styles";
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  CardActions,
  Button,
  CardMedia
} from "@material-ui/core";
import { OrgChartNode } from "../../global";

const useStyles = makeStyles({
  card: {
    maxWidth: 345
  }
});

interface Props {
  node: OrgChartNode;
}

const Leaf: FunctionComponent<Props> = (props: Props) => {
  const classes = useStyles();
  const { node } = props;

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={node.name}
          height="140"
          image={node.imageURL}
          title={node.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {node.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {node.position}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default Leaf;
