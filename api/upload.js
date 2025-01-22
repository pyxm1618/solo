import { supabase } from '../lib/supabase';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: '只支持 POST 请求' });
    }

    try {
        const data = req.body;
        console.log('收到的数据：', data);

        if (!data.name || !data.contact || !data.role) {
            return res.status(400).json({
                success: false,
                error: '缺少必要信息'
            });
        }

        // 检查 Supabase 连接
        if (!supabase) {
            console.error('Supabase 客户端未初始化');
            return res.status(500).json({
                success: false,
                error: '数据库连接失败'
            });
        }

        const { error } = await supabase
            .from('applications')
            .insert([data]);

        if (error) {
            console.error('数据库错误：', error);
            return res.status(500).json({
                success: false,
                error: error.message
            });
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