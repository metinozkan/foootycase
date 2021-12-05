import { Center, Grid, SimpleGrid, Title } from "@mantine/core";
import type { NextPage } from "next";
import TeamCard from "../source/components/TeamCard";

const Home: NextPage = () => {
  const tempArr = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];
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
      <Grid
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          padding: 8,
          marginTop: 8,
        }}
      >
        <Title order={1}>Takımlar</Title>
        <Grid>
          {tempArr.map((item) => {
            return <TeamCard />;
          })}
        </Grid>
      </Grid>
      <Grid
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          padding: 8,
          marginTop: 8,
        }}
      >
        <Title order={1}>Futbolcular</Title>

        <SimpleGrid></SimpleGrid>
      </Grid>
    </Center>
  );
};

export default Home;
