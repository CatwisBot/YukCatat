import "./global.css"
import { useState } from "react";
import { View, StatusBar, TouchableOpacity, Text } from "react-native";
import Header from "./src/components/Header";
import BottomNavigation from "./src/components/BottomNavigation";
import HomeScreen from "./src/screens/HomeScreen";
import TambahScreen from "./src/screens/TambahScreen";
import LaporanScreen from "./src/screens/LaporanScreen";
import SplashScreen from "./src/screens/SplashScreen";
import DatabaseTestScreen from "./src/screens/DatabaseTestScreen";
import SimpleTestScreen from "./src/screens/SimpleTestScreen";
 
export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [currentPage, setCurrentPage] = useState<'home' | 'tambah' | 'laporan'>('home');
  const [selectedCategory, setSelectedCategory] = useState<'belanja' | 'hutang' | 'tugas' | null>(null);
  const [showDbTest, setShowDbTest] = useState(false);

  const handleTambahPress = () => {
    setCurrentPage('tambah');
    setSelectedCategory(null);
  };

  const handleStartApp = () => {
    setShowSplash(false);
  };

  // Show Splash Screen
  if (showSplash) {
    return (
      <View className="flex-1">
        <StatusBar barStyle="light-content" />
        <SplashScreen onStart={handleStartApp} />
      </View>
    );
  }

  // Main App
  return (
    <View className="flex-1 bg-slate-950">
      <StatusBar barStyle="light-content" />
      
      {/* Database Test Toggle Button */}
      <TouchableOpacity 
        onPress={() => setShowDbTest(!showDbTest)}
        className="absolute top-12 right-4 z-50 bg-purple-600 px-3 py-1 rounded"
      >
        <Text className="text-white text-xs">{showDbTest ? 'App' : 'DB Test'}</Text>
      </TouchableOpacity>

      {showDbTest ? (
        <SimpleTestScreen />
      ) : (
        <>
          <Header currentPage={currentPage} />

          {currentPage === 'home' && <HomeScreen />}
          {currentPage === 'tambah' && (
            <TambahScreen 
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
              onBackPress={() => setSelectedCategory(null)}
            />
          )}
          {currentPage === 'laporan' && <LaporanScreen />}

          <BottomNavigation 
            currentPage={currentPage}
            onPageChange={setCurrentPage}
            onTambahPress={handleTambahPress}
          />
        </>
      )}
    </View>
  );
}
