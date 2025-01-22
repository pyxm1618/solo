import { supabase } from '../lib/supabase';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: '只支持 POST 请求' });
    }

    try {
        const data = req.body;
        const { error } = await supabase
            .from('applications')
            .insert([data]);

        if (error) throw error;
        
        return res.status(200).json({ 
            success: true, 
            message: '申请已提交成功' 
        });
    } catch (error) {
        console.error('提交失败：', error);
        return res.status(500).json({ 
            success: false,
            error: '服务器处理错误' 
        });
    }
}