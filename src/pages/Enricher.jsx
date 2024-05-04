import { Box, Text, Input, Button, VStack, HStack, Select } from "@chakra-ui/react";
import { useState } from "react";

function Enricher() {
  const [description, setDescription] = useState("");
  const [qualificationCriteria, setQualificationCriteria] = useState(Array(4).fill(""));
  const [disqualificationCriteria, setDisqualificationCriteria] = useState(Array(4).fill(""));
  const [selectedFile, setSelectedFile] = useState("");

  const handleCriteriaChange = (index, value, type, isTextUpdate = true) => {
    if (isTextUpdate) {
      const updateCriteria = type === "qualification" ? [...qualificationCriteria] : [...disqualificationCriteria];
      updateCriteria[index] = value;
      type === "qualification" ? setQualificationCriteria(updateCriteria) : setDisqualificationCriteria(updateCriteria);
    }
  };

  const renderCriteriaFields = (type) => {
    const criteria = type === "qualification" ? qualificationCriteria : disqualificationCriteria;
    return criteria.map((criteria, index) => (
      <HStack key={index} spacing={2}>
        <Input value={criteria} onChange={(e) => handleCriteriaChange(index, e.target.value, type)} placeholder={`${type} criteria ${index + 1}`} />
        <Button colorScheme="green" onClick={() => handleCriteriaChange(index, "High", type, false)}>
          High
        </Button>
        <Button colorScheme="yellow" onClick={() => handleCriteriaChange(index, "Medium", type, false)}>
          Medium
        </Button>
        <Button colorScheme="red" onClick={() => handleCriteriaChange(index, "Low", type, false)}>
          Low
        </Button>
      </HStack>
    ));
  };

  return (
    <Box p="4">
      <VStack spacing={4}>
        <Text fontSize="xl">Enricher Page</Text>
        <Input placeholder="Description of service/product" value={description} onChange={(e) => setDescription(e.target.value)} />
        <Text fontSize="lg">Qualification Criteria</Text>
        {renderCriteriaFields("qualification")}
        <Text fontSize="lg">Disqualification Criteria</Text>
        {renderCriteriaFields("disqualification")}
        <Select placeholder="Select a scraped file" value={selectedFile} onChange={(e) => setSelectedFile(e.target.value)}>
          {}
          <option value="file1">File 1</option>
          <option value="file2">File 2</option>
        </Select>
        <Button colorScheme="blue">Start Enrichment</Button>
      </VStack>
    </Box>
  );
}

export default Enricher;
