import { supabase } from '../lib/supabase';

export default async function handler(req, res) {
    if (req.method !== 'GET') {
        return res.status(405).json({ error: '只支持 GET 请求' });
    }

    try {
        const { data, error } = await supabase
            .from('applications')
            .select('*')
            .order('created_at', { ascending: false });

        if (error) throw error;
        
        return res.status(200).json({ 
            success: true,
            applications: data 
        });
    } catch (error) {
        console.error('获取数据失败：', error);
        return res.status(500).json({ 
            success: false,
            error: '获取数据失败' 
        });
    }
}