import { Box, Flex, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

function Navbar() {
  return (
    <Flex as="nav" bg="gray.800" color="white" padding="4" justifyContent="space-between">
      <Link as={RouterLink} to="/" p="2">Maps Scraper</Link>
      <Link as={RouterLink} to="/vacancy-scraper" p="2">Vacancy Scraper</Link>
      <Link as={RouterLink} to="/enricher" p="2">Enricher</Link>
      <Link as={RouterLink} to="/downloads" p="2">Downloadable Files</Link>
    </Flex>
  );
}

export default Navbar;