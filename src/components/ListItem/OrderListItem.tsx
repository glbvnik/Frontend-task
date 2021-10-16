import React, { FC } from "react";
import {
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { setDraggedOrder, setOpenedOrder } from "../../redux/reducers/app";
import { IOrder } from "../../models/order";
import OrderListItemAvatar from "./OrderListItemAvatar";
import OrderListIconButton from "./OrderListIconButton";
import { styles } from "./sx";

interface OrderListItemProps {
  order: IOrder;
  isMedium: boolean;
}

const OrderListItem: FC<OrderListItemProps> = ({ order, isMedium }) => {
  const dispatch = useAppDispatch();

  const dragStartHandler = (
    _: React.DragEvent<HTMLLIElement>,
    item: IOrder
  ) => {
    dispatch(setDraggedOrder(item));
  };

  const dragOverHandler = (e: React.DragEvent<HTMLLIElement>) => {
    e.preventDefault();
  };

  const dragHandler = (e: React.DragEvent<HTMLLIElement>) => {
    e.preventDefault();
  };

  return (
    <ListItem
      disablePadding
      secondaryAction={<OrderListIconButton order={order} />}
      draggable={isMedium}
      onDragStart={(e) => dragStartHandler(e, order)}
      onDragOver={dragOverHandler}
      onDrag={dragHandler}
      sx={styles.listItem}
    >
      <ListItemButton onClick={() => dispatch(setOpenedOrder(order))}>
        <ListItemAvatar>
          <OrderListItemAvatar status={order.status} />
        </ListItemAvatar>
        <ListItemText primary={order.name} secondary={order.date} />
      </ListItemButton>
    </ListItem>
  );
};

export default OrderListItem;
