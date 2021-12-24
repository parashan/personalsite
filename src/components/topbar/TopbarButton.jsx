import { Button, Box} from "@mui/material";
const TopButton = (props) =>{
    const {text, ...myProps} = props;
    return (
        <Box mr={2} >
            <Button
                {...myProps}
            >
                {text}
            </Button>
        </Box>
    );
}
export default TopButton;