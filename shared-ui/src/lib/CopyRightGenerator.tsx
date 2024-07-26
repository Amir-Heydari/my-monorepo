import { Typography } from "@mui/material";
import Link from '@mui/material/Link';

function CopyRightGenerator(props: any) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href={props.link}>
                {props.text}
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export default CopyRightGenerator;