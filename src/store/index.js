/* global */
import { init } from '@rematch/core';
import createPersistPlugin, { getPersistor } from '@rematch/persist';
import createLoadingPlugin from '@rematch/loading';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Create plugins
const persistPlugin = createPersistPlugin({
  key: 'root',
  storage: AsyncStorage,
  blacklist: [],
});
const loadingPlugin = createLoadingPlugin({});

const configureStore = () => {
  const store = init({
    redux: {
      middlewares: [],
    },
    plugins: [persistPlugin, loadingPlugin],
  });

  const persistor = getPersistor();
  const { dispatch } = store;

  return { persistor, store, dispatch };
};

export default configureStore;
