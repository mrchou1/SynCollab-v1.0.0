import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://mrbbfkzzhbfuacwdzohf.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1yYmJma3p6aGJmdWFjd2R6b2hmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODE0NzkzNTUsImV4cCI6MTk5NzA1NTM1NX0.8Ate2Ug4q80xGilQsbLxmQEPcT_pAfS6n42DX_d0_Qk"
);