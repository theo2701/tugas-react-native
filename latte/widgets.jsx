import { Image, Linking, SafeAreaView, StyleSheet, Text } from "react-native"
import { APP_OWNER } from "./conf"
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer"

export const WidgetStandardDrawer = (props) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      {APP_OWNER.LOGO.TYPE === 'uri' && (
        <Image source={{uri: APP_OWNER.LOGO.RESOURCE}} style={styles.logo} />
      )}

      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem label={"About App"} onPress={() => Linking.openURL(APP_OWNER.LINK)} />
      </DrawerContentScrollView>
      <Text
        style={{
          fontSize: 16,
          textAlign: 'center',
          color: 'grey'
        }}>
          {APP_OWNER.AUTHOR.NAME}
      </Text>
    </SafeAreaView>
  )
}

export const WidgetLatteDrawer = (props) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      {APP_OWNER.LOGO.TYPE === 'uri' && (
        <Image source={{uri: APP_OWNER.LOGO.RESOURCE}} style={styles.logo} />
      )}

      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem label={"About App"} onPress={() => Linking.openURL(APP_OWNER.LINK)} />
      </DrawerContentScrollView>
      <Text
        style={{
          fontSize: 16,
          textAlign: 'center',
          color: 'grey'
        }}>
          {APP_OWNER.AUTHOR.NAME}
      </Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  logo: {
    resizeMode: 'center',
    width: 200,
    height: 200,
    alignSelf: 'center'
  }
})