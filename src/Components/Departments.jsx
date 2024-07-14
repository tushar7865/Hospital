import Admin from "./Admin";
import Departmentofmedicine from "./Departmentofmedicine";
function Departments()
{
  // let Departments =["ADMINISTRATION DEPARTMENT","DEPARTMENT OF MEDICINE","MAI DIABETES CARE AND RESEARCH CENTER","DEPARTMENT OF CARDIOLOGY","DEPARTMENT OF SURGERY","DEPARTMENT OF PAEDIATRICS","DEPARTMENT OF OBSTETRICS AND GYNECOLOGY","DEPARTMENT OF ORTHOPEDICS","DEPARTMENT OF OPHTHALMOLOGY"]
    return(
      <>
      <section id="Departments">

      <h1>Departments</h1>
      <p>Mai Mangeshkar Hospital is a community hospital with all basic amenities required under one roof at affordable cost. Hospital has various departments which are listed here. Anyone who wish to see the list of doctors available can click on particular department given at right side of this page and doctors list will be displayed. Availability of  these doctors can be seen in the OPD timetable tab provided in our website.Thank you!
Team
MAI MANGESHKAR HOSPITAL</p>
      <ul>
        <Admin></Admin>
        <Departmentofmedicine></Departmentofmedicine>
        <li><a href="#MAI DIABETES CARE AND RESEARCH CENTER">MAI DIABETES CARE AND RESEARCH CENTER</a></li>
        <li><a href="#DEPARTMENT OF CARDIOLOGY">DEPARTMENT OF CARDIOLOGY</a></li>
        <li><a href="#DEPARTMENT OF SURGERY">DEPARTMENT OF SURGERY</a></li>
        <li><a href="#DEPARTMENT OF PAEDIATRICS">DEPARTMENT OF PAEDIATRICS</a></li>
        <li><a href="#DEPARTMENT OF OBSTETRICS AND GYNECOLOGY">DEPARTMENT OF OBSTETRICS AND GYNECOLOGY</a></li>
        <li><a href="#DEPARTMENT OF ORTHOPEDICS">DEPARTMENT OF ORTHOPEDICS</a></li>
        <li><a href="#DEPARTMENT OF OPHTHALMOLOGY">DEPARTMENT OF OPHTHALMOLOGY</a></li>

      </ul>
      </section>
      
      </>
    );


}
export default Departments;