import React, { useState } from 'react';
import { RxCross2 } from "react-icons/rx";

interface CreateAgentModelProps {
  isVisible: boolean;
  onClose: () => void;
}

export default function CreateAgentModel({ isVisible, onClose }: CreateAgentModelProps) {
  if (!isVisible) return null;
  
  // 添加状态管理上传的图片和预览URL
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [, setSelectedImage] = useState<File | null>(null);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  
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
  
  return (
    <div 
      className="fixed inset-0 flex items-center justify-center overflow-hidden z-[100]"
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}
      onClick={onClose}
    >
      <div 
        className="relative w-[800px] max-w-[90vw] h-[1000px] max-h-[96vh] border border-gray-200 rounded-md bg-white overflow-auto px-6 py-3"
        onClick={(e) => e.stopPropagation()}
      >
        <RxCross2 className='absolute w-6 h-6 top-6 right-6 text-gray-600 text-xl cursor-pointer hover:text-gray-900'
            onClick={onClose}
        />
       
        <form className='h-full'  action="">
             {/* Header */}
            <div className=' h-[10%] p-3 pt-2 border-b-2 border-b-gray-100 flex flex-col items-start'>
                <h3 className="text-xl font-bold text-left">Create a new Agent</h3>
                <div className="text-base text-gray-600 text-left pt-1">Please complete below information</div>
                </div>
                    {/* Content */}
            <div className='h-[80%] border-b-2 border-b-gray-100 flex items-center justify-center'>
                <div className='w-[60%] h-full '>
                    
                    {/* 圆形图片上传区域 */}
                    <div className="flex flex-col items-center  mt-4">
                        <div 
                            className="w-20 h-20 relative cursor-pointer mb-3"
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
                        
                        <span className="text-base text-gray-600">Photo</span>
                    
                        
                        {/* 隐藏的文件输入 */}
                        <input 
                            id="image-upload" 
                            type="file" 
                            accept="image/*" 
                            className="hidden" 
                            onChange={handleImageChange} 
                        />
                    </div>

                    
                    <div className="w-full space-y-3">
                        {/* First Name */}
                        <div className="w-full">
                            <label className="block text-base font-medium text-gray-700 mb-1 text-left">First Name</label>
                            <input
                                type="text"
                                className="w-full px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                placeholder="Enter agent first name"
                            />
                        </div>
                        {/* Last Name */}
                        <div className="w-full">
                            <label className="block text-base font-medium text-gray-700 mb-1 text-left">Last Name</label>
                            <input
                                type="text"
                                className="w-full px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                placeholder="Enter agent last name"
                            />
                        </div>
                        {/* Email */}
                        <div className="w-full">
                            <label className="block text-base font-medium text-gray-700 mb-1 text-left">Email</label>
                            <input
                                type="text"
                                className="w-full px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                placeholder="Enter email"
                            />
                        </div>
                        {/* Phone number */}
                        <div className="w-full">
                            <label className="block text-base font-medium text-gray-700 mb-1 text-left">Phone Number</label>
                            <input
                                type="text"
                                className="w-full px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                placeholder="Enter phone number"
                            />
                        </div>
                        {/* Team or Office Name */}
                        <div className="w-full">
                            <label className="block text-base font-medium text-gray-700 mb-1 text-left"> Team or Office Name</label>
                            <input
                                type="text"
                                className="w-full px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                placeholder="Enter Team or Office Name"
                            />
                        </div>
                        
                        
                    </div>

                </div>
            </div>

                {/* Bottom */}
            <div className=' h-[10%] flex items-center justify-end '>
                    <button className='!rounded-3xl !bg-white !font-semibold  text-base !border-2 !border-black !px-6 !py-2 !hover:bg-gray-100' onClick={onClose}>
                    Cancel
                    </button>
                    <button className='ml-5 !rounded-3xl !font-semibold text-base text-white !px-6 !py-2.35 '
                    style={{ background: 'linear-gradient(to right, #1cadf8, #1099e1)' }}
                    type='submit'
                    >Create</button>
            </div>

        </form>
        

      </div>
    </div>
  );
}
