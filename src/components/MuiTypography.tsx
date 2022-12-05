import { Typography } from "@mui/material";

const MuiTypography = () => {
  return (
    <div>
      <Typography variant="h1">h1 Heading</Typography>
      <Typography variant="h2">h2 Heading</Typography>
      <Typography variant="h3">h3 Heading</Typography>
      <Typography variant="h4" component="h1" gutterBottom>
        {/* Now h4 will work as h1 with margin bottom */}
        h4 Heading
      </Typography>
      <Typography variant="h5">h5 Heading</Typography>
      <Typography variant="h6">h6 Heading</Typography>

      <Typography variant="subtitle1">Subtitle 1</Typography>
      <Typography variant="subtitle2">Subtitle 2</Typography>

      <Typography variant="body1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
        perferendis quam temporibus debitis culpa voluptate provident non earum
        odio voluptates quaerat quod, nobis voluptatibus impedit assumenda enim,
        dicta dolore adipisci!
      </Typography>
      <Typography variant="body2">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi suscipit
        sed totam nesciunt. Eius amet velit omnis! Eum, similique reprehenderit,
        iste magnam porro quasi cumque ratione ipsam mollitia necessitatibus
        officiis?
      </Typography>
    </div>
  );
};

export default MuiTypography;
