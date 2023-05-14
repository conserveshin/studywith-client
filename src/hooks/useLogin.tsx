import { login } from '../api/session';
import { isAnyUndefined } from '../utils/input-validation';
import useForm from './useForm';
import * as Storage from '../local/async-storage';

const useLogin = () => {
  const { values, onChange, onSubmit } = useForm({
    username: '',
    password: ''
  });

  const onLogin = async () => {
    const values = await onSubmit();
    const result = await login(values);
    
    if (result.status != 200) {
      throw new Error(result.statusText);
    }

    const json = await result.json();

    const sessionId = json.sessionId;
    const user = json.user;
    const theme = json.theme;

    if (isAnyUndefined(sessionId, user, theme)) {
      throw new Error("invalid response")
    }

    Storage.setData('sessionId', sessionId);
    Storage.setData('user', user);
    Storage.setData('theme', theme);
  };

  return { values, onChange, onLogin };

}

export default useLogin;