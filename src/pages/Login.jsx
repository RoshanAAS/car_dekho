

import {
  useDisclosure,
  Button,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Image,
  Modal,
  ModalFooter,
  Text,
  Heading,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { LoginForm } from "../components/LoginForm";
import AutoPlay from "../components/Carousel";
function Login() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      {/* <Button colorScheme="black" variant="link" >
        Profile
      </Button> */}

        <Button
              variant={'solid'}
            //   colorScheme={'#e6543b'}
              size={'sm'}
              mr={4}
              onClick={onOpen}
               style={{backgroundColor:"#e6543b",color:"white"}}>
                Login
            </Button>

      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent style={{ width: "400px" }}>
          <AutoPlay/>

          <ModalCloseButton />
          <ModalBody>
            <Heading style={{ margin: "25px 0px 20px 0px" }} size="md">
              Login
            </Heading>
            <LoginForm onclose={onClose}/>
          </ModalBody>

          <ModalFooter>
            <Text fontSize="md">
              Not registered yet?
              <Link onClick={onClose} style={{ color:"#e6543b" }} to="/signup">
                Create an Account
              </Link>
            </Text>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
export default Login;