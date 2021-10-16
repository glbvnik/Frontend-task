import { SxProps, Theme } from "@mui/system";

export const styles: { [key: string]: SxProps<Theme> } = {
  // one list style
  listSubheader: {
    fontSize: "18px",
    "@media (min-width: 411px)": { fontSize: "20px" },
  },
  // whole list style
  listPaper: { width: "100%" },
  listGridItem: {
    flex: "1 0",
    borderRight: "solid 1px rgb(0, 0, 0, 0.35)",
    "&:last-child": { borderRight: "none" },
  },
};
