export default async function handler(req, res) {
    if (req.method !== 'GET') {
        return res.status(405).json({ error: '只支持 GET 请求' });
    }

    try {
        // 这里应该从数据库获取数据
        // 目前返回测试数据
        const applications = [
            {
                userId: Date.now().toString(),
                name: '测试用户',
                role: '程序员',
                workStatus: '自由职业',
                contact: 'test@example.com',
                experience: '有多个独立开发项目经验'
            }
        ];
        
        return res.status(200).json({ 
            success: true,
            applications 
        });
    } catch (error) {
        return res.status(500).json({ 
            success: false,
            error: '获取数据失败' 
        });
    }
}