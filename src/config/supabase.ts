import 'react-native-url-polyfill/auto';
import { createClient } from '@supabase/supabase-js';
import { DB_CONFIG } from './environment';

export const supabase = createClient(DB_CONFIG.supabaseUrl, DB_CONFIG.supabaseAnonKey, {
  auth: {
    // Disable automatic session refresh untuk mobile app
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});

// Database Tables Interface
export interface BelanjaItem {
  id?: string;
  item_name: string;
  price: number;
  category: string;
  date: string;
  created_at?: string;
  user_id?: string;
}

export interface HutangItem {
  id?: string;
  creditor_name: string;
  amount: number;
  due_date: string;
  description?: string;
  is_paid: boolean;
  created_at?: string;
  user_id?: string;
}

export interface TugasItem {
  id?: string;
  task_name: string;
  description?: string;
  due_date: string;
  priority: 'low' | 'medium' | 'high';
  is_completed: boolean;
  created_at?: string;
  user_id?: string;
}