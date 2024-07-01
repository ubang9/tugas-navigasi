import React from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';

const Detail = ({ route, navigation }) => {
  const { judul, telpon, gambar, deskripsi } = route.params;

  return (
    <View style={styles.container}>
      <Image source={gambar} style={styles.img} />
      <Text style={styles.title}>{judul}</Text>
      <Text style={styles.telp}>{telpon}</Text>
      <Text style={styles.deskripsi}>{deskripsi}</Text>
      <Button
        title="Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  img: {
    width: 100,
    height: 100,
    marginBottom: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  telp: {
    fontSize: 18,
    color: '#3498db'
  },
  deskripsi: {
    fontSize: 16,
    color: '#2c3e50',
    marginTop: 20,
    textAlign: 'center'
  }
});

export default Detail;