import { useState, useRef } from 'react'
import {
  Avatar,
  AvatarBadge,
  Badge,
  Button,
  Heading,
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
  VStack,
} from '@chakra-ui/react'

function Profile() {
  const [userProfile, setUserProfile] = useState(null)

  const { isOpen, onOpen, onClose } = useDisclosure()
  const profileImage = useRef(null)

  const openChooseImage = () => {
    profileImage.current.click()
  }

  const changeProfileImage = event => {
    const ALLOWED_TYPES = ['image/png', 'image/jpeg', 'image/jpg']
    const selected = event.target.files[0]

    if (selected && ALLOWED_TYPES.includes(selected.type)) {
      let reader = new FileReader()
      reader.onloadend = () => setUserProfile(reader.result)
      return reader.readAsDataURL(selected)
    }

    onOpen()
  }

  return (
    <VStack spacing={3} py={5} borderBottomWidth={1} borderColor="brand.light">
      <Avatar
        size="2xl"
        name="HSIEH CHIA-EN"
        cursor="pointer"
        onClick={openChooseImage}
        src={userProfile ? userProfile : '/img/ian.jpg'}
      >
      </Avatar>
      <VStack spacing={1}>
        <Heading as="h3" fontSize="xl" color="brand.dark">
          HSIEH CHIA-EN
        </Heading>
        <Text color="brand.gray" fontSize="sm">
          Student of CGU
        </Text>
      </VStack>
    </VStack>
  )
}

export default Profile
