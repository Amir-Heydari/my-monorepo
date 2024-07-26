import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

interface ListItemProps {
  icon: React.ReactNode;
  label: string;
}

interface ListItemsProps {
  items: ListItemProps[];
}

export const ListItems: React.FC<ListItemsProps> = ({ items }) => {
  return (
    <>
      {items.map((v, index) => (
        <ListItemButton key={index}>
          <ListItemIcon>
            {v.icon}
          </ListItemIcon>
          <ListItemText primary={v.label} />
        </ListItemButton>
      ))}
    </>
  );
};

export default ListItems;
