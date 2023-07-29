import { Stack, Typography } from '@mui/material'

interface MultipleStyleTextProps {
  label: string
  value: string
}

export const MultipleStyleText: React.FC<MultipleStyleTextProps> = ({ label, value }) => (
  <Stack
    direction="row"
    
    alignItems="center"
    marginY={1}
  >
    <Typography fontWeight={600}>{label}: </Typography>
    <Typography>{' '} {value}</Typography>
  </Stack>
)
