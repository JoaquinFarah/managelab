import { createClient } from '@supabase/supabase-js';


const supabaseUrl = 'https://isngupeakgavixqodmsy.supabase.co'; 
const supabaseAnonKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlzbmd1cGVha2dhdml4cW9kbXN5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzkyODU2OTgsImV4cCI6MjA1NDg2MTY5OH0.fv511Tut5FbIn-PZdeRpJ1F5fA1m04ke1MYW_wwx4ms'; 
  
export const supabase = createClient(supabaseUrl, supabaseAnonKey);