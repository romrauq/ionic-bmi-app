import React from "react";
import { IonHeader, IonToolbar, IonTitle } from "@ionic/react";

const AppHeader: React.FC = () => {
	return (
		<div>
			<IonHeader>
				<IonToolbar color="primary">
					<IonTitle> BMI Calculator </IonTitle>
				</IonToolbar>
			</IonHeader>
		</div>
	);
};

export default AppHeader;
