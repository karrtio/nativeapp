import React, { useEffect, useState } from 'react';
import {
  View,
  Image,
  StyleSheet,
  Text,
  ScrollView,
  StatusBar,
  useColorScheme,
  Dimensions,
  TouchableOpacity,
  SafeAreaView
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import BottomBar from './bottombar';
type SectionProps = {
  title: string;
  children: React.ReactNode;
};
function Section({ children, title }: SectionProps): React.ReactElement {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <Text style={styles.sectionDescription}>{children}</Text>
    </View>
  );
}

const SplashScreen = () => {
  return (
    <View style={styles.splashContainer}>
      <Image source={require('./splash_screen.png')} style={styles.splashImage} />
    </View>
  );
};
const App = (): React.ReactElement => {
  const [isSplashVisible, setSplashVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSplashVisible(false);
    }, 2000); // Adjust the time as needed

    return () => clearTimeout(timer);
  }, []);

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaProvider>
    <View style={[styles.container, backgroundStyle]}>
      {isSplashVisible && <SplashScreen />}
      {!isSplashVisible && (
        <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled" automaticallyAdjustContentInsets={false} contentInsetAdjustmentBehavior="automatic">
         <View style={styles.header}>
           <Text style={styles.headerText}>Your Header Title</Text>
         </View>
         <View style={{ flex: 1 }}>
          {/* Your main content goes here */}
          <BottomBar />
        </View>
          {/* <Header /> */}
          {/* <View
            style={{
              backgroundColor: isDarkMode ? Colors.black : Colors.white,
            }}>
            <Section title="Step One">
              Edit <Text style={styles.highlight}>App.tsx</Text> to change this
              screen and then come back to see your edits.
            </Section>
            <Section title="See Your Changes">
              <ReloadInstructions />
            </Section>
            <Section title="Debug">
              <DebugInstructions />
            </Section>
            <Section title="Learn More">
              Read the docs to discover what to do next:
            </Section>
            <LearnMoreLinks />
          </View> */}
        </ScrollView>
      )}
    </View>
    </SafeAreaProvider>

  );
};

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: windowHeight,
    width: windowWidth
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  splashContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white', // Customize the background color
  },
  splashImage: {
    width: windowWidth,
    height: windowHeight,
    resizeMode: 'cover',
  },
  header: {
    backgroundColor: '#fff', // Set your desired background color
    padding: 15,
    alignItems: 'center',
  },
  headerText: {
    color: '#000', // Set your desired text color
    fontSize: 18,
    fontWeight: 'bold',
  },
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff', // Set your desired background color
    padding:10,
    position: 'absolute',  // Position the BottomBar at the bottom
    bottom: 0,  // Align it to the bottom of the screen
    left: 0,
    right: 0,
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#000', // Set your desired text color
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default App;
