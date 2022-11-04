import { Heading, Text, VStack } from "native-base";

import { Button } from "../components/Button";
import { Header } from '../components/Header'
import { Input } from "../components/Input";

import Logo from '../assets/logo.svg'
export function New(){
  return (
    <VStack flex={1} bgColor="gray.900">
      <Header title="Criar Novo Bolão"/>
      <VStack>
        <Logo/>
        <Heading fontFamily='heading' color='white' fontSize='xl' my={8} textAlign='center'>
        Crie seu próprio bolão da copa e compartilhe entre amigos!
        </Heading>
        
        <Input
          mb={2}
          placeholder="Qual nome do seu bolão?"
        />

        <Button
          title="CRIAR MEU BOLÃO"
        />

        <Text color='gray.200' fontSize='sm' textAlign='center' px={10} mt={4}>
        Após criar seu bolão, você receberá um  {'\n'} código único que poderá usar para convidar{'\n'} outras pessoas.
        </Text>



      </VStack>
    </VStack>
  )
}