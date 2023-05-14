import AsyncStorage from "@react-native-async-storage/async-storage";

export const setData = async <T>(key: string, value: T) => {
  const stringValue = JSON.stringify(value);
  await AsyncStorage.setItem(key, stringValue);
};

export const getData = async <T>(key: string) => {
  const stringValue = await AsyncStorage.getItem(key);
  if (stringValue !== null) {
    return JSON.parse(stringValue) as T
  }
}

export const removeData = async (key: string) =>
  await AsyncStorage.removeItem(key);

export const containsData = async (key: string) =>
  (await AsyncStorage.getAllKeys()).includes(key)


