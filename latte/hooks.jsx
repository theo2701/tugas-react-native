import { useContext, useEffect, useState } from "react"
import { AppContext } from "./context"
import { CURRENCY, DATE_FORMAT, DATETIME_FORMAT, LOCALE, TOKEN_KEY, TOKEN_PREFIX } from "./conf";
import { Alert } from "react-native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const useRequest = (needAuth=false) => {
  const appContext = useContext(AppContext);

  const on = axios.create({
    timeout: 25000
  });

  on.interceptors.request.use(
    (config) => {
      appContext.loading.start()
      if (needAuth) {
        appContext.setIsAuthenticated(true);
      }
      return config;
    },
    (error) => {
      appContext.loading.reset()
      return Promise.reject(error);
    }
  );

  on.interceptors.response.use(
    (response) => {
      appContext.loading.reset()
      return response;
    },
    async (error) => {
      appContext.loading.reset()
      const { status } = error.response
      if (needAuth) {
        if (status && status === 401) {
          await AsyncStorage.setItem(TOKEN_KEY, "");
          appContext.setIsAuthenticated(false);
        }
      }
      return Promise.reject(error);
    }
  )

  return { on }
}

export const useToken = () => {
  const appContext = useContext(AppContext);

  const get = async () => {
    return `${await AsyncStorage.getItem(TOKEN_KEY)}`
  }

  const set = async (token) => {
    await AsyncStorage.setItem(TOKEN_KEY, `${TOKEN_PREFIX} ${token}`)
  }

  const signOut = async () => {
    await AsyncStorage.setItem(TOKEN_KEY, "");
    appContext.setIsAuthenticated(false);
  }

  return {get, set, signOut}
}

export const useGuard = () => {
  const token = useToken();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  // const isFocused = useIsFocused();

  const verify = async () => {
    if (!(await token.get())) {
      setIsAuthenticated(false);
    }
  } 

  // useFocusEffect(() => {
  //   verify();
  // }, [])

  return { isAuthenticated, setIsAuthenticated }
}

export const useMessage = () => {
  const error = (error) => {
    const { data, status, statusText } = error.response;
    Alert.alert("Ups!", data.detail || `${status}: ${statusText}`)
  }

  const success = (response) => {
    console.log(response)
    const { status, statusText } = response;
    Alert.alert("Success", `${status}: ${statusText || 'Process success!'}`)
  }

  const confirmRemove = (action) => {
    Alert.alert(
      "Are you sure to delete this data?",
      "You won't be able to revert this!",
      [
        {
          text: 'Cancel',
          onPress: () => {},
          style: 'cancel',
        },
        {text: 'OK', onPress: () => action()},
      ]
    )
  }

  const confirmExport = (action) => {
    Alert.alert(
      "Export data!",
      "You want to export this?",
      [
        {
          text: 'Cancel',
          onPress: () => {},
          style: 'cancel',
        },
        {text: 'OK', onPress: () => action()},
      ]
    )
  }

  return {success, error, confirmRemove, confirmExport}
}

export const useFormat = () => {
  const currency = (data) => {
    if (!data) {
      data = 0;
    }
    return new Intl.NumberFormat(LOCALE, {style: 'currency', currency: CURRENCY}).format(data)
  }

  const date = (data) => {
    if (!data) {
      return "No defined"
    }
    const date = Date.parse(data);
    return Intl.DateTimeFormat(LOCALE, DATE_FORMAT).format(date);
  }

  const datetime = (data) => {
    if (!data) {
      return "No defined"
    }
    const date = Date.parse(data);
    return Intl.DateTimeFormat(LOCALE, DATETIME_FORMAT).format(date);
  }

  return {
    currency,
    date,
    datetime,
  }
}

export const useInput = () => {
  const text = (name, value, getter, setter) => {
    setter({...getter, [name]: value})
  }

  const numeric = (name, value, getter, setter) => {
    setter({...getter, [name]: parseInt(Number(value).toString())})
  }

  return {
    text,
    numeric,
  }
}

export const useLoading = () => {
  const [loading, setLoading] = useState(false)

  const start = () => setLoading(true);
  const reset = () => setLoading(false);

  const isLoading = () => loading;

  return {
    isLoading,
    start,
    reset,
  }
}