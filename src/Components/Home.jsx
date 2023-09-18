import { Button, Stack, Typography } from "@mui/material"

const Home = () => {
  return (
    <div>
      <Stack spacing={2} direction='row'>
        <Button variant="contained" color="primary" size="small">button</Button>
        <Button variant="contained" color="secondary">button</Button>
        <Button variant="contained" color="error">button</Button>
        <Button variant="contained" color="warning">button</Button>
        <Button variant="contained" color="info">button</Button>
        <Button variant="contained" color="success">button</Button>
      </Stack>
        <Typography variant="h1">Heading 1</Typography>
        <Typography variant="h2">Heading 2</Typography>
        <Typography variant="h3">Heading 3</Typography>
        <Typography variant="h4">Heading 4</Typography>
        <Typography variant="h5">Heading 5</Typography>
        <Typography variant="h6">Heading 6</Typography>
        <Typography variant="subtitle1">Sub Title 1</Typography>
        <Typography variant="subtitle2">Sub Title 2</Typography>
        {/* body1 is default */}
        <Typography variant="body1">Lorem ipsum dolor sit amet.</Typography>
        <Typography variant="body2">Lorem ipsum dolor sit amet.</Typography>
    </div>
  )
}

export default Home