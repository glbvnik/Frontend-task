import React, { FC } from "react";
import { Box, Grid, Paper } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { useAppSelector } from "../../hooks/useAppSelector";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { dragOrder } from "../../redux/reducers/order/actions";
import { selectOrder } from "../../redux/reducers/order";
import { selectApp } from "../../redux/reducers/app";
import { OrderStatus } from "../../models/order";
import OneList from "./OneList";
import { styles } from "./sx";

export enum OrderListNames {
  NEW = "Nové",
  IN_PREPARATION = "Připravováno",
  DONE = "Hotovo",
}

const listStatusDictionary = {
  [OrderListNames.NEW]: OrderStatus.NEW,
  [OrderListNames.IN_PREPARATION]: OrderStatus.IN_PREPARATION,
  [OrderListNames.DONE]: OrderStatus.DONE,
};

interface OrderListProps {
  isMedium: boolean;
}

const OrdersList: FC<OrderListProps> = ({ isMedium }) => {
  const { orders } = useAppSelector(selectOrder);
  const { draggedOrder } = useAppSelector(selectApp);

  const dispatch = useAppDispatch();

  const dragOverHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const dropOrderHandler = (
    _: React.DragEvent<HTMLDivElement>,
    list: OrderListNames
  ) => {
    if (listStatusDictionary[list] !== draggedOrder.status) {
      dispatch(dragOrder(list));
    }
  };

  if (isMedium) {
    return (
      <Box p={2}>
        <Paper sx={styles.listPaprt}>
          <Grid container>
            <Grid
              item
              sx={styles.listGridItem}
              onDragOver={dragOverHandler}
              onDrop={(e) => dropOrderHandler(e, OrderListNames.NEW)}
            >
              <OneList
                name={OrderListNames.NEW}
                items={orders.filter(
                  (order) => order.status === OrderStatus.NEW
                )}
                isMedium={isMedium}
              />
            </Grid>
            <Grid
              item
              sx={styles.listGridItem}
              onDragOver={dragOverHandler}
              onDrop={(e) => dropOrderHandler(e, OrderListNames.IN_PREPARATION)}
            >
              <OneList
                name={OrderListNames.IN_PREPARATION}
                items={orders.filter(
                  (order) => order.status === OrderStatus.IN_PREPARATION
                )}
                isMedium={isMedium}
              />
            </Grid>
            <Grid
              item
              sx={styles.listGridItem}
              onDragOver={dragOverHandler}
              onDrop={(e) => dropOrderHandler(e, OrderListNames.DONE)}
            >
              <OneList
                name={OrderListNames.DONE}
                items={orders.filter(
                  (order) => order.status === OrderStatus.DONE
                )}
                isMedium={isMedium}
              />
            </Grid>
          </Grid>
        </Paper>
      </Box>
    );
  }

  return (
    <Swiper className="swiper" spaceBetween={10}>
      <SwiperSlide className="swiperSlide">
        <OneList
          name={OrderListNames.NEW}
          items={orders.filter((order) => order.status === OrderStatus.NEW)}
          isMedium={isMedium}
        />
      </SwiperSlide>
      <SwiperSlide className="swiperSlide">
        <OneList
          name={OrderListNames.IN_PREPARATION}
          items={orders.filter(
            (order) => order.status === OrderStatus.IN_PREPARATION
          )}
          isMedium={isMedium}
        />
      </SwiperSlide>
      <SwiperSlide className="swiperSlide">
        <OneList
          name={OrderListNames.DONE}
          items={orders.filter((order) => order.status === OrderStatus.DONE)}
          isMedium={isMedium}
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default OrdersList;
