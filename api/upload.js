export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: '只支持 POST 请求' });
  }

  try {
    // 记录提交的数据
    console.log('收到的申请：', req.body);
    
    // 这里可以添加数据存储逻辑
    // 例如：发送邮件通知、保存到数据库等
    
    return res.status(200).json({ 
      success: true, 
      message: '申请已提交成功' 
    });
  } catch (error) {
    console.error('处理错误：', error);
    return res.status(500).json({ 
      success: false,
      error: '服务器处理错误' 
    });
  }
}