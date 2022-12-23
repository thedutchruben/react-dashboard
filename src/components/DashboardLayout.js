import PropTypes from "prop-types";
import { FormControlLabel, Grid, Paper, Switch } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";

import WeatherListItem from "./items/WeatherListItem";
import WeatherMapItem from "./items/WeatherMapItem";
import "/node_modules/react-grid-layout/css/styles.css";
import "/node_modules/react-resizable/css/styles.css";

const ResponsiveGridLayout = WidthProvider(Responsive);

const userLayout = {
  lg: [
    {
      i: "WeatherList",
      x: 5,
      y: 0,
      w: 3,
      h: 6,
    },
  ],
  md: [
    {
      i: "WeatherList",
      x: 5,
      y: 0,
      w: 3,
      h: 6,
    },
  ],
  xs: [
    {
      i: "WeatherList",
      x: 5,
      y: 0,
      w: 3,
      h: 6,
    },
  ],
};

export default function DashboardLayout({ widgets }) {
  const [editMode, setEditMode] = useState(false);

  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  const widgetList = [...widgets];
  widgetList.push(new WeatherMapItem(), new WeatherListItem());

  return (
    <>
      <Grid container spacing={2}>
        <Grid item style={{ width: "100%" }} sx={12} component={Paper}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              textAlign: "center",
              height: "50px",
            }}
          >
            <FormControlLabel
              style={{ float: "right" }}
              control={<Switch onClick={toggleEditMode} />}
              label="Layout bewerken"
            />
          </Box>
        </Grid>
        <Grid item xs={12}>
          <ResponsiveGridLayout
            layouts={{
              lg: widgets.map((w) => {
                const uLayout =
                  userLayout.lg.find((l) => l.i === w.getKey()) ?? {};
                console.log("ylayout", uLayout);
                return { i: w.getKey(), ...w.getLgLayout(), ...uLayout };
              }),
              md: widgets.map((w) => {
                const uLayout =
                  userLayout.md.find((l) => l.i === w.getKey()) ?? {};
                console.log("ylayout", uLayout);

                return { i: w.getKey(), ...w.getMdLayout(), ...uLayout };
              }),
              xs: widgets.map((w) => {
                const uLayout =
                  userLayout.xs.find((l) => l.i === w.getKey()) ?? {};
                console.log("ylayout", uLayout);
                return { i: w.getKey(), ...w.getXsLayout(), ...uLayout };
              }),
            }}
            className="layout"
            breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
            cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
            rowHeight={30}
          >
            {widgets.map((item) =>
              editMode ? item.getEditRender() : item.getRender()
            )}
          </ResponsiveGridLayout>
        </Grid>
      </Grid>
    </>
  );
}

DashboardLayout.propTypes = {
  widgets: PropTypes.shape({
    map: PropTypes.func,
    push: PropTypes.func,
  }),
};
