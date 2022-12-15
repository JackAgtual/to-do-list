export default function TasksCompleteCounter() {
    // Used to count and render number of complete tasks

    const _numTasksCompleteDomId = 'num-tasks-complete';
    const _numTotalTasksDomId = 'num-total-tasks';

    const _updateNumTotalTasks = newNumTotalTasks => document.getElementById(_numTotalTasksDomId).innerText = newNumTotalTasks;

    const _updateNumTasksComplete = newNumTasksComplete => document.getElementById(_numTasksCompleteDomId).innerText = newNumTasksComplete;

    const updateTasksCompleteCounter = tasksArray => {
        _updateNumTasksComplete(
            tasksArray.reduce(
                (accumulator, curTask) => accumulator + Number(curTask.finished),
                0
            )
        );
        _updateNumTotalTasks(tasksArray.length);
    }



    return {
        updateTasksCompleteCounter
    }
}