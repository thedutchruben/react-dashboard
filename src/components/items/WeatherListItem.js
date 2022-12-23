import { Card, Grid, Paper, Typography } from "@mui/material";
import Iframe from "react-iframe";
import GridItemWrapper from "../GridItemWrapper";
export default class WeatherListItem extends GridItemWrapper {
  getName() {
    return "Weer lijst";
  }

  getLgLayout() {
    return {
      x: 0,
      y: 0,
      w: 2,
      h: 6,
      minW: 2,
      maxW: 2,
      maxH: 6,
      minH: 6,
      isResizable: false,
      isBounded: true,
      draggableHandle: ".react-grid-dragHandle",
    };
  }
  getMdLayout() {
    return {
      x: 0,
      y: 0,
      w: 3,
      h: 6,
      minW: 3,
      maxW: 3,
      maxH: 6,
      minH: 6,
      isResizable: false,
      isBounded: true,
      draggableHandle: ".react-grid-dragHandle",
    };
  }
  getXsLayout() {
    return {
      x: 0,
      y: 0,
      w: 3,
      h: 6,
      minW: 3,
      maxW: 3,
      maxH: 6,
      minH: 6,
      isResizable: false,
      isBounded: true,
      draggableHandle: ".react-grid-dragHandle",
    };
  }

  getKey() {
    return "WeatherList";
  }

  getEditRender() {
    return (
      <Paper
        style={{
          cursor: "grabbing",
          backgroundColor: "white",
          height: "100%",
          width: "100%",
        }}
        key={this.getKey()}
      >
        <Typography>{this.getName()}</Typography>
      </Paper>
    );
  }

  getRender() {
    return (
      <div style={{ backgroundColor: "white" }} key={this.getKey()}>
        <WeatherList />
      </div>
    );
  }
}

const WeatherList = () => {
  return (
    <Grid style={{ border: "1px solid black" }} container spacing={0}>
      <Grid item xs={12}>
        <Card
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Iframe
            url="https://gadgets.buienradar.nl/gadget/forecastandstation/6270/"
            style={{
              width: "100vw",
              height: "100vw",
            }}
            frameBorder={0}
            allowFullScreen
            display="block"
            title="Weer voorspelling"
          />
        </Card>
      </Grid>
    </Grid>
  );
};
