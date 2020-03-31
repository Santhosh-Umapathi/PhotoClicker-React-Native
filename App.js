import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
//import FollowScreen from "./src/screens/FollowScreen";

const MainNavigator = createStackNavigator(
  {
    Home: HomeScreen,
   // Follow: FollowScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "Home",
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
