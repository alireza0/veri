import {
  Box,
  Stack,
  useColorModeValue,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Radio,
  RadioGroup,
  Heading,
} from '@chakra-ui/react';
import React, { useContext } from 'react';
import { VeriContext } from '../../../contexts/veri';

export interface EventDetailFormProps {
  title?: string;
}
export const EventDetailForm: React.FC<EventDetailFormProps> = ({ title }) => {
  const value = useContext(VeriContext);
  const BoxBg = useColorModeValue('white', 'gray.700');
  return (
    <Box rounded={'lg'} bg={BoxBg} boxShadow={'lg'} p={8}>
      <Heading fontSize={'xl'} mb={4}>
        {title}
      </Heading>
      <Stack spacing={4}>
        <FormControl
          isRequired
          isInvalid={
            value.formik.touched.eventName && !!value.formik.errors.eventName
          }
        >
          <FormLabel>Event Name</FormLabel>
          <Input
            type="text"
            name="eventName"
            value={value.formik.values.eventName}
            onChange={value.formik.handleChange}
            onBlur={value.formik.handleBlur}
          />
          <FormErrorMessage>{value.formik.errors.eventName}</FormErrorMessage>
        </FormControl>
        <FormControl
          isRequired
          isInvalid={
            value.formik.touched.organizer && !!value.formik.errors.organizer
          }
        >
          <FormLabel>Organizer</FormLabel>
          <Input
            type="text"
            name="organizer"
            value={value.formik.values.organizer}
            onChange={value.formik.handleChange}
            onBlur={value.formik.handleBlur}
          />
          <FormErrorMessage>{value.formik.errors.organizer}</FormErrorMessage>
        </FormControl>
        <FormControl
          isRequired
          isInvalid={
            value.formik.touched.organizerEmail &&
            !!value.formik.errors.organizerEmail
          }
        >
          <FormLabel>Organizer Email</FormLabel>
          <Input
            type="organizerEmail"
            name="organizerEmail"
            value={value.formik.values.organizerEmail}
            onChange={value.formik.handleChange}
            onBlur={value.formik.handleBlur}
          />
          <FormErrorMessage>
            {value.formik.errors.organizerEmail}
          </FormErrorMessage>
        </FormControl>
        <FormControl>
          <FormLabel>Event Duration</FormLabel>
          <RadioGroup name="eventDuration">
            <Stack>
              <Radio value="Single" onChange={value.formik.handleChange}>
                Single Day
              </Radio>
              <Radio value="multiday" onChange={value.formik.handleChange}>
                Multi Days
              </Radio>
            </Stack>
          </RadioGroup>
          <FormErrorMessage>
            {value.formik.errors.eventDuration}
          </FormErrorMessage>
        </FormControl>
        {value.formik.values.eventDuration === 'multiday' && (
          <Heading>Hello</Heading>
        )}
      </Stack>
    </Box>
  );
};