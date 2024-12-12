import * as React from 'react';
import { BottomNavigation } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import Home from './pages/home'
import MinhaLista from './pages/minhaLista';
import Sobre from './pages/sobre';

const HomeRoute = () => <Home/>;

const ListRoute = () => <MinhaLista/>;

const AboutRoute = () => <Sobre/>;

const DownNavBar = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'home', title: 'Home', focusedIcon: 'home', unfocusedIcon: 'home-outline'},
    { key: 'list', title: 'Minha Lista', focusedIcon: 'clipboard' , unfocusedIcon: 'clipboard-outline'},
    { key: 'about', title: 'Sobre', focusedIcon: 'information', unfocusedIcon: 'information-outline' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeRoute,
    list: ListRoute,
    about: AboutRoute,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      //labeled={false}
      compact= {true}
      sceneAnimationType='shifting'
      barStyle={styles.container}
      style={styles.container}
      activeIndicatorStyle={styles.activeTab}
      activeColor="#EBFF01"
      inactiveColor="#929292" 
       />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#682B7D',
    borderWidth: 0
  },
  activeTab:{
    backgroundColor: '#000000',
    opacity: 0.3,
  }
})

export default DownNavBar;