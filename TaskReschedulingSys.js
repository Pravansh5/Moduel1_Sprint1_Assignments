// You are developing a task management system that tracks pending tasks for the day. Create an array with five tasks. Implement the following operations without using specific method references:

// Remove the first task from the list.
// Add two new high-priority tasks to the beginning of the list.
// Replace the last task in the list with a new task.
// Log the updated task list after all operations.


let tasks =["reading","coding","running","exercise","meditation"];
tasks.shift();
tasks.unshift("MSM","MRM");
tasks[tasks.length-1]="newTask";
console.log(tasks);