"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "@/lib/firebase";

const AuthContext = createContext({
  user: null,
  userRole: null,
  loading: true,
});

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [userRole, setUserRole] = useState(null);
  const [loading, setLoading] = useState(true);

  // In AuthContext.jsx — setLoading only after full resolution
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        try {
          const userDoc = await getDoc(doc(db, "users", currentUser.uid));
          setUserRole(userDoc.exists() ? userDoc.data().role : null);
        } catch (error) {
          console.error("Error fetching role:", error);
          setUserRole(null);
        }
        setUser(currentUser);
      } else {
        setUser(null); // explicit null
        setUserRole(null);
      }
      setLoading(false); // same as before, no change needed here
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, userRole, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
