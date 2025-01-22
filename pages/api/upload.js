import { supabase } from '../../lib/supabase';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: '只支持 POST 请求' });
    }

    try {
        // 这里添加你的数据处理逻辑
        console.log('收到的数据：', req.body);
        
        return res.status(200).json({ 
            success: true, 
            message: '申请已提交成功' 
        });
    } catch (error) {
        console.error('处理错误：', error);
        return res.status(500).json({ 
            success: false,
            error: error.message || '服务器处理错误' 
        });
    }
}