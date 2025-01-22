import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY || process.env.SUPABASE_KEY;

if (!supabaseUrl || !supabaseKey) {
    throw new Error('缺少 Supabase 配置，请检查环境变量');
}

const supabase = createClient(supabaseUrl, supabaseKey);

// 测试连接
async function testConnection() {
    try {
        const { data, error } = await supabase.from('applications').select('count');
        if (error) throw error;
        console.log('Supabase 连接成功');
    } catch (error) {
        console.error('Supabase 连接失败:', error.message);
    }
}

testConnection();

export { supabase };