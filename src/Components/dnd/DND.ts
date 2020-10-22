import { useDrag, useDrop } from 'react-dnd';

export function DND(ref: any, payload: any) {
  const [{ isDragging }, drag] = useDrag({
    item: { type: 'GRID_ITEM', ...payload },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, drop] = useDrop({
    accept: 'GRID_ITEM',
    hover: payload.hover
  })

  drag(drop(ref));

  return {
    isDragging
  }
}

export default { DND };