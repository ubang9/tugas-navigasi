// components/Home.js
import React from 'react';
import { View, ScrollView, StyleSheet, Button } from 'react-native';
import Contact from './Kontak';

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Contact
          gambar={require('../assets/logo.png')}
          judul="APPI"
          telpon="0832 1121 6733"
          deskripsi="APPI adalah seorang aktor terkenal yang telah membintangi banyak film blockbuster."
          navigation={navigation}
        />
        <Contact
          gambar={require('../assets/t1.jpg')}
          judul="M ALWI "
          telpon="0858 1028 0433"
          deskripsi="ALWI adalah seorang mahasiswi berprestasi yang aktif dalam berbagai kegiatan kampus."
          navigation={navigation}
        />
        <Contact
          gambar={require('../assets/UBANG.jpg')}
          judul="UBANG AJA"
          telpon="0858 1028 04525"
          deskripsi="UBANG adalah seorang mahasiswi berprestasi yang aktif dalam berbagai kegiatan kampus."
          navigation={navigation}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 20
  },
  button: {
    marginBottom: 20
  }
});

export default Home;