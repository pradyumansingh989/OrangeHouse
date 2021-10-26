import React from 'react';
const phoneEmailMap = {
    phone: Phone,
    email: Email,
}; 
const StepPhoneEmail = ({onNext}) => {
    //local state
    const [type, setType] = useState('phone');
    const Component = phoneEmailMap[type];



function onNext(){
    
}
   return <Component onNext={onNext}/>
}


export default StepPhoneEmail;