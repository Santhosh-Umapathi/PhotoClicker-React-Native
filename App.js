import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import CameraScreen from "./src/screens/CameraScreen";

const MainNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Camera: CameraScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      //title: "Home",
      headerTintColor: "white", //Header button colors
      headerStyle: {
        backgroundColor: "lightblue" // header bg color
      },
      headerTitleStyle: {
        color: "black" // header font color
      }
    }
  }
);

export default createAppContainer(MainNavigator);


