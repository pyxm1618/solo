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
                error: '请填写完整信息'
            });
        }

        const { data: result, error } = await supabase
            .from('applications')
            .insert([data]);

        if (error) {
            console.error('数据库错误：', error);
            return res.status(500).json({
                success: false,
                error: '数据保存失败'
            });
        }
        
        return res.status(200).json({ 
            success: true, 
            message: '申请已提交成功'
        });
    } catch (error) {
        console.error('服务器错误：', error);
        return res.status(500).json({ 
            success: false,
            error: '服务器处理错误'
        });
    }
}