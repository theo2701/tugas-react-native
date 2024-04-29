import React, { useState } from "react";
import {
  Alert,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { buttons, forms, layout, text } from "../../styles";
import { FlatList } from "react-native-gesture-handler";

const Task = ({ task, done, onRemove, id }) => {
  return (
    <View>
      <TouchableOpacity
        style={{
          flexDirection: "row",
          paddingHorizontal: 20,
          paddingVertical: 16,
          justifyContent: "space-between",
        }}
        onPress={() => onRemove(id)}
      >
        <Text style={{ fontSize: 20, fontWeight: "800" }}>{task}</Text>
        {done ? (
          <Image
            style={{ width: 32, height: 32 }}
            source={{
              uri: "https://icons.iconarchive.com/icons/jackietran/rounded/32/Done-icon.png",
            }}
          />
        ) : (
          <Image
            style={{ width: 32, height: 32 }}
            source={{
              uri: "https://icons.iconarchive.com/icons/jackietran/rounded/32/Pause-icon.png",
            }}
          />
        )}
      </TouchableOpacity>
    </View>
  );
};

const Tugas04 = () => {
  const [data, setData] = useState({
    id: new Date().getTime(),
    task: "",
    done: false,
  });

  const [listTask, setListTask] = useState([]);

  const onAdd = () => {
    setListTask((value) => [...value, data]);

    setData({
      id: new Date().getTime(),
      task: "",
      done: false,
    });
  };

  const onRemove = (id) => {
    const foundIndex = listTask.map((e) => e.id).indexOf(id);

    const listTaskCopy = [...listTask];
    listTaskCopy.splice(foundIndex, 1);
    setListTask(listTaskCopy);
  };

  return (
    <>
      <SafeAreaView style={layout.fluid}>
        <View style={{ marginHorizontal: 20 }}>
          <Text style={text.title}>Tugas 04</Text>
          <View
            style={{ flexDirection: "row", gap: 10, alignItems: "flex-end" }}
          >
            <View style={[forms.formGroup, { flex: 2 }]}>
              <Text style={forms.formLabel}>Task</Text>
              <TextInput
                value={data.task}
                onChangeText={(value) =>
                  setData((values) => ({ ...values, task: value }))
                }
                style={forms.formControl}
              />
            </View>
            <TouchableOpacity onPress={onAdd} style={buttons.buttonPrimary}>
              <Text style={text.buttonTextPrimary}>Add</Text>
            </TouchableOpacity>
          </View>
        </View>
        <FlatList
          data={listTask}
          renderItem={({ item }) => (
            <Task
              task={item.task}
              done={item.done}
              onRemove={onRemove}
              id={item.id}
            />
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </SafeAreaView>
    </>
  );
};

export default Tugas04;
