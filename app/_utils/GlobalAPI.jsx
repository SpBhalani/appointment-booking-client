import axios from "axios"


const axiosClient = axios.create({
    baseURL: "https://appointment-booking-backend-lamw.onrender.com/api"
})

const getCategory = () => axiosClient.get('/categories?populate=*')
const getDoctorList=()=>axiosClient.get('/doctors?populate=*')
const getDoctorByCategory=(category)=>axiosClient.get('/doctors?filters[categories][Name][$in]='+category+"&populate=*")
const getDoctorById=(id)=>axiosClient.get('/doctors/'+id+"?populate=*")

 const bookAppointment=(data)=>axiosClient.post('/appointments',data);
 
    const getUserBookingList=(userEmail)=>axiosClient.get("/appointments?[filters][Email][$eq]="+userEmail+"&populate[doctor][populate][image][populate][0]=url&populate=*")

    const deleteBooking=(id)=>axiosClient.delete('/appointments/'+id)
 
    const sendEmail=(data)=>axios.post('/api/sendEmail',data);
    export default{
    getCategory,
    getDoctorList,
    getDoctorByCategory,
    getDoctorById,
    bookAppointment,
    getUserBookingList,
    deleteBooking,
    sendEmail
    }