import { useState } from 'react'
import { Heading, Text, VStack, Center , useToast } from "native-base";

import { api } from '../services/api'

import { Button } from "../components/Button";
import { Header } from '../components/Header'
import { Input } from "../components/Input";

import Logo from '../assets/logo.svg'

export function New(){
  const [title, setTitle] = useState('')
  const [isLoading , setIsLoading] = useState(false)
  const toast = useToast();

  async function handlePoolCreate(){
    if(!title.trim()){
      return  toast.show({
        title: 'Informe um nome para o seu Bolão!',
        placement: 'top',
        bgColor: 'red.500'
      });
    }
    try{
      setIsLoading(true);

      await api.post('/pools', {title: title})

      toast.show({
        title: 'Bolão criado com sucesso!',
        placement: 'top',
        bgColor: 'green.500'
      });

      setTitle('')
    }catch(error){
      console.log(error)

      toast.show({
        title: 'Não foi possivel criar o Bolão!',
        placement: 'top',
        bgColor: 'red.500'
      });
    }finally{
      setIsLoading(false);
    }

  }


  return (
    <VStack flex={1} bgColor="gray.900">
      <Header title="Criar Novo Bolão"/>
      <VStack p={3}>
        <Center flex={1} mt={6} >
        <Logo />
        </Center>
        <Heading fontFamily='heading' color='white' fontSize='xl' my={8} textAlign='center'>
        Crie seu próprio bolão da copa e compartilhe entre amigos!
        </Heading>
        
        <Input
          mb={2}
          placeholder="Qual nome do seu bolão?"
          onChangeText={setTitle}
          value={title}
        />

        <Button 
          title="CRIAR MEU BOLÃO"
          onPress={handlePoolCreate}
          isLoading={isLoading}
        />

        <Text color='gray.200' fontSize='sm' textAlign='center' px={10} mt={4}>
        Após criar seu bolão, você receberá um código único que poderá usar para convidar outras pessoas.
        </Text>



      </VStack>
    </VStack>
  )
}