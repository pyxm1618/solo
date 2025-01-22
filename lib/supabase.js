import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

if (!supabaseUrl || !supabaseKey) {
    console.error('缺少 Supabase 配置');
}

const supabase = createClient(supabaseUrl, supabaseKey);

// 测试连接
supabase.from('applications').select('count').then(({ data, error }) => {
    if (error) {
        console.error('Supabase 连接失败:', error);
    } else {
        console.log('Supabase 连接成功');
    }
});

export { supabase };