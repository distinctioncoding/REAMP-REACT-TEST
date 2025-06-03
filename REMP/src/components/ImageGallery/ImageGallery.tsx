// src/components/ImageGallery/ImageGallery.tsx
import React, { useState } from 'react';
import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  horizontalListSortingStrategy,
} from '@dnd-kit/sortable';
import { SortableItem } from './SortableItem';

interface ImageItem {
  id: string;
  url: string;
}

interface ImageGalleryProps {
  images: ImageItem[];
  onReorder: (newOrder: ImageItem[]) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, onReorder }) => {
  const [items, setItems] = useState(images);
  const sensors = useSensors(useSensor(PointerSensor));

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (active.id !== over?.id) {
      const oldIndex = items.findIndex(item => item.id === active.id);
      const newIndex = items.findIndex(item => item.id === over?.id);
      const reordered = arrayMove(items, oldIndex, newIndex);
      setItems(reordered);
      onReorder(reordered);
    }
  };

  return (
    <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <SortableContext items={items.map(item => item.id)} strategy={horizontalListSortingStrategy}>
        <div style={{ display: 'flex', overflowX: 'auto' }}>
          {items.map(item => (
            <SortableItem key={item.id} id={item.id} url={item.url} />
          ))}
        </div>
      </SortableContext>
    </DndContext>
  );
};

export default ImageGallery;
