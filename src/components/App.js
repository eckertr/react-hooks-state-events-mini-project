import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
	const [useSelected, setSelected] = useState("All");
	const [useTasks, setTasks] = useState([...TASKS]);

	function handleFilter(e) {
		setSelected(e);
	}

	function onTaskFormSubmit(e) {
		setTasks([...useTasks, e]);
	}

	function handleDelete(element) {
		const updatedTasks = useTasks.filter((task) => task.text !== element);
		setTasks(updatedTasks);
	}

	return (
		<div className="App">
			<h2>My tasks</h2>
			<CategoryFilter
				categories={CATEGORIES}
				handleFilter={handleFilter}
			/>
			<NewTaskForm
				categories={CATEGORIES}
				onTaskFormSubmit={onTaskFormSubmit}
			/>
			<TaskList
				tasks={useTasks}
				currentTask={useSelected}
				handleDelete={handleDelete}
			/>
		</div>
	);
}

export default App;