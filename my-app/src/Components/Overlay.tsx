import { makeStyles, Theme } from "@material-ui/core"
import React, { FC } from "react"

const useStyles = makeStyles<Theme, any>((theme) => ({
	overlay: {
		display: "flex",
		top: 0,
		position: "absolute",
		width: window.innerWidth,
		height: window.innerHeight,
	},
	button: {
		width: window.innerWidth / 2,
		height: window.innerHeight,
		backgroundColor: "Transparent",
		border: "none",
		outline: "none",
	},
}));

export type OverlayProps = {
	onProgressChange: Function
}

const Overlay: FC<OverlayProps> = ({ onProgressChange }
) => {
	const classes = useStyles({})
	return (
		<div className={classes.overlay}>
			<div
				onClick={() => onProgressChange(false)}
				className={classes.button}
			/>
			<div
				onClick={() => onProgressChange(true)}
				className={classes.button}
			/>
		</div>
	)
}

export default Overlay