import {
  Button,
  FormControl,
  FormHelperText,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import { useSession, signIn, signOut } from "next-auth/react";
import React, { useState } from "react";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

/**
 * Login Modal Component
 * @param {boolean} isOpen - is modal open
 * @param {function} onClose - close modal
 * @returns {JSX.Element} - LoginModal
 */
const LoginModal: React.FC<LoginModalProps> = ({
  isOpen,
  onClose,
}): JSX.Element => {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();

  const handleLogin = () => {
    console.log("Login");
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Login</ModalHeader>
        <ModalHeader>
          <Text fontSize={"18px"}>
            Welcome to our awesome product! Please log in below
          </Text>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form onSubmit={(e) => e.preventDefault()}>
            <FormControl>
              <Input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                name="email"
                placeholder="Email"
                defaultValue={email}
              />
              <FormHelperText>Enter your email address</FormHelperText>
            </FormControl>
            <FormControl mt={4}>
              <Input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                name="password"
                placeholder="Password"
                defaultValue={password}
              />
              <FormHelperText>Enter your password</FormHelperText>
            </FormControl>
            <Button
              onClick={() => signIn()}
              mt={6}
              mb={6}
              variant="primary"
              type="submit"
            >
              Submit
            </Button>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
export default LoginModal;
