import { Box, Flex, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

function Navbar() {
  return (
    <Flex as="nav" bg="brand.800" color="white" padding="4" justifyContent="space-between" alignItems="center" boxShadow="md">
      <Link as={RouterLink} to="/" p="2" _hover={{ bg: "brand.700", textDecoration: "none" }}>
        Maps Scraper
      </Link>
      <Link as={RouterLink} to="/vacancy-scraper" p="2" _hover={{ bg: "brand.700", textDecoration: "none" }}>
        Vacancy Scraper
      </Link>
      <Link as={RouterLink} to="/enricher" p="2" _hover={{ bg: "brand.700", textDecoration: "none" }}>
        Enricher
      </Link>
      <Link as={RouterLink} to="/downloads" p="2" _hover={{ bg: "brand.700", textDecoration: "none" }}>
        Downloadable Files
      </Link>
      <Link as={RouterLink} to="/" p="2">
        Maps Scraper
      </Link>
      <Link as={RouterLink} to="/vacancy-scraper" p="2">
        Vacancy Scraper
      </Link>
      <Link as={RouterLink} to="/enricher" p="2">
        Enricher
      </Link>
      <Link as={RouterLink} to="/downloads" p="2">
        Downloadable Files
      </Link>
    </Flex>
  );
}

export default Navbar;
