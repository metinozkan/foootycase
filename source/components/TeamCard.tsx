import { Grid, Image, Title } from "@mantine/core";
import React from "react";

const TeamCard = () => {
  return (
    <Grid
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: 12,
      }}
    >
      <Image width={80} height={80} src="https://picsum.photos/200/300" />
      <Title order={2}>Beşiktaş</Title>
    </Grid>
  );
};

export default TeamCard;
