import React from "react";

export default function PopUp ({ imageUrl }) {
return (
	<div className="image-popup">
		<img src={imageUrl} alt="Popup" />
	</div>
);
};


