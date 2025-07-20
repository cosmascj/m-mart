import { NavigatorScreenParams } from "@react-navigation/native";

export type HomeRoutes = {
  settings:undefined
};
export type tabRoutes = {
  Home: undefined
  Profile:undefined
  Search: undefined
  Cart: undefined
  Discover: undefined
}
export type discoverRoutes = {

}
export type AppRoutes = {
  TabStack: NavigatorScreenParams<tabRoutes>
  HomeStack: NavigatorScreenParams<HomeRoutes>;
  DrawerModule: NavigatorScreenParams<any>
  
};