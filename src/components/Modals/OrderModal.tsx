import React, { ChangeEvent, FC, useState } from "react";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from "@mui/material";
import { useAppSelector } from "../../hooks/useAppSelector";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import {
  selectApp,
  setIsModal,
  setOpenedOrder,
} from "../../redux/reducers/app";
import {
  changeOrder,
  createNewOrder,
  deleteOrder,
} from "../../redux/reducers/order/actions";
import { IOrder, OrderStatus } from "../../models/order";
import { cities } from "../../data/cities";
import { styles } from "./sx";
import { OrderService } from "../../services/order";
import { hasEmptyProperty } from "../../utils/hasEmptyProperty";

const CreateOrderModal: FC = () => {
  const { isModal, openedOrder } = useAppSelector(selectApp);

  const dispatch = useAppDispatch();

  const [inputs, setInputs] = useState({
    name: openedOrder.name ?? "",
    description: openedOrder.description ?? "",
    city: openedOrder.city ?? "",
    address: openedOrder.address ?? "",
    status: openedOrder.status ?? OrderStatus.NEW,
  });

  const [errors, setErrors] = useState({
    name: false,
    description: false,
    city: false,
    address: false,
    status: false,
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | SelectChangeEvent
  ) => {
    setErrors({
      name: false,
      description: false,
      city: false,
      address: false,
      status: false,
    });

    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (hasEmptyProperty(inputs)) {
      return setErrors(OrderService.getValidationErrors(inputs));
    }

    if (!openedOrder.id) {
      dispatch(createNewOrder(inputs));
    } else {
      dispatch(changeOrder(inputs));
    }

    handleModalClose();
  };

  const handleModalClose = () => {
    if (openedOrder) {
      dispatch(setOpenedOrder({} as IOrder));
    }
    dispatch(setIsModal(false));
  };

  return (
    <Modal open={isModal} onClose={handleModalClose}>
      <Box sx={styles.modalBox}>
        <Typography variant="h3" sx={styles.header}>
          {openedOrder.name ?? "Nová objednávka"}
        </Typography>
        <form
          onSubmit={handleSubmit}
          style={styles.form as React.CSSProperties}
        >
          <TextField
            error={errors.name}
            name="name"
            label="Name"
            margin="dense"
            value={inputs.name}
            onChange={handleChange}
            sx={styles.input}
          />
          <TextField
            error={errors.description}
            name="description"
            label="Description"
            multiline
            maxRows={4}
            margin="dense"
            value={inputs.description}
            onChange={handleChange}
            sx={styles.input}
          />
          <FormControl margin="dense" sx={styles.select}>
            <InputLabel htmlFor="city">City</InputLabel>
            <Select
              error={errors.city}
              id="city"
              name="city"
              label="City"
              value={inputs.city}
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {cities.map((city) => (
                <MenuItem key={city} value={city}>
                  {city}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            error={errors.address}
            name="address"
            label="Address"
            multiline
            maxRows={2}
            margin="dense"
            value={inputs.address}
            onChange={handleChange}
            sx={styles.input}
          />
          {openedOrder.id && (
            <FormControl margin="dense" sx={styles.statusSelect}>
              <InputLabel htmlFor="status">Status</InputLabel>
              <Select
                error={errors.status}
                id="status"
                name="status"
                label="Status"
                value={inputs.status}
                onChange={handleChange}
              >
                <MenuItem value="">
                  <em>{openedOrder.status}</em>
                </MenuItem>
                {Object.values(OrderStatus).map((status) => (
                  <MenuItem key={status} value={status}>
                    {status}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          )}
          <Button
            variant="contained"
            type="submit"
            size="large"
            sx={styles.button}
          >
            {openedOrder.id ? "Change" : "Create"}
          </Button>
          {openedOrder.id && (
            <Button
              color="error"
              variant="contained"
              type="submit"
              size="large"
              onClick={() => dispatch(deleteOrder(openedOrder))}
              sx={styles.deleteButton}
            >
              Delete
            </Button>
          )}
          <Button
            variant="outlined"
            size="large"
            onClick={handleModalClose}
            sx={styles.button}
          >
            Cancel
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

export default CreateOrderModal;
