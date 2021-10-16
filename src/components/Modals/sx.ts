import { SxProps, Theme } from "@mui/system";

export const styles: { [key: string]: SxProps<Theme> } = {
  modalBox: {
    bgcolor: "background.paper",
    border: "1px solid black",
    boxShadow: 24,
    transform: "translate(-50%, -50%)",
    width: "86%",
    maxWidth: 1000,
    p: 4,
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
  },
  header: { fontSize: "22px", textAlign: "center", mb: "10px" },
  form: { display: "flex", flexWrap: "wrap", justifyContent: "space-between" },
  input: {
    flexBasis: "100%",
    "@media (min-width: 768px)": { flexBasis: "49%" },
  },
  select: {
    flexBasis: "100%",
    "@media (min-width: 768px)": {
      flexBasis: "49%",
    },
  },
  statusSelect: {
    flexBasis: "100%",
  },
  button: {
    flexBasis: "100%",
    "&:first-of-type": { my: 1, "@media (min-width: 768px)": { mt: "20px" } },
  },
  deleteButton: {
    flexBasis: "100%",
    mb: 1,
  },
};
