import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import CameraScreen from "./src/screens/CameraScreen";
import CamScreen from './src/screens/CamScreen'

const MainNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Camera: CameraScreen,
    Cam: CamScreen
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


