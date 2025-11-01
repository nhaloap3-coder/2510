import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://irehriwlkilrkwkbqzff.supabase.co";
const SUPABASE_API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlyZWhyaXdsa2lscmt3a2JxemZmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE5Nzg4MDUsImV4cCI6MjA3NzU1NDgwNX0.YvEqkehDZNSSU1QogSNx60hPE6TQc7B-93u7TmrUwTo";

export const supabase = createClient(SUPABASE_URL, SUPABASE_API_KEY);
