import { Link, Menu, MenuItem } from "@mui/material";

type MenuBlockPropsType = {
  card_uuid: string;
  anchorEl: HTMLElement | null;
  handleClose: () => void;
};
const MenuBlock = ({
  card_uuid,
  anchorEl,
  handleClose,
}: MenuBlockPropsType) => {
  const open = Boolean(anchorEl);
  const id = card_uuid;

  return (
    <Menu
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      MenuListProps={{
        "aria-labelledby": "basic-button",
      }}
      PaperProps={{
        elevation: 0,
        sx: {
          overflow: "visible",
          filter: "drop-shadow(0px 2px 3px rgba(0,0,0,0.1))",
          mt: 1.5,
          "&:before": {
            content: '""',
            display: "block",
            position: "absolute",
            top: 0,
            right: 14,
            width: 10,
            height: 10,
            bgcolor: "background.paper",
            transform: "translateY(-50%) rotate(45deg)",
            zIndex: 0,
          },
        },
      }}
      transformOrigin={{ horizontal: "right", vertical: "top" }}
      anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
    >
      <MenuItem>
        <Link href={`/transaction/?card_uuid=${id}&from=`}>
          Список транзакций
        </Link>
      </MenuItem>
    </Menu>
  );
};

export default MenuBlock;
