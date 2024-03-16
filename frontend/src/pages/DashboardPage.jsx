import { BottomNavigation, BottomNavigationAction, Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Paper, Stack, useMediaQuery } from "@mui/material"
import PeopleIcon from '@mui/icons-material/People'
import { Outlet, Link, useLocation, useNavigate } from "react-router-dom"
import { useTheme } from "@emotion/react"
import { useState } from "react"

const DashboardPage = () => {
    const theme = useTheme()
    const { pathname } = useLocation()
    const isNonMobileScreen = useMediaQuery("(min-width: 1050px)")
    const navigate = useNavigate()
    const [value, setValue] = useState("/dashboard/users")

    const handleValueChange = (value) => {
        navigate(value)
    }

    return (
        <>
            {isNonMobileScreen ? (
                <Box display={"flex"} flexDirection={"row"}>
                    <Box width={{ sm: "180px"}}>
                        <Stack height={"calc(100vh - 68px)"} sx={{ borderRight: "1px solid", borderColor: theme.palette.mode === "light" ? "#d4d4d8" : "#404040" }}>
                            <List sx={{ py: 0}}>
                                <ListItem sx={{ color: theme.palette.text.primary}} disablePadding>
                                    <ListItemButton selected={pathname === "/dashboard/users"} component={Link} to="/dashboard/users">
                                        <ListItemIcon>
                                            <PeopleIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Users" />
                                    </ListItemButton>
                                </ListItem>
                            </List>
                        </Stack>
                    </Box>
                    <Box width={"calc(100vw - 180px)"} sx={{ display: "flex", justifyContent: "center", alignItems: "center"}}>
                        <Outlet />
                    </Box>
                </Box>
            ) : (
                <Box mt={8}>
                    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center"}}>
                        <Outlet />
                    </Box>
                    <Paper sx={{ position: "fixed", left: 0, right: 0, bottom: 0 }} elevation={2}>
                        <BottomNavigation
                            showLabels
                            value={value}
                            onChange={handleValueChange}
                        >
                            <BottomNavigationAction 
                                value={"/dashboard/users"}
                                label="Users"
                                icon={<PeopleIcon />}
                            />
                        </BottomNavigation>
                    </Paper>
                </Box>
            )}
        </>
    )
}

export default DashboardPage