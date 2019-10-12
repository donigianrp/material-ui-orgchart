import React, { FunctionComponent } from "react";
import { makeStyles } from "@material-ui/styles";
import { Typography } from "@material-ui/core";
import { OrgChartLeaf } from "../../global";

const useStyles = makeStyles({
  root: {
    width: "66%",
    height: 40,
    borderTop: "2px solid #000",
    borderLeft: "2px solid #000",
    borderRight: "2px solid #000"
  }
});

interface Props {
  // leaf: OrgChartLeaf;
}

const Branch: FunctionComponent<Props> = (props: Props) => {
  const classes = useStyles();
  // const { node } = props;

  return <div className={classes.root}></div>;
};

export default Branch;
