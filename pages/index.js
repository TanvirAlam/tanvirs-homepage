import { Container, Box, Heading } from '@chakra-ui/react'

const Page = () => {
  return (
    <Container>
      <Box borderRadius="lg" bg="gray" p={3} mb={6} align="center">
        Olla&apos;s, Como sava, bian tu, lorem ipsum Tanvir Alam
      </Box>
      
      <Box display={{md: 'flex'}}>
        <Box flexGrow={1}>
          <Heading as="h2" varient="page-title">
            Tanvir Alam
          </Heading>
          <p>Lorem Ipsum</p>  
        </Box>
      </Box>
    </Container>
  )
}

export default Page