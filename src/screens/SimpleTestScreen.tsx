import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { testSupabaseConnection, testInsertBelanja, testSelectBelanja } from '../lib/testDatabase';

const SimpleTestScreen: React.FC = () => {
  const [connectionStatus, setConnectionStatus] = useState<{ success: boolean; message: string } | null>(null);
  const [insertResult, setInsertResult] = useState<any>(null);
  const [selectResult, setSelectResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    testConnection();
  }, []);

  const testConnection = async () => {
    setLoading(true);
    try {
      const result = await testSupabaseConnection();
      setConnectionStatus(result);
    } catch (error) {
      setConnectionStatus({ success: false, message: `Error: ${error}` });
    } finally {
      setLoading(false);
    }
  };

  const handleInsertTest = async () => {
    setLoading(true);
    try {
      const result = await testInsertBelanja();
      setInsertResult(result);
      if (result.success) {
        Alert.alert('Success', 'Data berhasil ditambahkan ke Supabase!');
      } else {
        Alert.alert('Error', result.message);
      }
    } catch (error) {
      Alert.alert('Error', `Insert failed: ${error}`);
    } finally {
      setLoading(false);
    }
  };

  const handleSelectTest = async () => {
    setLoading(true);
    try {
      const result = await testSelectBelanja();
      setSelectResult(result);
      if (result.success) {
        Alert.alert('Success', `Berhasil mengambil ${result.data?.length || 0} data dari Supabase!`);
      } else {
        Alert.alert('Error', result.message);
      }
    } catch (error) {
      Alert.alert('Error', `Select failed: ${error}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView className="flex-1 bg-slate-950 p-4">
      <Text className="text-white text-2xl font-bold mb-4">Simple Database Test</Text>
      
      {/* Connection Status */}
      <View className="bg-slate-800 p-4 rounded-lg mb-4">
        <Text className="text-white text-lg font-semibold mb-3">Supabase Connection Test</Text>
        {connectionStatus ? (
          <View>
            <Text className={`text-lg mb-2 ${connectionStatus.success ? 'text-green-400' : 'text-red-400'}`}>
              {connectionStatus.success ? '✅ Connected' : '❌ Failed'}
            </Text>
            <Text className="text-gray-300 text-sm">{connectionStatus.message}</Text>
          </View>
        ) : (
          <Text className="text-yellow-400">Testing connection...</Text>
        )}
        
        <TouchableOpacity 
          onPress={testConnection}
          className="bg-blue-600 p-3 rounded-lg mt-3"
          disabled={loading}
        >
          <Text className="text-white text-center font-semibold">
            {loading ? 'Testing...' : 'Test Connection Again'}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Test Actions */}
      <View className="bg-slate-800 p-4 rounded-lg mb-4">
        <Text className="text-white text-lg font-semibold mb-3">Database Actions</Text>
        
        <TouchableOpacity 
          onPress={handleInsertTest}
          className="bg-green-600 p-3 rounded-lg mb-3"
          disabled={loading}
        >
          <Text className="text-white text-center font-semibold">
            {loading ? 'Loading...' : 'Test Insert Data'}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity 
          onPress={handleSelectTest}
          className="bg-purple-600 p-3 rounded-lg"
          disabled={loading}
        >
          <Text className="text-white text-center font-semibold">
            {loading ? 'Loading...' : 'Test Select Data'}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Insert Result */}
      {insertResult && (
        <View className="bg-slate-800 p-4 rounded-lg mb-4">
          <Text className="text-white text-lg font-semibold mb-2">Insert Result</Text>
          <Text className={`text-sm ${insertResult.success ? 'text-green-400' : 'text-red-400'}`}>
            {insertResult.success ? '✅ Success' : '❌ Failed'}
          </Text>
          {insertResult.data && (
            <Text className="text-gray-300 text-sm mt-2">
              Data: {JSON.stringify(insertResult.data, null, 2)}
            </Text>
          )}
        </View>
      )}

      {/* Select Result */}
      {selectResult && (
        <View className="bg-slate-800 p-4 rounded-lg mb-4">
          <Text className="text-white text-lg font-semibold mb-2">
            Select Result ({selectResult.data ? selectResult.data.length : 0} items)
          </Text>
          <Text className={`text-sm ${selectResult.success ? 'text-green-400' : 'text-red-400'}`}>
            {selectResult.success ? '✅ Success' : '❌ Failed'}
          </Text>
          {selectResult.data && selectResult.data.slice(0, 3).map((item: any) => (
            <View key={item.id} className="bg-slate-700 p-2 rounded mt-2">
              <Text className="text-white font-semibold">{item.item_name}</Text>
              <Text className="text-gray-300">Rp {item.price?.toLocaleString()}</Text>
              <Text className="text-gray-400 text-xs">{item.date}</Text>
            </View>
          ))}
        </View>
      )}

      <View className="bg-yellow-800 p-4 rounded-lg">
        <Text className="text-yellow-100 text-sm">
          💡 <Text className="font-semibold">Tips:</Text> Pastikan Anda sudah menjalankan SQL script di Supabase Dashboard untuk membuat tables.
        </Text>
      </View>
    </ScrollView>
  );
};

export default SimpleTestScreen;