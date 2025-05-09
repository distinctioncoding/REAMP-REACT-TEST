import React from "react";
import { FaTimes } from 'react-icons/fa';
import { createPortal } from "react-dom";

type CommonModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  subtitle?: string;
  children?: React.ReactNode;
  size?: "md" | "lg" | "xl";
};

export default function CommonModal({
  isOpen,
  onClose,
  title = "Modal Title",
  subtitle,
  children,
  size = "md",
}: CommonModalProps) {
  if (!isOpen) return null;

  const widthClass = {
    md: "max-w-md",
    lg: "max-w-4xl",
    xl: "max-w-6xl",
  }[size];

  return createPortal(
    <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-black bg-opacity-50 overflow-y-auto">
      <div className={`w-full bg-white dark:bg-gray-800 rounded-lg shadow relative ${widthClass} flex flex-col max-h-[90vh]`}>
        
        {/* Header */}
        <div className="relative p-5 border-b border-gray-200 dark:border-gray-700">
          <button onClick={onClose} aria-label="Close modal" className="icon-button absolute top-4 right-4 w-6 h-6">
            <FaTimes className="w-6 h-6" />
          </button>
          <div className="pr-10">
            <h3 className="text-[24px] font-bold">{title}</h3>
            {subtitle && <p className="text-[18px] text-[#5D5D5D]">{subtitle}</p>}
          </div>
        </div>

        {/* Body */}
        <div className="overflow-y-auto flex-1 p-5">{children}</div>

      </div>
    </div>,
    document.body
  );
}
