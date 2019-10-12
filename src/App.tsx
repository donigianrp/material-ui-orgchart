import React from "react";
import "./App.css";
import { OrgChartNode } from "./global";
import { makeStyles } from "@material-ui/styles";
import Leaf from "./components/Leaf/Leaf";
import Branch from "./components/Branch/Branch";

const useStyles = makeStyles({
  root: {
    width: "100%",
    display: "flex",
    justifyContent: "center"
  },
  leafWrapper: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }
});

const org = [
  {
    id: 1,
    details: {
      name: "Robert Donigian",
      position: "CEO",
      imageURL: "https://via.placeholder.com/150"
    },
    children: [
      {
        id: 2,
        details: {
          name: "Joe Smith",
          position: "CIO",
          imageURL: "https://via.placeholder.com/150"
        },
        children: [
          {
            id: 9,
            details: {
              name: "Karen Hill",
              position: "Front End Development Lead",
              imageURL: "https://via.placeholder.com/150"
            },
            children: [
              {
                id: 12,
                details: {
                  name: "Amy Wang",
                  position: "UI/UX Lead",
                  imageURL: "https://via.placeholder.com/150"
                },
                children: [
                  {
                    id: 13,
                    details: {
                      name: "Ian McCain",
                      position: "UI/UX Developer",
                      imageURL: "https://via.placeholder.com/150"
                    },
                    children: []
                  },
                  {
                    id: 14,
                    details: {
                      name: "Rory McCain",
                      position: "UI/UX Developer",
                      imageURL: "https://via.placeholder.com/150"
                    },
                    children: []
                  },
                  {
                    id: 15,
                    details: {
                      name: "Lily McCain",
                      position: "UI/UX Developer",
                      imageURL: "https://via.placeholder.com/150"
                    },
                    children: []
                  }
                ]
              }
            ]
          },
          {
            id: 10,
            details: {
              name: "Tony Hill",
              position: "Back End Development Lead",
              imageURL: "https://via.placeholder.com/150"
            },
            children: [
              {
                id: 16,
                details: {
                  name: "Ben Epstein",
                  position: "API Development Lead",
                  imageURL: "https://via.placeholder.com/150"
                },
                children: [
                  {
                    id: 17,
                    details: {
                      name: "Fred Prince",
                      position: "API Developer",
                      imageURL: "https://via.placeholder.com/150"
                    },
                    children: []
                  },
                  {
                    id: 18,
                    details: {
                      name: "Richard Prince",
                      position: "API Developer",
                      imageURL: "https://via.placeholder.com/150"
                    },
                    children: []
                  },
                  {
                    id: 19,
                    details: {
                      name: "Jack Prince",
                      position: "API Developer",
                      imageURL: "https://via.placeholder.com/150"
                    },
                    children: []
                  }
                ]
              }
            ]
          },
          {
            id: 11,
            details: {
              name: "Steve Hill",
              position: "Mobile Development Lead",
              imageURL: "https://via.placeholder.com/150"
            },
            children: []
          }
        ]
      },
      {
        id: 3,
        details: {
          name: "Jane Smith",
          position: "CFO",
          imageURL: "https://via.placeholder.com/150"
        },
        children: []
      },
      {
        id: 4,
        details: {
          name: "Jack Smith",
          position: "President of HR",
          imageURL: "https://via.placeholder.com/150"
        },
        children: []
      }
    ]
  },
  {
    id: 5,
    details: {
      name: "Alyssa Soto",
      position: "President",
      imageURL: "https://via.placeholder.com/150"
    },
    children: [
      {
        id: 6,
        details: {
          name: "Mary Johnson",
          position: "Vice President of Marketing",
          imageURL: "https://via.placeholder.com/150"
        },
        children: []
      },
      {
        id: 7,
        details: {
          name: "Sam Johnson",
          position: "Vice President of Administration",
          imageURL: "https://via.placeholder.com/150"
        },
        children: []
      },
      {
        id: 8,
        details: {
          name: "Paul Johnson",
          position: "Vice President of Supply Chain",
          imageURL: "https://via.placeholder.com/150"
        },
        children: []
      }
    ]
  }
];

const App: React.FC = () => {
  const classes = useStyles();
  const parentNode: OrgChartNode = {
    name: "Rob Donigian",
    imageURL: "https://via.placeholder.com/150",
    position: "CEO"
  };
  return (
    <div className={classes.root}>
      <div className={classes.leafWrapper}>
        <Branch />
        <Leaf node={parentNode} />
      </div>
    </div>
  );
};

export default App;
