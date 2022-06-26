import "./TestComponent.css";
// import react from "React";

interface ContainerProps {}

const TestComponent: React.FC<ContainerProps> = () => {
	return (
		<div className="container">
			<h1>Test Component Here</h1>
		</div>
	);
};

export default TestComponent;
