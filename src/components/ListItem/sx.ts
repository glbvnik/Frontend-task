import { SxProps, Theme } from "@mui/system";

export const styles: { [key: string]: SxProps<Theme> } = {
  listItem: {
    pr: "16px",
    zIndex: 10,
    // order item content
    ".MuiListItemButton-root": { width: "100%", pr: 0 },
    // order date
    ".MuiListItemText-secondary": {
      fontSize: "12px",
      "@media (min-width: 360px)": { fontSize: "13px" },
      "@media (min-width: 411px)": { fontSize: "14px" },
    },
    // button box
    ".MuiListItemSecondaryAction-root": {
      display: "flex",
      justifyContent: "end",
      flex: "1 0",
      transform: "none",
      WebkitTransform: "none",
      position: "static",
    },
  },
  iconButton: {
    mr: "0px",
  },
};
