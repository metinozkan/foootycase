import { Center, Grid, SimpleGrid, Title } from "@mantine/core";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <Center
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        padding: 8,
      }}
    >
      <Grid>
        <Title order={1}>Takımlar</Title>
        <SimpleGrid></SimpleGrid>
      </Grid>
      <Grid>
        <Title order={1}>Futbolcular</Title>

        <SimpleGrid></SimpleGrid>
      </Grid>
    </Center>
  );
};

export default Home;
