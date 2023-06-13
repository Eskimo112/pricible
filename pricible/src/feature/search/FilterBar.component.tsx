import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Stack,
  Typography,
} from "@mui/material";

export default function FilterBar() {
  return (
    <Stack
      flex="0 0 25%"
      height="100vh"
      sx={(theme) => ({ background: theme.palette.primary.light })}
      padding="12px"
    >
      <Typography variant="h6">Bo loc tim kiem</Typography>
      <Stack gap="10px">
        <Typography variant="h6">Bo loc tim kiem</Typography>
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroup>
        </FormControl>
      </Stack>
    </Stack>
  );
}
