import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

if (!supabaseUrl || !supabaseKey) {
    console.error('错误：缺少 Supabase 配置');
    console.error('请确保在 .env.local 和 Vercel 环境变量中设置了 SUPABASE_URL 和 SUPABASE_KEY');
}

export const supabase = createClient(supabaseUrl || '', supabaseKey || '');