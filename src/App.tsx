import React, { FC } from "react";
import { Button, Box, Grid, useMediaQuery } from "@mui/material";
import { useAppSelector } from "./hooks/useAppSelector";
import { useAppDispatch } from "./hooks/useAppDispatch";
import { selectApp, setIsModal } from "./redux/reducers/app";
import OrdersList from "./components/List/OrdersList";
import OrderModal from "./components/Modals/OrderModal";

const App: FC = () => {
  const { isModal } = useAppSelector(selectApp);

  const dispatch = useAppDispatch();

  const isSmall = useMediaQuery("(min-width: 360px)");
  const isMedium = useMediaQuery("(min-width: 500px)");

  return (
    <Grid container direction="column" maxWidth={1300}>
      <Box p={2}>
        <Button
          fullWidth
          variant="contained"
          size={isSmall ? "large" : "medium"}
          onClick={() => dispatch(setIsModal(true))}
          sx={{
            "@media (min-width: 411px)": { fontSize: "18px", height: "60px" },
          }}
        >
          Vytvořit novou objednávku
        </Button>
      </Box>
      {isModal && <OrderModal />}
      <OrdersList isMedium={isMedium} />
    </Grid>
  );
};

export default App;
