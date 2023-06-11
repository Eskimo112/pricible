import { createStore } from "zustand";

interface AuthState {
  user: string | null;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => void;
}

const useAuthStore = createStore<AuthState>((set) => ({
  user: null,

  signIn: async (email, password) => {
    try {
      // Your sign-in logic with Firebase
      // Example using Firebase signInWithEmailAndPassword:
      const userCredentials = await auth().signInWithEmailAndPassword(
        email,
        password
      );
      const user = userCredentials.user;

      set({ user: user.uid });
      console.log("User signed in successfully!");
    } catch (error) {
      console.error("Error signing in:", error);
    }
  },

  signOut: () => {
    try {
      // Your sign-out logic with Firebase
      // Example using Firebase signOut:
      auth().signOut();

      set({ user: null });
      console.log("User signed out successfully!");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  },
}));

export default useAuthStore;
