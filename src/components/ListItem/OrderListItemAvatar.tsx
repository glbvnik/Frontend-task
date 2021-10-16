import React, { FC } from "react";
import { Avatar } from "@mui/material";
import FiberNewOutlinedIcon from "@mui/icons-material/FiberNewOutlined";
import AutorenewOutlinedIcon from "@mui/icons-material/AutorenewOutlined";
import DoneOutlineOutlinedIcon from "@mui/icons-material/DoneOutlineOutlined";
import { green, red, yellow } from "@mui/material/colors";
import { OrderStatus } from "../../models/order";

interface OrderListItemAvatarProps {
  status: OrderStatus;
}

const OrderListItemAvatar: FC<OrderListItemAvatarProps> = ({ status }) => {
  if (status === OrderStatus.NEW) {
    return (
      <Avatar variant="rounded" sx={{ bgcolor: red[100] }}>
        <FiberNewOutlinedIcon />
      </Avatar>
    );
  } else if (status === OrderStatus.IN_PREPARATION) {
    return (
      <Avatar variant="rounded" sx={{ bgcolor: yellow[100] }}>
        <AutorenewOutlinedIcon />
      </Avatar>
    );
  }
  return (
    <Avatar variant="rounded" sx={{ bgcolor: green[100] }}>
      <DoneOutlineOutlinedIcon />
    </Avatar>
  );
};

export default OrderListItemAvatar;
