import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default {
  actions: {
    login: async function (obj, { email, password }) {
      // eslint-disable-next-line no-useless-catch
      try {
        const auth = getAuth();
        await signInWithEmailAndPassword(auth, email, password);
      } catch (error) {
        throw error;
      }
    },
  },
};
