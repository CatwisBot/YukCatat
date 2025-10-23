// Environment Configuration for React Native
export const ENV = {
  // Development
  DEV: {
    SUPABASE_URL: 'https://mpercebsfqqpcczvkupa.supabase.co',
    SUPABASE_ANON_KEY: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1wZXJjZWJzZnFxcGNjenZrdXBhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjEyMTkxNDgsImV4cCI6MjA3Njc5NTE0OH0.BsrVwA_vxWjTj5qMRCVHsMSBQmFbCAO8YpdSZaPfME8',
  },
  
  // Production
  PROD: {
    SUPABASE_URL: 'https://mpercebsfqqpcczvkupa.supabase.co',
    SUPABASE_ANON_KEY: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1wZXJjZWJzZnFxcGNjenZrdXBhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjEyMTkxNDgsImV4cCI6MjA3Njc5NTE0OH0.BsrVwA_vxWjTj5qMRCVHsMSBQmFbCAO8YpdSZaPfME8',
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