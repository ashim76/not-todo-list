const taskList = [];
const badList = [];
const hrPerWeek = 168;

const handleOnSubmit = (e) => {

    const frmData = new FormData(e);

    const task = frmData.get("task")
    const hr = +frmData.get("hr")

    const obj = {
        task,
        hr,

    };
    taskList.push(obj);
    // console.log(obj);
    display();
    totalTaskHours();



};

const display = () => {
    // console.log(taskList, "from display");
    let str = "";
    taskList.map((item, i) => {
        str += `<tr>
<td>
    <input type="checkbox" name="" id=""/>
    ${item.task }

</td>
<td> ${item.hr } hr </td>
<td class="text-end fw-bolder">
    <button class="btn btn-danger" onclick= "deleteItem(${i})">
    <i class="fa-solid fa-trash" title="Delete"></i>
</button>
    <button class="btn btn-warning">
    <i class="fa-solid fa-hand-point-right" title ="Mark as bad list"></i>
</button>
</td>
</tr>
`
    });
    // console.log(str);
    document.getElementById("task-list").innerHTML = str;
};

const deleteItem = i => {
    taskList.splice(i, 1);
    display();
    totalTaskHours();



};

const totalTaskHours = () => {
    const total = taskList.reduce((subTtl, item) => subTtl + item.hr, 0);
    document.getElementById("totalHours").innerHTML = total;

    console.log(total);

};