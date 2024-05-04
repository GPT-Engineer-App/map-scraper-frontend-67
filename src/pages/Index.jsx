import { Container, VStack, Input, Button, Text, HStack } from "@chakra-ui/react";
import { useState } from "react";
import { FaPlay, FaStop } from "react-icons/fa";

const Index = () => {
  const [location, setLocation] = useState("");
  const [profession, setProfession] = useState("");
  const [isScraping, setIsScraping] = useState(false);
  const [count, setCount] = useState(0);

  const handleStart = () => {
    setIsScraping(true);
    // Simulate scraping process
    setCount(0); // Reset count on start
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1); // Increment count to simulate scraping
    }, 1000); // Simulate adding new data every second

    // Store interval ID for stopping later
    window.scrapeInterval = interval;
  };

  const handleStop = () => {
    setIsScraping(false);
    clearInterval(window.scrapeInterval);
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl" mb={4}>
          Google Maps Scraper
        </Text>
        <Input placeholder="Location" value={location} onChange={(e) => setLocation(e.target.value)} />
        <Input placeholder="Profession" value={profession} onChange={(e) => setProfession(e.target.value)} />
        <HStack spacing={4}>
          <Button leftIcon={<FaPlay />} colorScheme="green" onClick={handleStart} isDisabled={isScraping}>
            Start
          </Button>
          <Button leftIcon={<FaStop />} colorScheme="red" onClick={handleStop} isDisabled={!isScraping}>
            Stop
          </Button>
        </HStack>
        <Text>Scraped Businesses: {count}</Text>
      </VStack>
    </Container>
  );
};

export default Index;
