import React, { useState } from "react";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { buttons, forms, layout, text } from "../../styles";

const Tugas02 = () => {
  const [data, setData] = useState({
    angkaPertama: "",
    angkaKedua: "",
    hasil: 0,
  });

  const onHitungJumlah = () => {
    setData((value) => ({
      ...value,
      hasil: parseInt(data.angkaPertama) + parseInt(data.angkaKedua),
    }));
  };

  const onHitungKurang = () => {
    setData((value) => ({
      ...value,
      hasil: parseInt(data.angkaPertama) - parseInt(data.angkaKedua),
    }));
  };

  const onHitungBagi = () => {
    setData((value) => ({
      ...value,
      hasil: parseInt(data.angkaPertama) / parseInt(data.angkaKedua),
    }));
  };

  const onHitungKali = () => {
    setData((value) => ({
      ...value,
      hasil: parseInt(data.angkaPertama) * parseInt(data.angkaKedua),
    }));
  };

  return (
    <>
      <ScrollView contentContainerStyle={layout.container}>
        <Text style={text.title}>Tugas 02</Text>
        <View style={forms.formGroup}>
          <Text style={forms.formLabel}>Angka Pertama</Text>
          <TextInput
            onChangeText={(value) =>
              setData((values) => ({
                ...values,
                angkaPertama: value.replace(/\D/g, ""),
              }))
            }
            style={forms.formControl}
            keyboardType="numeric"
          />
        </View>
        <View style={forms.formGroup}>
          <Text style={forms.formLabel}>Angka Kedua</Text>
          <TextInput
            onChangeText={(value) =>
              setData((values) => ({
                ...values,
                angkaKedua: value.replace(/\D/g, ""),
              }))
            }
            style={forms.formControl}
            keyboardType="numeric"
          />
        </View>
        <View style={forms.formGroup}>
          <Text style={forms.formLabel}>Hasil Perhitungan = {data.hasil}</Text>
        </View>
        <TouchableOpacity
          onPress={onHitungJumlah}
          style={buttons.buttonPrimary}
        >
          <Text style={text.buttonTextPrimary}>Penjumlahan</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onHitungKurang}
          style={buttons.buttonPrimary}
        >
          <Text style={text.buttonTextPrimary}>Pengurangan</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onHitungBagi} style={buttons.buttonPrimary}>
          <Text style={text.buttonTextPrimary}>Pembagian</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onHitungKali} style={buttons.buttonPrimary}>
          <Text style={text.buttonTextPrimary}>Perkalian</Text>
        </TouchableOpacity>
      </ScrollView>
    </>
  );
};

export default Tugas02;
