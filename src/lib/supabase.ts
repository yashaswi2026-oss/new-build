import { createClient } from "@supabase/supabase-js";

const metaEnv = (import.meta as any).env || {};

const supabaseUrl = metaEnv.VITE_SUPABASE_URL || "https://zgghgoevublzuaemxguv.supabase.co";
const supabaseKey = metaEnv.VITE_SUPABASE_ANON_KEY || "sb_publishable_kSCYAAvIi7TRKRYA6gGyHQ_DZuYW_Yf";

export const supabase = createClient(supabaseUrl, supabaseKey);
