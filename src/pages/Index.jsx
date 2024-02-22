import { Box, Button, Container, Heading, Text, VStack, Image, Divider, HStack, Icon } from "@chakra-ui/react";
import { FaShieldAlt, FaCut } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.lg" py={10}>
      <VStack spacing={5}>
        <Heading as="h1" size="2xl" textAlign="center">
          Swords & Shields: The 2D Adventure
        </Heading>
        <Text textAlign="center" fontSize="xl">
          Embark on an epic journey in a world of ancient warriors, mythical beasts, and untold treasures.
        </Text>
        <Image src="https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzd29yZCUyMGFuZCUyMHNoaWVsZCUyMGdhbWUlMjBhcnR8ZW58MHx8fHwxNzA4NTk4ODQ3fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Swords and Shields Game Art" borderRadius="md" />
        <Divider my={5} />
        <Heading as="h2" size="lg">
          Features
        </Heading>
        <HStack justify="center" spacing={10}>
          <VStack>
            <Icon as={FaCut} w={10} h={10} color="gray.600" />
            <Text fontWeight="semibold">Master the Blade</Text>
          </VStack>
          <VStack>
            <Icon as={FaShieldAlt} w={10} h={10} color="gray.600" />
            <Text fontWeight="semibold">Defend with Honor</Text>
          </VStack>
        </HStack>
        <Button size="lg" colorScheme="teal" leftIcon={<FaCut />} rightIcon={<FaShieldAlt />}>
          Start Your Adventure
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;
