// App.js
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import WordList from './src/WordList';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <WordList />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
