import React, { useState } from 'react';

interface HeroImageSelectProps {
    images: string[];
    onSave: (selectedImage: string) => void;
    onCancel: () => void;
}

const HeroImageSelect: React.FC<HeroImageSelectProps> = ({ images, onSave, onCancel }) => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const handleSelect = (image: string) => {
        setSelectedImage(image);
    };

    const handleCancel = () => {
        setSelectedImage(null);
        onCancel();
    };

    return (
        <div className="w-full max-w-4xl mx-auto p-6 bg-white rounded-xl">
            {/* Header aligned left */}
            <h2 className="text-xl font-semibold text-gray-900 mb-1 text-left">Hero media</h2>
            <p className="text-sm text-gray-500 mb-4 text-left">
                Please select ONE cover media to be displayed on the first page.
            </p>

            {/* Bold and light grey divider */}
            <hr className="mb-4 border-t-2 border-gray-300" />

            {/* Image Grid */}
            <div className="grid grid-cols-5 gap-7 max-h-[600px] overflow-y-auto">
                {images.map((img, index) => (
                    <div
                        key={index}
                        onClick={() => handleSelect(img)}
                        className="relative cursor-pointer rounded-lg overflow-hidden"
                    >
                        <img
                            src={img}
                            alt={`Media ${index}`}
                            className={`w-full aspect-square object-cover rounded-lg transition-opacity duration-200 ${selectedImage === img ? 'opacity-100' : 'opacity-70'
                                }`}
                        />
                        <div
                            className={`absolute top-1 left-1 w-5 h-5 rounded-sm border-2 ${selectedImage === img ? 'bg-white border-blue-500' : 'border-white'
                                } flex items-center justify-center`}
                        >
                            {selectedImage === img && (
                                <div className="w-3 h-3 bg-blue-500 rounded-sm" />
                            )}
                        </div>
                    </div>
                ))}
            </div>

            {/* Footer Buttons */}
            <div className="flex justify-end mt-6 gap-3">
                <button
                    onClick={handleCancel}
                    className="px-5 py-2 rounded-full border border-gray-300 text-gray-700 hover:bg-gray-100"
                >
                    Cancel
                </button>
                <button
                    onClick={() => selectedImage && onSave(selectedImage)}
                    disabled={!selectedImage}
                    className="px-5 py-2 rounded-full text-white bg-blue-500 hover:bg-blue-600 disabled:opacity-50"
                >
                    Save
                </button>
            </div>
        </div>
    );
};

export default HeroImageSelect;
