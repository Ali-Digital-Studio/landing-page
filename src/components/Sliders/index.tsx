import { Box } from "@chakra-ui/react";

interface SlidersProps {
  src: string;
  alt: string;
}

const Sliders: React.FC<SlidersProps> = ({ src, alt }) => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="120px"
      height="120px"
      overflow="hidden"
      margin="0 auto"
      boxShadow="sm"
    >
      <img
        src={src}
        alt={alt}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
        }}
      />
    </Box>
  );
};

export default Sliders;