import { Box, Text, VStack, Link } from "@chakra-ui/react";

function DownloadableFiles() {
  return (
    <Box p="4">
      <VStack spacing={4}>
        <Text fontSize="xl">Downloadable Files Page</Text>
        <Link href="/files/enriched_data_1.csv" download color="teal.500" p="2">
          Download Enriched Data 1
        </Link>
        <Link href="/files/enriched_data_2.csv" download color="teal.500" p="2">
          Download Enriched Data 2
        </Link>
        <Link href="/files/enriched_data_3.csv" download color="teal.500" p="2">
          Download Enriched Data 3
        </Link>
      </VStack>
    </Box>
  );
}

export default DownloadableFiles;
