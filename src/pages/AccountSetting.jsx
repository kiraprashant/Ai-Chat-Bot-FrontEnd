import React from "react";
import { Box, Typography } from "@mui/material";

import AccountSection from "../cmp/AccountSection";
import AccountRow from "../cmp/AccountRow";
import AccountButton from "../cmp/AccountButton";

const AccountSetting = () => {

    const ChangePassword = () =>{
      console.log("Change PAssword")
    }

    const ChangeEmail = () =>{
        console.log("Change Email")
    }

    const Logout = () =>{
        console.log("Logout")
    }

    const DeleteAccount = () =>{
        console.log("Delete Account")
    }
  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "#050412",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography
        sx={{
          p: 2,
          pl: 4,
          color: "#fff",
          borderBottom: "1px solid #1e1e1e",
        }}
        variant="h5"
      >
        Account Setting
      </Typography>

      <Box
        sx={{
          flex: 1,
          overflowY: "auto",
          p: 4,
        }}
      >

        {/* LOGIN AND PASSWORD */}
        <AccountSection
          title="LOGIN AND PASSWORD"
          description="Manage your local node credentials and authentication keys."
        >
          <AccountRow
            title="Password"
            description="Last changed Password 3 months ago"
            action={
              <AccountButton ClickEvent = {()=> ChangePassword()}>
                Change Password
              </AccountButton>
            }
            isLast
          />
        </AccountSection>


        {/* EMAIL */}
        <AccountSection
          title="EMAIL ADDRESS"
          description=""
        >
          <AccountRow
            title="Email"
            description="Lordprashant@gmail.com"
            action={
                <AccountButton ClickEvent = {()=> ChangeEmail()}>
                Change Email
              </AccountButton>
            }
            isLast
          />
        </AccountSection>


        {/* DANGER ZONE */}
        <AccountSection
          title="DANGER ZONE"
          description="Irreversible and destructive account action"
          danger
        >
          <AccountRow
            title="Sign Out"
            description="End the session local node"
            action={
                <AccountButton ClickEvent = {()=> Logout()}>
                Log Out
              </AccountButton>
            }
          />

          <AccountRow
            title="Delete Account"
            description="This will permanently delete the account"
            action={
                <AccountButton danger ClickEvent = {()=> DeleteAccount()}>
                Delete Account
              </AccountButton>
            }
            danger
            isLast
          />
        </AccountSection>

      </Box>
    </Box>
  );
};

export default AccountSetting;