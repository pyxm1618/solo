import { supabase } from '../../lib/supabase';

// 临时存储提交的数据
const submissions = [];

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: '只支持 POST 请求' });
    }

    try {
        const data = req.body;
        // 记录提交时间
        data.submitTime = new Date().toISOString();
        console.log('接收到的数据：', data);
        
        // 临时存储数据
        submissions.push(data);
        console.log('当前申请总数：', submissions.length);
        
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