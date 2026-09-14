import {HeartCrack} from "lucide-react";

const defaultMessages: Record<string, string> = {
  // 4xx Client Errors
  "400": "The request could not be processed.",
  "401": "Authentication is required to access this resource.",
  "402": "Payment is required to access this resource.",
  "403": "You do not have permission to access this resource.",
  "404": "The requested page could not be found.",
  "405": "This request method is not allowed.",
  "406": "The requested resource cannot be provided in the requested format.",
  "408": "The request timed out. Please try again.",
  "409": "The request could not be completed because of a conflict.",
  "410": "The requested resource is no longer available.",
  "411": "The request is missing required information.",
  "412": "The request could not be completed because a required condition was not met.",
  "413": "The request is too large to be processed.",
  "414": "The requested URL is too long.",
  "415": "The requested data format is not supported.",
  "416": "The requested range could not be satisfied.",
  "422": "The request contains invalid or unprocessable data.",
  "423": "The requested resource is currently locked.",
  "424": "The request could not be completed because a related request failed.",
  "429": "Too many requests. Please try again later.",

  // 5xx Server Errors
  "500": "An unexpected server error occurred.",
  "501": "The requested functionality is not supported by the server.",
  "502": "The server received an invalid response from an upstream service.",
  "503": "The service is temporarily unavailable. Please try again later.",
  "504": "The server timed out while waiting for an upstream service.",
  "505": "The HTTP version used in the request is not supported.",
  "506": "The server encountered a configuration error.",
  "507": "The server does not have enough storage to complete the request.",
  "508": "The server encountered an infinite loop while processing the request.",
  "510": "The server requires additional extensions to fulfill the request.",
  "511": "Network authentication is required to access this resource.",
};

type ErrorProps = {
  success: boolean;
  status: string | number;
  message?: string;
}

export default async function ErrorPage({
  searchParams
}: { searchParams: Promise<ErrorProps> }) {

  const { status: inputStatus, message: inputMessage } = await searchParams;

  const status = inputStatus ?? "500";
  const message =
    inputMessage ?? defaultMessages[status] ?? "An unexpected error occurred.";

  return (
    <div className="flex flex-row h-screen items-center justify-center gap-8 p-10">
      <div className="flex flex-col h-screen items-center justify-center">
        <h1 className="text-8xl font-bold tabular-nums">{status}</h1>
        <p className="mt-4 text-justify text-lg text-muted-foreground max-w-50">
          <span className="font-semibold">Sorry, something went wrong:</span> <q>{message}</q>
        </p>
      </div>
      <HeartCrack className="w-50 h-50"/>
    </div>
  )
}