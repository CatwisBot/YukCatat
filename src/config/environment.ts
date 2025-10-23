// Environment Configuration for React Native
export const ENV = {
  // Development
  DEV: {
    SUPABASE_URL: 'your-dev-supabase-url',
    SUPABASE_ANON_KEY: 'your-dev-anon-key',
  },
  
  // Production
  PROD: {
    SUPABASE_URL: 'your-prod-supabase-url',
    SUPABASE_ANON_KEY: 'your-prod-anon-key',
  }
};

// Current environment
export const CURRENT_ENV = __DEV__ ? ENV.DEV : ENV.PROD;

// Database configuration
export const DB_CONFIG = {
  supabaseUrl: CURRENT_ENV.SUPABASE_URL,
  supabaseAnonKey: CURRENT_ENV.SUPABASE_ANON_KEY,
  localDbName: 'YukCatat.db',
};