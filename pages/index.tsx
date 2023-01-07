import { useState } from "react";
import {
	Box,
	Button,
	Card,
	CardBody,
	CardHeader,
	FormControl,
	FormErrorMessage,
	FormHelperText,
	FormLabel,
	Grid,
	Heading,
	IconButton,
	Input,
  InputGroup,
  InputRightAddon,
} from "@chakra-ui/react";
import { removeSpaces } from "../helpers/removeSpaces";
import { CopyIcon } from "@chakra-ui/icons";

type InputStringValue = { target: { value: string } };

export default function Index() {
	const [input, setInput] = useState("");
	const [result, setResult] = useState("");

	const handleInputChange = (e: InputStringValue) => setInput(e.target.value);
	const handleSubmit = () => setResult(removeSpaces(input));

	// const isError = input === "";

	return (
		<Grid marginInline="auto" p={6} maxWidth="2xl" rounded={6} placeItems="center" minHeight="100vh">
			<Card>
				<CardHeader>
        <Heading mb={6} size='lg'>Type the text or number to remove spaces from (i.e. phone number, bill, IBAN)</Heading>
				</CardHeader>

				<CardBody>
					<FormControl
						// isInvalid={isError}
						isRequired
					>
						<Input mb={6} placeholder="Your text with spaces" value={input} onChange={handleInputChange} />
            <InputGroup>
              <Input mb={6} placeholder="Your text without spaces" value={result} readOnly userSelect="text" />
              <InputRightAddon>
                <IconButton
                  // colorScheme='blue'
                  aria-label='Copy text without spaces'
                  icon={<CopyIcon />}
                  />
              </InputRightAddon>
            </InputGroup>
            

						{/* {!isError ? (
            <FormHelperText>Enter the email you'd like to receive the newsletter on.</FormHelperText>
          ) : (
            <FormErrorMessage>Email is required.</FormErrorMessage>
          )} */}
					</FormControl>
					<Button onClick={handleSubmit}>Remove spaces!</Button>
				</CardBody>
			</Card>
		</Grid>
	);
}


