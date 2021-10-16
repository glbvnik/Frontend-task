import React, { FC } from "react";
import { List, ListSubheader, Paper } from "@mui/material";
import { IOrder } from "../../models/order";
import OrderListItem from "../ListItem/OrderListItem";
import { styles } from "./sx";

interface OneListProps {
  name: string;
  items: IOrder[];
  isMedium: boolean;
}

const OneList: FC<OneListProps> = ({ name, items, isMedium }) => {
  return (
    <Paper square elevation={isMedium ? 0 : 3}>
      <List>
        <ListSubheader sx={styles.listSubheader}>{name}</ListSubheader>
        {items.map((item) => (
          <OrderListItem key={item.id} order={item} isMedium={isMedium} />
        ))}
      </List>
    </Paper>
  );
};

export default OneList;
