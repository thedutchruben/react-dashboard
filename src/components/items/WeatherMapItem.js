import { Card, CardContent, Paper, Typography } from "@mui/material";
import Iframe from "react-iframe";
import GridItemWrapper from "../GridItemWrapper";

export default class WeatherMapItem extends GridItemWrapper {
  getName() {
    return "Weer map";
  }
  getLgLayout() {
    return { x: 5, y: 0, w: 5, h: 5, minW: 5, maxW: 5 };
  }
  getMdLayout() {
    return { x: 5, y: 0, w: 5, h: 5, minW: 5, maxW: 5 };
  }
  getXsLayout() {
    return { x: 5, y: 0, w: 5, h: 5, minW: 5, maxW: 5 };
  }

  getKey() {
    return "weathermap";
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
      <div key={this.getKey()}>
        <WeatherMap />
      </div>
    );
  }
}

const WeatherMap = () => {
  return (
    <Card style={{ width: "100%", height: "100%" }}>
      <CardContent>
        <Iframe
          url="https://gadgets.buienradar.nl/gadget/zoommap/?lat=53.25166&lng=6.14483&overname=2&zoom=13&naam=Buitenpost&size=2&voor=1"
          height={"190px"}
          width={"300px"}
          frameBorder={0}
          title="Weer voorspelling"
        />
      </CardContent>
    </Card>
  );
};
