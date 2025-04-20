import React, { createContext, useContext, useState, useEffect } from 'react';
import { auth, db } from '../firebase/config';
import { doc, updateDoc, getDoc, arrayUnion, arrayRemove, setDoc } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';

const SavedPropertiesContext = createContext();

export function SavedPropertiesProvider({ children }) {
  const [savedProperties, setSavedProperties] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userId, setUserId] = useState(null);

  // Handle authentication state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAuthenticated(!!user);
      setUserId(user?.uid);
      
      // Load saved properties when user logs in
      if (user) {
        loadSavedProperties(user.uid);
      } else {
        // Clear saved properties when user logs out
        setSavedProperties([]);
      }
    });

    return () => unsubscribe();
  }, []);

  // Load saved properties from Firestore
  const loadSavedProperties = async (uid) => {
    try {
      const userDoc = await getDoc(doc(db, 'users', uid));
      if (userDoc.exists()) {
        const data = userDoc.data();
        setSavedProperties(data.savedProperties || []);
      } else {
        // Create user document if it doesn't exist
        await setDoc(doc(db, 'users', uid), {
          savedProperties: [],
          createdAt: new Date().toISOString()
        });
        setSavedProperties([]);
      }
    } catch (error) {
      console.error('Error loading saved properties:', error);
    }
  };

  // Toggle save/unsave property
  const toggleSaveProperty = async (property) => {
    if (!isAuthenticated) {
      return;
    }

    try {
      const userRef = doc(db, 'users', userId);
      const userDoc = await getDoc(userRef);

      if (!userDoc.exists()) {
        // Create user document if it doesn't exist
        await setDoc(userRef, {
          savedProperties: [property],
          createdAt: new Date().toISOString()
        });
        setSavedProperties([property]);
        return;
      }

      const isSaved = savedProperties.some(p => p.id === property.id);

      if (isSaved) {
        // Remove property
        await updateDoc(userRef, {
          savedProperties: arrayRemove(property)
        });
        setSavedProperties(prev => prev.filter(p => p.id !== property.id));
      } else {
        // Add property
        await updateDoc(userRef, {
          savedProperties: arrayUnion(property)
        });
        setSavedProperties(prev => [...prev, property]);
      }
    } catch (error) {
      console.error('Error toggling property save:', error);
    }
  };

  const isPropertySaved = (propertyId) => {
    return savedProperties.some(p => p.id === propertyId);
  };

  return (
    <SavedPropertiesContext.Provider 
      value={{ 
        savedProperties, 
        toggleSaveProperty, 
        isPropertySaved,
        isAuthenticated 
      }}
    >
      {children}
    </SavedPropertiesContext.Provider>
  );
}

export function useSavedProperties() {
  const context = useContext(SavedPropertiesContext);
  if (!context) {
    throw new Error('useSavedProperties must be used within a SavedPropertiesProvider');
  }
  return context;
} 