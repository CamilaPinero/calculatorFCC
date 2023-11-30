import { useEffect, useState } from "react";
import { Button } from "./Button";

export const Calculator = () => {
	const [display, setDisplay] = useState("");
	const [result, setResult] = useState(0);

	function handleNumberClick(event: any) {
		if (event.target.innerText === "0" && display === "0") {
			return;
		} else if (display == "0") {
			setDisplay(event.target.innerText);
		} else {
			setDisplay(`${display}${event.target.innerText}`);
		}
	}

	function handleOperatorClick(event: any) {
		if (result !== 0) {
			setDisplay(`${result.toString()}${event.target.innerText}`);
		} else if (event.target.innerText === "-" && !display.endsWith("-")) {
			setDisplay(`${display}${event.target.innerText}`);
		} else if (display.match(/[\+?\.?\-?\*?\/]+$/)) {
			setDisplay(
				`${display.replace(
					/[\+?\.?\-?\*?\/]+$/,
					event.target.innerText
				)}`
			);
		} else {
			setDisplay(`${display}${event.target.innerText}`);
		}
	}

	function executeOperation() {
		setResult(eval(display));
		if (result.toString().length > 10) setDisplay("error");
	}

	function handleClearClick() {
		setDisplay(0);
		setResult(0);
	}

	function handleCEClick() {
		setDisplay(display.slice(0, -1));
	}

	function handleDecimalClick(event: any) {
		if (display.endsWith(".")) {
			setDisplay(`${display.slice(0, -1)}${event.target.innerText}`);
		} else if (display.match(/\d+$/) && !display.match(/\d+\.\d$/)) {
			setDisplay(`${display}${event.target.innerText}`);
		} else return;
	}

	useEffect(() => {
		setDisplay(result.toString());
	}, [result]);

	return (
		<>
			<div className="frame">
				<div className="header">
					<h3>Calculator</h3>
					<span className="solarPanel">
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
					</span>
				</div>

				<div className="display">
					<div id="display">{display}</div>
					<div id="result">{result}</div>
				</div>

				<div className="keypad">
					<Button
						handleClick={handleOperatorClick}
						id="on"
						value="ON"
					/>
					<Button
						handleClick={handleOperatorClick}
						id="off"
						value="OFF"
					/>
					<Button
						handleClick={handleClearClick}
						id="clear"
						value="C"
					/>
					<Button handleClick={handleCEClick} id="ce" value="CE" />
					<Button
						handleClick={handleNumberClick}
						id="seven"
						value="7"
					/>
					<Button
						handleClick={handleNumberClick}
						id="eight"
						value="8"
					/>
					<Button
						handleClick={handleNumberClick}
						id="nine"
						value="9"
					/>
					<Button
						handleClick={handleOperatorClick}
						id="divide"
						value="/"
					/>
					<Button
						handleClick={handleNumberClick}
						id="four"
						value="4"
					/>
					<Button
						handleClick={handleNumberClick}
						id="five"
						value="5"
					/>
					<Button
						handleClick={handleNumberClick}
						id="six"
						value="6"
					/>
					<Button
						handleClick={handleOperatorClick}
						id="multiply"
						value="*"
					/>
					<Button
						handleClick={handleNumberClick}
						id="one"
						value="1"
					/>
					<Button
						handleClick={handleNumberClick}
						id="two"
						value="2"
					/>
					<Button
						handleClick={handleNumberClick}
						id="three"
						value="3"
					/>
					<Button
						handleClick={handleOperatorClick}
						id="subtract"
						value="-"
					/>
					<Button
						handleClick={handleDecimalClick}
						id="decimal"
						value="."
					/>
					<Button
						handleClick={handleNumberClick}
						id="zero"
						value="0"
					/>
					<Button
						handleClick={() => executeOperation()}
						id="equals"
						value="="
					/>
					<Button
						handleClick={handleOperatorClick}
						id="add"
						value="+"
					/>
				</div>
			</div>
			<footer>Camila Piñero 2023</footer>
		</>
	);
};
