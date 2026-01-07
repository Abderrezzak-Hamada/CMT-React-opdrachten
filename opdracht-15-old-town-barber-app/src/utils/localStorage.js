 
export const setUserProfile = (profile) => {
  localStorage.setItem('userProfile', JSON.stringify(profile))
}
 
export const getUserProfile = () => {
  try{
    return JSON.parse(localStorage.getItem('userProfile')) || null
  } catch{
    return null
  }
}
 
export const setAppointments = () => {
  
}
 
export const getAppointments = () => {
  
}
 