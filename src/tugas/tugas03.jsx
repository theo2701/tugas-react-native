import React, { useState } from "react";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { buttons, forms, layout, text } from "../../styles";

const Tugas03 = () => {
  const [data, setData] = useState({
    nama: "",
    harga: "",
    quantity: "",
    total: 0,
  });

  const onHitung = () => {
    const total = parseInt(data.harga) * parseInt(data.quantity);
    setData((value) => ({ ...value, total }));
  };

  const onReset = () => {
    setData({
      nama: "",
      harga: "",
      quantity: "",
      total: 0,
    });
  };

  return (
    <>
      <ScrollView contentContainerStyle={layout.container}>
        <Text style={text.title}>Tugas 03</Text>
        <View style={forms.formGroup}>
          <Text style={forms.formLabel}>Nama Barang</Text>
          <TextInput
            value={data.nama}
            onChangeText={(value) =>
              setData((values) => ({ ...values, nama: value }))
            }
            style={forms.formControl}
          />
        </View>
        <View style={forms.formGroup}>
          <Text style={forms.formLabel}>Harga</Text>
          <TextInput
            value={data.harga}
            onChangeText={(value) =>
              setData((values) => ({
                ...values,
                harga: value.replace(/\D/g, ""),
              }))
            }
            style={forms.formControl}
            keyboardType="numeric"
          />
        </View>
        <View style={forms.formGroup}>
          <Text style={forms.formLabel}>Quantity</Text>
          <TextInput
            value={data.quantity}
            onChangeText={(value) =>
              setData((values) => ({
                ...values,
                quantity: value.replace(/\D/g, ""),
              }))
            }
            style={forms.formControl}
            keyboardType="numeric"
          />
        </View>
        <View style={forms.formGroup}>
          <Text style={forms.formLabel}>
            Jumlah yang harus dibayar: {data.total}
          </Text>
        </View>
        <TouchableOpacity onPress={onHitung} style={buttons.buttonPrimary}>
          <Text style={text.buttonTextPrimary}>Hitung</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onReset} style={buttons.buttonPrimary}>
          <Text style={text.buttonTextPrimary}>Reset</Text>
        </TouchableOpacity>
      </ScrollView>
    </>
  );
};

export default Tugas03;
