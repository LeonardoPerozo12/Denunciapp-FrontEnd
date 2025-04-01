import { Image, StyleSheet, Platform, SafeAreaViewBase } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import Button from '@/components/Button';
import { SafeAreaView } from 'react-native-safe-area-context';
import PreloginScreen from '../Screens/PreloginScreen';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <PreloginScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
});
