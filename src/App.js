import DashboardLayout from "./components/DashboardLayout";
import WeatherListItem from "./components/items/WeatherListItem";
import WeatherMapItem from "./components/items/WeatherMapItem";

function App() {
  return (
    <>
      test
      <DashboardLayout
        widgets={[new WeatherMapItem(), new WeatherListItem()]}
      />
    </>
  );
}

export default App;
