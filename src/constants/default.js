import Factions from "../components/Factions";
import Home from "../components/Home";
import Units from "../components/Units";
import Equipment from "../components/Equipment";
import Simulator from "../components/Simulator";

export const APP_PAGES = [
  {
    value: 0,
    label: "Home",
    page: Home,
  },
  {
    value: 1,
    label: "Factions",
    page: Factions,
  },
  {
    value: 2,
    label: "Units",
    page: Units,
  },
  {
    value: 3,
    label: "Equipment",
    page: Equipment,
  },
  {
    value: 4,
    label: "Battle Simulator",
    page: Simulator,
  },
];
