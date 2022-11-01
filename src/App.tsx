import React, { useRef, useState } from "react";
import AppHeader from "./components/AppHeader";
import BmiControls from "./components/BmiControls";
import BmiResult from "./components/BmiResult";

import {
	setupIonicReact,
	IonApp,
	IonContent,
	IonItem,
	IonLabel,
	IonInput,
	IonGrid,
	IonAlert,
} from "@ionic/react";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

setupIonicReact();

const App: React.FC = () => {
	const [calculatedBMI, setCalculatedBMI] = useState<number>();
	const [error, setError] = useState<string>();

	const heightInputRef = useRef<HTMLIonInputElement>(null);
	const weightInputRef = useRef<HTMLIonInputElement>(null);

	const calculateBMI = () => {
		const entered_weight = weightInputRef.current!.value;
		const entered_height = heightInputRef.current!.value;

		if (!entered_height || !entered_weight || +entered_height <= 0 || +entered_weight <= 0) {
			setError("Please enter a valid non negative number");
			return;
		}

		const bmi = +entered_weight / (+entered_height * +entered_height);
		setCalculatedBMI(bmi);
	};
	const resetInputs = () => {
		weightInputRef.current!.value = "";
		heightInputRef.current!.value = "";
		setCalculatedBMI(undefined);
	};

	// const clearError = () => {
	// 	setError("");
	// };

	return (
		<React.Fragment>
			<IonAlert
				isOpen={!!error}
				message={error}
				buttons={[
					{
						text: "Okay",
						handler: setError,
					},
				]}
			/>
			<IonApp>
				<AppHeader />
				<IonContent className="ion-padding">
					<IonItem>
						<IonLabel position="floating">Your Height</IonLabel>
						<IonInput type="number" ref={heightInputRef}></IonInput>
					</IonItem>

					<IonItem>
						<IonLabel position="floating">Your Weight</IonLabel>
						<IonInput type="number" ref={weightInputRef}></IonInput>
					</IonItem>

					<IonGrid className="ion-text-center ion-margin">
						<BmiControls onCalculate={calculateBMI} onReset={resetInputs} />
						{calculatedBMI && <BmiResult result={calculatedBMI} />}
					</IonGrid>
				</IonContent>
			</IonApp>
		</React.Fragment>
	);
};

export default App;
