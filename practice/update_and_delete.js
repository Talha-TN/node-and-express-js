import express from "express";
import connectDb from "./db/db_connection.js";
import employee from "./models/employeeModle.js";
const app = express();
connectDb();
app.get("/", (req, res) => {
  res.send("update and delete from data base");
});
const getEmployeeData = async () => {
  let employeeData = await employee.find();
  console.log("employee data before update", employeeData);
};
const updateEmployeeData = async (id,updateData)=>{
    const result = await employee.updateOne({_id:id},{$set:updateData})
    console.log(result.nModified===0?`no updates for employee id ${id}`:`updated emplyee data :`,result)

}
const deleteEmployee = async(id)=>{
    await employee.findByIdAndDelete(id)
    console.log(`employee with id ${id} has been deleted!`)

}
const main = async ()=>{
    await getEmployeeData()
    const EmployeeID=`6763427b7e2f71d92a74ec8c`
    const updateData = {
        position:"full stack developer",
        department:"IT"
    }
    await updateEmployeeData(EmployeeID,updateData)
    await getEmployeeData()
    // await deleteEmployee(EmployeeID)
    // await getEmployeeData()
}
main()
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`The server has started at http://localhost:${PORT}`);
});
