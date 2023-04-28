import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
} from "@chakra-ui/react";

interface CustomAlertProps {
  alertType: "info" | "warning" | "success" | "error" | "loading" | undefined;
  alertTitle?: string;
  alertMessage: string;
}

export const CustomAlert = ({
  alertType,
  alertTitle,
  alertMessage,
}: CustomAlertProps) => {
  return (
    <Alert status={alertType}>
      <AlertIcon />
      <AlertTitle>{alertTitle}</AlertTitle>
      <AlertDescription>{alertMessage}</AlertDescription>
    </Alert>
  );
};
