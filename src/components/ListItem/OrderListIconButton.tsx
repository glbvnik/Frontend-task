import React, { FC } from "react";
import { IconButton } from "@mui/material";
import FiberNewOutlinedIcon from "@mui/icons-material/FiberNewOutlined";
import AutorenewOutlinedIcon from "@mui/icons-material/AutorenewOutlined";
import DoneOutlineOutlinedIcon from "@mui/icons-material/DoneOutlineOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import {
  createNewOrder,
  deleteOrder,
  makeDoneOrder,
  makeOrderInPreparation,
} from "../../redux/reducers/order/actions";
import { IOrder, OrderStatus } from "../../models/order";
import { styles } from "./sx";

interface OrderListIconButtonProps {
  order: IOrder;
}

const OrderListIconButton: FC<OrderListIconButtonProps> = ({ order }) => {
  const dispatch = useAppDispatch();

  if (order.status === OrderStatus.NEW) {
    return (
      <IconButton
        edge="end"
        onClick={() => dispatch(makeOrderInPreparation(order))}
      >
        <AutorenewOutlinedIcon />
      </IconButton>
    );
  } else if (order.status === OrderStatus.IN_PREPARATION) {
    return (
      <>
        <IconButton
          edge="end"
          onClick={() => dispatch(createNewOrder(order))}
          sx={styles.iconButton}
        >
          <FiberNewOutlinedIcon />
        </IconButton>
        <IconButton edge="end" onClick={() => dispatch(makeDoneOrder(order))}>
          <DoneOutlineOutlinedIcon />
        </IconButton>
      </>
    );
  } else {
    return (
      <>
        <IconButton
          edge="end"
          onClick={() => dispatch(makeOrderInPreparation(order))}
          sx={styles.iconButton}
        >
          <AutorenewOutlinedIcon />
        </IconButton>
        <IconButton edge="end" onClick={() => dispatch(deleteOrder(order))}>
          <DeleteOutlineOutlinedIcon />
        </IconButton>
      </>
    );
  }
};

export default OrderListIconButton;
