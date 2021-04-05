import { Button, makeStyles, Theme } from "@material-ui/core"
import React, { FC } from "react"

const useStyles = makeStyles<Theme, any>((theme) => ({
  buttonBold: {
	width: "100%",
	height: 50,
    borderRadius: 40,
    textTransform: "unset",
	fontWeight: "bold",
	marginBottom: 15
  },
  button: {
	width: "100%",
	maxWidth: 750,
	height: 50,
    borderRadius: 40,
    textTransform: "unset",
	marginBottom: 15
  },
}));

export type MainButtonProps = {
	color: "primary" | "secondary",
	text: string,
	bold: boolean,
	onClick: () => void;
}

const MainButton: FC<MainButtonProps> = (props
) => {
	const classes = useStyles({})
	return (
		<Button
			className={props.bold ? classes.buttonBold : classes.button}
			variant="contained"
			color={props.color}
			size="large"
			onClick={props.onClick}
		>
			{props.text}
		</Button>
	)
}

export default MainButton