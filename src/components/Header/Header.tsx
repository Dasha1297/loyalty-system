import { AppBar, Link } from "@mui/material";

const Header = () => {
  return (
    <AppBar
      position='static'
      sx={{
        backgroundColor: "#c9e4ff",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "center",
        gap: 5,
        p: 2,
      }}
    >
      <Link href='/'>Карты</Link>
      <Link href='/receipt'>Чеки</Link>
    </AppBar>
  );
};

export default Header;
