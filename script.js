const taskList = [];
const badList = [];
const hrPerWeek = 168;

const handleOnSubmit = (e) => {

    const frmData = new FormData(e);

    const task = frmData.get("task")
    const hr = frmData.get("hr")

    const obj = {
        task,
        hr,

    };
    taskList.push(obj);
    console.log(obj);
    console.log(taskList);
}