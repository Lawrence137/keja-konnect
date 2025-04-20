import React, { createContext, useContext, useState, useEffect } from 'react';
import { mockProperties } from '../data/mockProperties';

const SavedPropertiesContext = createContext();

export function SavedPropertiesProvider({ children }) {
  const [savedProperties, setSavedProperties] = useState([]);

  // Load saved properties from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('savedProperties');
    if (saved) {
      setSavedProperties(JSON.parse(saved));
    }
  }, []);

  // Save to localStorage whenever savedProperties changes
  useEffect(() => {
    localStorage.setItem('savedProperties', JSON.stringify(savedProperties));
  }, [savedProperties]);

  const toggleSaveProperty = (property) => {
    setSavedProperties(prev => {
      const isSaved = prev.some(p => p.id === property.id);
      if (isSaved) {
        return prev.filter(p => p.id !== property.id);
      } else {
        return [...prev, property];
      }
    });
  };

  const isPropertySaved = (propertyId) => {
    return savedProperties.some(p => p.id === propertyId);
  };

  return (
    <SavedPropertiesContext.Provider value={{ savedProperties, toggleSaveProperty, isPropertySaved }}>
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