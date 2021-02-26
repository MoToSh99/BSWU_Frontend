import { Button, makeStyles, Theme } from "@material-ui/core"
import React, { FC } from "react"

const useStyles = makeStyles<Theme, any>((theme) => ({
  button: {
      width: "100%",
			height: 50,
      borderRadius: 40,
      textTransform: "unset",
  },
}));

export type MainButtonProps = {
	color: "primary" | "secondary",
	text: string,
	onClick: () => void;
}

const MainButton: FC<MainButtonProps> = (props
) => {
	const classes = useStyles({})
	return (
		<Button
			className={classes.button}
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