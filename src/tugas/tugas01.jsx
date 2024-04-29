import React, { useState } from "react";
import { Alert, ScrollView, View } from "react-native";
import {
  Appbar,
  Button,
  RadioButton,
  Text,
  TextInput,
} from "react-native-paper";
import { forms, layout } from "../../styles";

const Tugas01 = () => {
  const [data, setData] = useState({
    nama: "",
    jenisKelamin: "",
    programBatch: "",
  });

  const onTampilPesan = () => {
    Alert.alert("Pesan", JSON.stringify(data));
  };

  return (
    <>
      <Appbar.Header>
        <Appbar.Content title="Tugas 01" />
      </Appbar.Header>

      <ScrollView contentContainerStyle={layout.container}>
        <Text variant="headlineSmall">Form Batch MERN</Text>
        <View style={forms.formGroup}>
          <TextInput
            label={"Nama"}
            mode="outlined"
            value={data.nama}
            onChangeText={(value) =>
              setData((values) => ({ ...values, nama: value }))
            }
          />
        </View>
        <View>
          <Text style={[forms.formLabel, { marginBottom: 16 }]}>
            Jenis Kelamin
          </Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <RadioButton
              value={data.jenisKelamin}
              status={data.jenisKelamin === "Pria" ? "checked" : "unchecked"}
              onPress={() =>
                setData((values) => ({ ...values, jenisKelamin: "Pria" }))
              }
              label="Pria"
            />
            <Text style={forms.formLabel}>Pria</Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <RadioButton
              value={data.jenisKelamin}
              status={data.jenisKelamin === "Wanita" ? "checked" : "unchecked"}
              onPress={() =>
                setData((values) => ({ ...values, jenisKelamin: "Wanita" }))
              }
            />
            <Text style={forms.formLabel}>Wanita</Text>
          </View>
        </View>

        <View style={forms.formGroup}>
          <TextInput
            label={"Program Batch"}
            mode="outlined"
            value={data.programBatch}
            onChangeText={(value) =>
              setData((values) => ({ ...values, programBatch: value }))
            }
          />
        </View>
        <Button mode="contained" onPress={onTampilPesan}>
          Tampilkan Pesan
        </Button>
      </ScrollView>
    </>
  );
};

export default Tugas01;
