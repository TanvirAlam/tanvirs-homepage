## Project setup:

Source: <https://www.youtube.com/watch?v=bSMZgXzC9AA&t=88s>

- `npm init -y`
- `npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion next react react-dom`
- `npm i -D eslint eslint-config-next prettier`
- `Package.json => script changed`
- `touch eslintrc.json configeration added`
- `touch prettier.config.js`
- `touch .prettierignore`
- `touch .gitignore`
- `touch next.config.js`
- `mkdir pages, components, components/layouts`
- `touch pages/index.js`
- `npm run dev :: <http://localhost:3000>`


- Create `components/layouts/Main.js` 
  ```
    import Head from 'next/head'
    import {Box, Container } from '@chakra-ui/react'

    const Main = ({ children, router }) => {
        return (
            <Box as="main" pb={8}>
                <Head>
                    <meta name="viewport" content="width=device-width" />
                    <title>Tanvir's Website</title>
                </Head>
                
                <Container maxW="container.md" pt={14}>
                    {children}
                </Container>
            </Box>
        )
    }

    export default Main
    ```

- Create `pages/_app.js` 
    ```
    import { ChakraProvider } from '@chakra-ui/react'
    import Layout from '../components/layouts/main'

    const Website = ({ Component, pageProps, router }) => {
        return (
            <ChakraProvider>
                <Layout {...pageProps} key={router.route}>
                    <Component {...pageProps} key={router.route} />
                </Layout>
            </ChakraProvider>
        )
    }

    export default Website
    ```