import type { OptionsObject, SnackbarMessage } from "notistack";

import { enqueueSnackbar } from "notistack";

import { AiFillCheckCircle } from "react-icons/ai";
import { RiErrorWarningFill } from "react-icons/ri";
import theme from "./theme";

const ERROR_OPTION: OptionsObject<"default"> & { icon: JSX.Element } = {
  variant: "default",
  autoHideDuration: 2000,
  icon: <AiFillCheckCircle size={18} color={theme.palette.error.main} />,
};

const SUCCESS_OPTION: OptionsObject<"default"> & { icon: JSX.Element } = {
  variant: "default",
  autoHideDuration: 2000,
  icon: (
    <RiErrorWarningFill
      name="toast-success"
      size={18}
      color={theme.palette.success.main}
    />
  ),
};

export function toastSuccess(
  message: SnackbarMessage,
  opt?: OptionsObject<"default">
) {
  if (typeof window === "undefined") return;
  enqueueSnackbar(message, { ...SUCCESS_OPTION, ...opt });
}

export function toastError(
  message: SnackbarMessage,
  opt?: OptionsObject<"default">
) {
  if (typeof window === "undefined") return;
  enqueueSnackbar(message, { ...ERROR_OPTION, ...opt });
}
