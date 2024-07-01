// components/Contact.js
import React from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';

export default function Contact({ gambar, judul, telpon, deskripsi, navigation }) {
  return (
    <View style={styles.container}>
      <Image source={gambar} style={styles.img} />
      <View style={styles.teks}>
        <Text style={styles.title}>{judul}</Text>
        <Text style={styles.telp}>{telpon}</Text>
        <Button
          title="Lihat Detil"
          onPress={() => navigation.navigate('Detail', { judul, telpon, gambar, deskripsi })}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'blue',
    padding: 10
  },
  img: {
    margin: 15,
    width: 50,
    height: 50
  },
  teks: { flex: 1 },
  title: {
    fontWeight: 'bold',
    fontSize: 16
  },
  telp: {
    fontSize: 14,
    color: '#3498db'
  }
});