import Feather from "@expo/vector-icons/Feather";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Octicons from "@expo/vector-icons/Octicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Entypo from "@expo/vector-icons/Entypo";

export const Icons = {
  user: (props) => <Feather name="user" {...props} />,
  mail: (props) => <Feather name="mail" {...props} />,
  camera: (props) => <Feather name="camera" {...props} />,
  home: (props) => <MaterialCommunityIcons name="home-outline" {...props} />,
  building: (props) => (
    <MaterialCommunityIcons name="office-building-outline" {...props} />
  ),
  search: (props) => <Feather name="search" {...props} />,
  pencil: (props) => <Feather name="edit-2" {...props} />,
  mapMarker: (props) => <Feather name="map-pin" {...props} />,
  users: (props) => <Feather name="users" {...props} />,
  logOut: (props) => <Feather name="log-out" {...props} />,
  notification: (props) => <Feather name="bell" {...props} />,
  settings: (props) => <Feather name="settings" {...props} />,
  barChart: (props) => <AntDesign name="bar-chart" {...props} />,
  arrowRight: (props) => (
    <MaterialCommunityIcons name="chevron-right" {...props} />
  ),
  frenchKey: (props) => <Feather name="tool" {...props} />,
  userCircle: (props) => <FontAwesome5 name="user-circle" {...props} />,
  padlockClose: (props) => <Feather name="lock" {...props} />,
  key: (props) => <Feather name="key" {...props} />,
  buildingPlus: (props) => (
    <MaterialCommunityIcons name="office-building-plus-outline" {...props} />
  ),
  hardHat: (props) => <FontAwesome5 name="hard-hat" {...props} />,
  plus: (props) => <Octicons name="plus" {...props} />,
  hammer: (props) => <MaterialIcons name="hardware" {...props} />,
  warning: (props) => <Ionicons name="warning-outline" {...props} />,
  filter: (props) => <Feather name="filter" {...props} />,
  magnifyingGlass: (props) => (
    <FontAwesome6 name="magnifying-glass" {...props} />
  ),
  arrowDown: (props) => <Entypo name="chevron-down" {...props} />,
};
