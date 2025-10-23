import { supabase } from '../config/supabase';

// Simple test function untuk test koneksi Supabase
export const testSupabaseConnection = async () => {
  try {
    console.log('Testing Supabase connection...');
    
    // Test basic select
    const { data, error } = await supabase
      .from('belanja')
      .select('count')
      .limit(1);

    if (error) {
      console.error('Supabase connection error:', error);
      return { success: false, message: error.message };
    }

    console.log('Supabase connection successful!', data);
    return { success: true, message: 'Connected successfully!' };
  } catch (error) {
    console.error('Network/connection error:', error);
    return { success: false, message: `Network error: ${error}` };
  }
};

// Test insert data
export const testInsertBelanja = async () => {
  try {
    const testItem = {
      item_name: 'Test Item ' + Date.now(),
      price: 25000,
      category: 'Test',
      date: new Date().toISOString().split('T')[0],
    };

    console.log('Inserting test data:', testItem);

    const { data, error } = await supabase
      .from('belanja')
      .insert([testItem])
      .select();

    if (error) {
      console.error('Insert error:', error);
      return { success: false, message: error.message };
    }

    console.log('Insert successful:', data);
    return { success: true, data };
  } catch (error) {
    console.error('Insert network error:', error);
    return { success: false, message: `Insert failed: ${error}` };
  }
};

// Test select data
export const testSelectBelanja = async () => {
  try {
    console.log('Fetching belanja data...');

    const { data, error } = await supabase
      .from('belanja')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(10);

    if (error) {
      console.error('Select error:', error);
      return { success: false, message: error.message };
    }

    console.log('Select successful:', data);
    return { success: true, data };
  } catch (error) {
    console.error('Select network error:', error);
    return { success: false, message: `Select failed: ${error}` };
  }
};