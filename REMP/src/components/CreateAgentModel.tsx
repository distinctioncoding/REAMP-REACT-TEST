import React, { useState } from 'react';
import { RxCross2 } from "react-icons/rx";

interface CreateAgentModelProps {
  isVisible: boolean;
  onClose: () => void;
}

export default function CreateAgentModel({ isVisible, onClose }: CreateAgentModelProps) {
  // 添加状态管理上传的图片和预览URL
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    email: '',
    agentFirstName: '',
    agentLastName: '',
    companyName: '',
    phoneNumber: ''
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  // 处理表单字段变化
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  // 处理图片选择
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedImage(file);
      
      // 创建预览URL
      const fileUrl = URL.createObjectURL(file);
      setPreviewUrl(fileUrl);
    }
  };

  if (!isVisible) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    setSuccess(null);
    console.log('Form data:', formData);
    
    try {
      // 创建 FormData 对象
      const submitFormData = new FormData();
      submitFormData.append('Email', formData.email); // 注意首字母大写
      submitFormData.append('AgentFirstName', formData.agentFirstName);
      submitFormData.append('AgentLastName', formData.agentLastName);
      submitFormData.append('CompanyName', formData.companyName);
      submitFormData.append('PhoneNumber', formData.phoneNumber);
      
      // 添加图片（如果有）
      if (selectedImage) {
        submitFormData.append('AvatarImage', selectedImage); // 注意首字母大写
      }
      
      // 发送请求到后端API
      const response = await fetch('/api/User/CreateAgentAccount', {
        method: 'POST',
        body: submitFormData,
      });
      
      // 处理响应
      if (response.ok) {
        // 检查响应是否为空
        const text = await response.text();
        let result;
        try {
          // 尝试解析 JSON (如果存在)
          result = text ? JSON.parse(text) : {};
        } catch (e) {
          console.warn('Could not parse response as JSON:', text);
          result = {};
        }
        
        setSuccess('Agent created successfully');
        console.log('Success:', result);
        
        // 清空表单或关闭模态框
        setTimeout(() => {
          onClose();
        }, 1500);
      } else if (response.status === 409) {
        // 同样安全地解析 JSON
        const text = await response.text();
        const errorData = text ? JSON.parse(text) : {};
        setError(errorData.message || 'Email already exists.');
      } else {
        // 同样安全地解析 JSON
        const text = await response.text();
        let errorData = {};
        try {
          errorData = text ? JSON.parse(text) : {};
        } catch (e) {
          console.warn('Error response is not valid JSON:', text);
        }
        setError(errorData.message || `Failed to create agent. Status: ${response.status}`);
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
      console.error('Error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div 
      className="fixed inset-0 flex items-center justify-center overflow-hidden z-[100]"
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}
      onClick={onClose}
    >
      <div 
        className="relative w-[700px] max-w-[80vw] h-[1000px] max-h-[96vh] border border-gray-200 rounded-md bg-white overflow-auto px-6 py-3"
        onClick={(e) => e.stopPropagation()}
      >
        <RxCross2 className='absolute w-6 h-6 top-6 right-6 text-gray-600 text-xl cursor-pointer hover:text-gray-900'
            onClick={onClose}
        />
       
        <form className='h-full' onSubmit={handleSubmit}>
             {/* Header */}
            <div className=' h-[12%] p-3 pt-2 border-b-2 border-b-gray-100 flex flex-col items-start'>
                <h3 className="text-[1.15rem] font-bold text-left">Create a new Agent</h3>
                <div className="!text-sm text-gray-600 text-left ">Please complete below information</div>
                </div>
                    {/* Content */}
            <div className='h-[78%] border-b-2 border-b-gray-100 flex items-center justify-center'>
                <div className='w-[50%] h-full '>
                    
                    {/* 圆形图片上传区域 */}
                    <div className="flex flex-col items-center  mt-4">
                        <div 
                            className="w-16 h-16 relative cursor-pointer mb-3"
                            onClick={() => document.getElementById('image-upload')?.click()}
                        >
                            {previewUrl ? (
                                <div className="relative w-full h-full">
                                    {/* 圆形图片预览 */}
                                    <img 
                                        src={previewUrl} 
                                        alt="Profile" 
                                        className="w-full h-full rounded-full object-cover border-2 border-gray-200"
                                    />
                                    
                                    {/* 编辑悬浮提示 */}
                                    <div className="absolute inset-0 bg-black  bg-opacity-50 rounded-full flex items-center justify-center opacity-0 hover:opacity-80 transition-opacity">
                                        <span className="text-white text-sm font-medium">Edit</span>
                                    </div>
                                </div>
                            ) : (
                                <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                    </svg>
                                </div>
                            )}
                        </div>
                        
                        <span className="text-sm text-gray-600">Photo</span>
                    
                        
                        {/* 隐藏的文件输入 */}
                        <input 
                            id="image-upload" 
                            type="file" 
                            accept="image/*" 
                            className="hidden" 
                            onChange={handleImageChange} 
                        />
                    </div>

                    
                    <div className="w-full space-y-2 text-sm">
                        {/* First Name */}
                        <div className="w-full">
                            <label className="block font-medium text-gray-700 mb-1 text-left">First Name</label>
                            <input
                                type="text"
                                name="agentFirstName"
                                value={formData.agentFirstName}
                                onChange={handleInputChange}
                                className="w-full px-3 py-1 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                placeholder="Enter agent first name"
                                required
                            />
                        </div>
                        {/* Last Name */}
                        <div className="w-full">
                            <label className="block font-medium text-gray-700 mb-1 text-left">Last Name</label>
                            <input
                                type="text"
                                name="agentLastName"
                                value={formData.agentLastName}
                                onChange={handleInputChange}
                                className="w-full px-3 py-1 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                placeholder="Enter agent last name"
                                required
                            />
                        </div>
                        {/* Email */}
                        <div className="w-full">
                            <label className="block font-medium text-gray-700 mb-1 text-left">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className="w-full px-3 py-1 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                placeholder="Enter email"
                                required
                            />
                        </div>
                        {/* Phone number */}
                        <div className="w-full">
                            <label className="block font-medium text-gray-700 mb-1 text-left">Phone Number</label>
                            <input
                                type="tel"
                                name="phoneNumber"
                                value={formData.phoneNumber}
                                onChange={handleInputChange}
                                className="w-full px-3 py-1 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                placeholder="Enter phone number"
                                required
                            />
                        </div>
                        {/* Team or Office Name */}
                        <div className="w-full">
                            <label className="block font-medium text-gray-700 mb-1 text-left">Team or Office Name</label>
                            <input
                                type="text"
                                name="companyName"
                                value={formData.companyName}
                                onChange={handleInputChange}
                                className="w-full px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                placeholder="Enter Team or Office Name"
                                required
                            />
                        </div>
                        
                        
                    </div>

                </div>
            </div>

                {/* Bottom */}
            <div className=' h-[10%] flex items-center justify-end '>
                    <button 
                      type="button"
                      className='!rounded-3xl !bg-white !font-semibold  text-base !border-2 !border-black !px-4 !py-1.25 !hover:bg-gray-100' 
                      onClick={onClose}
                    >
                    Cancel
                    </button>
                    <button 
                      type="submit"
                      className='ml-5 !rounded-3xl !font-semibold text-base text-white !px-4 !py-1.25 '
                      style={{ background: 'linear-gradient(to right, #1cadf8, #1099e1)' }}
                      disabled={isSubmitting}
                    >
                    {isSubmitting ? 'Creating...' : 'Create'}
                    </button>
            </div>

        </form>
        

      </div>
    </div>
  );
}
