import { StyleSheet } from "react-native";

export const layout = StyleSheet.create({
  fluid: {
    marginVertical: 24,
    gap: 16
  }, 
  container: {
    marginVertical: 24,
    marginHorizontal: 50,
    gap: 32,
    flex: 1
  },
})

export const text = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#000814",
  },
  content: {
    fontSize: 16,
    color: "#4a4e69"
  },
  buttonTextPrimary: {
    textAlign: "center",
    color: "#fff",
    fontSize: 18,
    fontWeight: "700"
  }
})

export const buttons = StyleSheet.create({
  buttonPrimary: {
    backgroundColor: "#ff006e",
    paddingHorizontal: 24,
    paddingVertical: 14,
    borderRadius: 4
  },
})

export const forms = StyleSheet.create({
  formGroup: {
    gap: 8
  },
  formLabel: {
    fontSize: 20,
    color: "#4E4E4E"
  },
  formControl: {
    backgroundColor: "#fff",
    fontSize: 20,
    paddingVertical: 12,
    paddingHorizontal: 8,
    color: "#0d1b2a",
    borderColor: "#4E4E4E",
    borderWidth: 0.3,
    borderRadius:4
  },
})