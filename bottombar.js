// import React from 'react';
// import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

// const BottomBar = () => {
//   const handleButtonPress = (buttonText) => {
//     // Handle button press based on the buttonText
//     console.log(`${buttonText} button pressed`);
//   };

//   return (
//     <View style={styles.bottomBar}>
//       <TouchableOpacity
//         style={styles.button}
//         onPress={() => handleButtonPress('Button 1')}
//       >
//         <Text style={styles.buttonText}>Button 1</Text>
//       </TouchableOpacity>

//       <TouchableOpacity
//         style={styles.button}
//         onPress={() => handleButtonPress('Button 2')}
//       >
//         <Text style={styles.buttonText}>Button 2</Text>
//       </TouchableOpacity>

//       <TouchableOpacity
//         style={styles.button}
//         onPress={() => handleButtonPress('Button 3')}
//       >
//         <Text style={styles.buttonText}>Button 3</Text>
//       </TouchableOpacity>

//       <TouchableOpacity
//         style={styles.button}
//         onPress={() => handleButtonPress('Button 4')}
//       >
//         <Text style={styles.buttonText}>Button 4</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//  bottomBar: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     alignItems: 'center',
//     backgroundColor: '#fff', // Set your desired background color
//     padding: 20,
//     position: 'absolute',  // Position the BottomBar at the bottom
//     bottom: 0,  // Align it to the bottom of the screen
//     left: 0,
//     right: 0,
//   },
//   button: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   buttonText: {
//     color: '#000', // Set your desired text color
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });

// export default BottomBar;

import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const HomeRoute = () => <Text>Home</Text>;
const OrdersRoute = () => <Text>Orders</Text>;
const whatsaapRoute = () => <Text>Chat</Text>;

const BottomBar = () => {
  const [index, setIndex] = React.useState(1);

  const routes = [
    { key: 'home', title: 'Home', icon: 'home', color: '#3F51B5' },
    { key: 'orders', title: 'Orders', icon: 'file-document-multiple', color: '#009688' },
    { key: 'whatsaap', title: 'Whatsaap', icon: 'whatsapp', color: '#795548' },
    { key: 'profile', title: 'Profile', icon: 'face-man-profile', color: '#607D8B' },
  ];

  const renderScene = BottomNavigation.SceneMap({
    home: HomeRoute,
    orders: OrdersRoute,
    whatsaap: whatsaapRoute,
    profile: () => <Text>Profile</Text>,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      renderIcon={({ route, focused, color }) => {
        // Ensure route exists before rendering the icon
        if (route) {
          return (
            <MaterialCommunityIcons
              name={route.icon}
              size={26}
              color={color}
            />
          );
        }
        return null;
      }}
    />
  );
};

export default BottomBar;
