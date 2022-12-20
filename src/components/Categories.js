import { FlatList, StyleSheet, Text, TouchableOpacity, View, } from "react-native";
import React, { useState } from "react";
import colors from "../consts/colors";
import SPACING from "../consts/SPACING";
import labels from "../consts/labels";

const Categories = ({ onChange }) => {
  const [activeCategoryId, setActiveCategoryId] = useState(2);

  const handlePress = (id, uid) => {
    setActiveCategoryId(id);
    onChange(uid);
  };
  return (
    <View style={{height:100}}>
      <View style={styles.container}>
      <FlatList
          horizontal={true}
          data={labels}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ marginVertical: SPACING, }}
          renderItem={({ item }) => (
            <TouchableOpacity
                onPress={() => handlePress(item.id, item.uid)}
                style={{ marginRight: SPACING, alignItems: "center", backgroundColor: colors.azure, borderRadius: 5}}
              >
                <Text
                  style = {[styles.tag, { color: colors.dark },
                    activeCategoryId === item.id && { color: colors.ghostwhite },
                  ]}
                >
                  {item.name}
                </Text>
              </TouchableOpacity>
          )}/>
      </View>
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  tag: {
    display: 'inline-block',
    padding: 5,
    fontSize: 14,
    borderRadius: 5,
  },
  container: {
    flex: 1,
    backgroundColor: '#FAEBD7',
    padding: 10,
    flexDirection: 'row',
    height: 50,
  },
  item: {
    fontWeight: 'bold',
    backgroundColor: colors.greenyellow,
    padding: 10,
    fontSize: 15,
    marginTop: 5,
  }  
});
