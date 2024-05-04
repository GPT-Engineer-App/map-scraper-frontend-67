import { Box, Text, Input, Button, Select, VStack, HStack } from "@chakra-ui/react";
import { useState } from "react";
import { FaPlay, FaStop } from "react-icons/fa";

function VacancyScraper() {
  const [jobTitle, setJobTitle] = useState("");
  const [location, setLocation] = useState("");
  const [timePeriod, setTimePeriod] = useState("");
  const [linkedinUsername, setLinkedinUsername] = useState("");
  const [linkedinPassword, setLinkedinPassword] = useState("");
  const [isScraping, setIsScraping] = useState(false);
  const [count, setCount] = useState(0);
  const [missingFields, setMissingFields] = useState("");

  const handleStart = () => {
    if (!jobTitle || !location || !timePeriod || !linkedinUsername || !linkedinPassword) {
      setMissingFields("Please fill all fields before starting.");
      return;
    }
    setMissingFields("");
    setIsScraping(true);
    setCount(0);
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);
    window.scrapeInterval = interval;
  };

  const handleStop = () => {
    setIsScraping(false);
    clearInterval(window.scrapeInterval);
  };

  return (
    <Box p="4">
      <VStack spacing={4}>
        <Text fontSize="xl">Vacancy Scraper</Text>
        <Input placeholder="Job Title" value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} />
        <Input placeholder="Location" value={location} onChange={(e) => setLocation(e.target.value)} />
        <Select placeholder="Select period" value={timePeriod} onChange={(e) => setTimePeriod(e.target.value)}>
          <option value="week">Week</option>
          <option value="month">Month</option>
          <option value="year">Year</option>
        </Select>
        <Input placeholder="LinkedIn Username" value={linkedinUsername} onChange={(e) => setLinkedinUsername(e.target.value)} />
        <Input placeholder="LinkedIn Password" type="password" value={linkedinPassword} onChange={(e) => setLinkedinPassword(e.target.value)} />
        <HStack spacing={4}>
          <Button leftIcon={<FaPlay />} colorScheme="green" onClick={handleStart} isDisabled={isScraping}>
            Start
          </Button>
          <Button leftIcon={<FaStop />} colorScheme="red" onClick={handleStop} isDisabled={!isScraping}>
            Stop
          </Button>
        </HStack>
        <Text>{missingFields || `Scraped Jobs: ${count}`}</Text>
      </VStack>
    </Box>
  );
}

export default VacancyScraper;
