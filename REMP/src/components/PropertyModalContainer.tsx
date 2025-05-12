import React, { useState } from 'react';
import CommonModal from './CommonModal';
import PropertyForm from './PropertyForm';

type PropertyModalContainerProps = {
  onClose: () => void;
};

export default function PropertyModalContainer({ onClose }: PropertyModalContainerProps) {
  return (
    <CommonModal
      isOpen={true}
      onClose={onClose}
      title="Property details"
      subtitle="Please take a moment to review and complete property details"
      size="lg"
    >
      <PropertyForm onClose={onClose} />
    </CommonModal>
  );
}
