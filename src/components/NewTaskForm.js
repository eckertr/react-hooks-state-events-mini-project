import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
	const [useText, setText] = useState("");
	const [useCategory, setCategory] = useState("Code");

	function handleChangeName(e) {
		setText(e.target.value);
		//console.log(useName);
	}
	function handleChangeCategory(e) {
		setCategory(e.target.value);
		//console.log(useCatagory);
	}
	// function submitTask(e) {
	// 	e.preventDefault();
	// 	const newTask = { text: useName, category: useCatagory };
	// 	//console.log(newTask);
	// 	onTaskFormSubmit(newTask);
	// }
	/////////////////////////////////////////////

	return (
		<form
			className="new-task-form"
			onSubmit={(e) => {
				e.preventDefault();
				onTaskFormSubmit({ text: useText, category: useCategory });
			}}
		>
			<label>
				Details
				<input type="text" name="text" onChange={handleChangeName} />
			</label>
			<label>
				Category
				<select name="category" onChange={handleChangeCategory}>
					{/* render <option> elements for each category here */}
					{categories
						.filter((category) => category !== "All")

						.map((category, index) => (
							<option key={index}>{category}</option>
						))}
				</select>
			</label>
			<input type="submit" value="Add task" />
		</form>
	);
}

export default NewTaskForm;