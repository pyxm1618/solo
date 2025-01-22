import { supabase } from '../lib/supabase';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: '只支持 POST 请求' });
    }

    try {
        const data = req.body;
        console.log('收到的数据：', data);  // 添加日志

        // 确保必要字段存在
        if (!data.name || !data.contact || !data.role) {
            return res.status(400).json({
                success: false,
                error: '缺少必要信息'
            });
        }

        const { error } = await supabase
            .from('applications')
            .insert([data]);

        if (error) {
            console.error('数据库错误：', error);  // 添加错误日志
            throw error;
        }
        
        return res.status(200).json({ 
            success: true, 
            message: '申请已提交成功' 
        });
    } catch (error) {
        console.error('提交失败：', error);
        return res.status(500).json({ 
            success: false,
            error: error.message || '服务器处理错误'
        });
    }
}