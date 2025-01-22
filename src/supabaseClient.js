// conexion de la base de datos de supabase al proyecto
import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://dbxovamkteqbkzroqcce.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRieG92YW1rdGVxYmt6cm9xY2NlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQwNTYxNjgsImV4cCI6MjA0OTYzMjE2OH0.RaMT8E4B23IvehIWUZonPViNi7PAe7jz43ZWfG1PgW8';

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

export default supabase;
