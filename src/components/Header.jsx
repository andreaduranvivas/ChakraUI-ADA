import { Box, Heading, Button, Center, Flex, useColorModeValue } from '@chakra-ui/react';

const Header = () => {
  const bgColor = useColorModeValue("white", "gray.800");
  const textColor = useColorModeValue("black", "white");

  return (
    <Center h="100vh" w="100vw" bgImage="url('src/assets/bici.jpg')" bgPos="center" bgRepeat="no-repeat" bgSize="cover" filter="brightness(80%)">
      <Box boxShadow="0 4px 8px rgba(0, 0, 0, 0.5)" p={10}>
        <Heading fontSize="3em" color={textColor} textAlign="center" textTransform="uppercase">
          Domina el terreno
        </Heading>
        <Flex flexDirection="row" justifyContent="center" alignItems="center" mt={4}>
          <Button
            borderColor="white"
            borderWidth="2px"
            color="white"
            _hover={{ bg: bgColor, color: textColor }}
            textTransform="uppercase"
            mr={4} // Espacio entre los botones
          >
            VER DETALLES
          </Button>
          <Button
            borderColor="white"
            borderWidth="2px"
            color="white"
            _hover={{ bg: bgColor, color: textColor }}
            textTransform="uppercase"
          >
            VER VIDEO
          </Button>
        </Flex>
      </Box>
    </Center>
  );
};

export default Header;
