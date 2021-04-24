import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Confirmation } from '../pages/Confirmation';
import { UserIdentification } from '../pages/UserIdentification';
import { Welcome } from '../pages/Welcome';
import colors from '../styles/colors';

type screensType = {
  name: string;
  component: () => JSX.Element;
}[];

//Declare in order of the application flow
const SCREENS: screensType = [
  {
    name: 'Welcome',
    component: Welcome,
  },
  {
    name: 'UserIdentification',
    component: UserIdentification,
  },
  {
    name: 'Confirmation',
    component: Confirmation,
  },
];

const StackRoutes = createStackNavigator();

const AppRoutes: React.FC = () => (
  <StackRoutes.Navigator
    headerMode="none"
    screenOptions={{
      cardStyle: {
        backgroundColor: colors.white,
      },
    }}
  >
    {SCREENS.map((scr, index) => (
      <StackRoutes.Screen
        key={index}
        name={scr.name}
        component={scr.component}
      />
    ))}
  </StackRoutes.Navigator>
);

export default AppRoutes;
