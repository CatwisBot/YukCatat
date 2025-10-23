import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Alert, ScrollView } from 'react-native';
import databaseService from '../lib/databaseService';
import type { BelanjaItem, HutangItem, TugasItem } from '../config/supabase';

const DatabaseTestScreen: React.FC = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [connectionTest, setConnectionTest] = useState<{ success: boolean; message: string } | null>(null);
  const [belanjaItems, setBelanjaItems] = useState<BelanjaItem[]>([]);
  const [hutangItems, setHutangItems] = useState<HutangItem[]>([]);
  const [tugasItems, setTugasItems] = useState<TugasItem[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Check connection status
    setIsConnected(databaseService.getConnectionStatus());
    
    // Load existing data
    loadAllData();
    
    // Test Supabase connection
    testSupabaseConnection();
  }, []);

  const testSupabaseConnection = async () => {
    try {
      const result = await databaseService.testConnection();
      setConnectionTest(result);
    } catch (error) {
      setConnectionTest({ success: false, message: `Test failed: ${error}` });
    }
  };

  const loadAllData = async () => {
    setLoading(true);
    try {
      const [belanja, hutang, tugas] = await Promise.all([
        databaseService.getBelanjaItems(),
        databaseService.getHutangItems(),
        databaseService.getTugasItems(),
      ]);

      setBelanjaItems(belanja);
      setHutangItems(hutang);
      setTugasItems(tugas);
    } catch (error) {
      console.error('Error loading data:', error);
      Alert.alert('Error', 'Failed to load data');
    } finally {
      setLoading(false);
    }
  };

  const testAddBelanja = async () => {
    try {
      const result = await databaseService.addBelanjaItem({
        item_name: 'Test Item ' + Date.now(),
        price: 25000,
        category: 'Test',
        date: new Date().toISOString().split('T')[0],
      });

      if (result.success) {
        Alert.alert('Success', 'Belanja item added successfully!');
        loadAllData();
      }
    } catch (error) {
      console.error('Error adding belanja:', error);
      Alert.alert('Error', 'Failed to add belanja item');
    }
  };

  const testAddHutang = async () => {
    try {
      const result = await databaseService.addHutangItem({
        creditor_name: 'Test Creditor ' + Date.now(),
        amount: 100000,
        due_date: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        description: 'Test hutang description',
        is_paid: false,
      });

      if (result.success) {
        Alert.alert('Success', 'Hutang item added successfully!');
        loadAllData();
      }
    } catch (error) {
      console.error('Error adding hutang:', error);
      Alert.alert('Error', 'Failed to add hutang item');
    }
  };

  const testAddTugas = async () => {
    try {
      const result = await databaseService.addTugasItem({
        task_name: 'Test Task ' + Date.now(),
        description: 'Test task description',
        due_date: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        priority: 'medium',
        is_completed: false,
      });

      if (result.success) {
        Alert.alert('Success', 'Tugas item added successfully!');
        loadAllData();
      }
    } catch (error) {
      console.error('Error adding tugas:', error);
      Alert.alert('Error', 'Failed to add tugas item');
    }
  };

  return (
    <ScrollView className="flex-1 bg-slate-950 p-4">
      <Text className="text-white text-2xl font-bold mb-4">Database Test</Text>
      
      {/* Connection Status */}
      <View className="bg-slate-800 p-4 rounded-lg mb-4">
        <Text className="text-white text-lg font-semibold mb-2">Network Status</Text>
        <Text className={`text-lg mb-2 ${isConnected ? 'text-green-400' : 'text-red-400'}`}>
          {isConnected ? '🟢 Online' : '🔴 Offline'}
        </Text>
        
        <Text className="text-white text-lg font-semibold mb-2">Supabase Connection</Text>
        {connectionTest ? (
          <Text className={`text-sm ${connectionTest.success ? 'text-green-400' : 'text-red-400'}`}>
            {connectionTest.success ? '✅' : '❌'} {connectionTest.message}
          </Text>
        ) : (
          <Text className="text-yellow-400 text-sm">Testing connection...</Text>
        )}
        
        <TouchableOpacity 
          onPress={testSupabaseConnection}
          className="bg-blue-500 p-2 rounded mt-2"
        >
          <Text className="text-white text-center text-sm">Test Connection Again</Text>
        </TouchableOpacity>
      </View>

      {/* Test Buttons */}
      <View className="bg-slate-800 p-4 rounded-lg mb-4">
        <Text className="text-white text-lg font-semibold mb-3">Test Actions</Text>
        
        <TouchableOpacity 
          onPress={testAddBelanja}
          className="bg-blue-600 p-3 rounded-lg mb-2"
        >
          <Text className="text-white text-center font-semibold">Add Test Belanja</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          onPress={testAddHutang}
          className="bg-red-600 p-3 rounded-lg mb-2"
        >
          <Text className="text-white text-center font-semibold">Add Test Hutang</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          onPress={testAddTugas}
          className="bg-green-600 p-3 rounded-lg mb-2"
        >
          <Text className="text-white text-center font-semibold">Add Test Tugas</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          onPress={loadAllData}
          className="bg-purple-600 p-3 rounded-lg"
          disabled={loading}
        >
          <Text className="text-white text-center font-semibold">
            {loading ? 'Loading...' : 'Refresh Data'}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Data Display */}
      <View className="bg-slate-800 p-4 rounded-lg mb-4">
        <Text className="text-white text-lg font-semibold mb-3">
          Belanja Items ({belanjaItems.length})
        </Text>
        {belanjaItems.slice(0, 3).map((item) => (
          <View key={item.id} className="bg-slate-700 p-2 rounded mb-2">
            <Text className="text-white font-semibold">{item.item_name}</Text>
            <Text className="text-gray-300">Rp {item.price.toLocaleString()}</Text>
            <Text className="text-gray-400 text-sm">{item.date}</Text>
          </View>
        ))}
      </View>

      <View className="bg-slate-800 p-4 rounded-lg mb-4">
        <Text className="text-white text-lg font-semibold mb-3">
          Hutang Items ({hutangItems.length})
        </Text>
        {hutangItems.slice(0, 3).map((item) => (
          <View key={item.id} className="bg-slate-700 p-2 rounded mb-2">
            <Text className="text-white font-semibold">{item.creditor_name}</Text>
            <Text className="text-gray-300">Rp {item.amount.toLocaleString()}</Text>
            <Text className={`text-sm ${item.is_paid ? 'text-green-400' : 'text-red-400'}`}>
              {item.is_paid ? 'Paid' : 'Unpaid'}
            </Text>
          </View>
        ))}
      </View>

      <View className="bg-slate-800 p-4 rounded-lg mb-4">
        <Text className="text-white text-lg font-semibold mb-3">
          Tugas Items ({tugasItems.length})
        </Text>
        {tugasItems.slice(0, 3).map((item) => (
          <View key={item.id} className="bg-slate-700 p-2 rounded mb-2">
            <Text className="text-white font-semibold">{item.task_name}</Text>
            <Text className="text-gray-300">{item.priority}</Text>
            <Text className={`text-sm ${item.is_completed ? 'text-green-400' : 'text-yellow-400'}`}>
              {item.is_completed ? 'Completed' : 'Pending'}
            </Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default DatabaseTestScreen;