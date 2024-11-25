import React from 'react'

const Terms_Conditions = () => {
  return (
    <>
      
     <div className="container-fluid py-5">
        <div className="container px-md-5">
             <div>
                <h3 className='text-center' style={{color:"orangered"}}>TERMS & CONDITIONS</h3>
                <p className='' style={{backgroundColor: "orangered",height:"2px"}}></p>

             </div>

             <div className="py-3">
                <h4>1. Introduction</h4>
                <p>This platform connects tailors with customers seeking tailoring services. We act as a mediator and guarantee the quality of services provided by the tailors or ensure customer satisfaction.</p>
             </div>
            
            <div className="pb-3">
                <h4>2. User Responsibilites</h4>
                
                <h6>Customers:</h6>
                <ul>
                    <li>Provide accurate measurements and requirements to tailors.</li>
                    <li>Make payments as agreed with the tailor.</li>
                    <li>Ensure timely communication with the tailor.</li>
                </ul>

                <h6>Tailors:</h6>
                <ul>
                    <li>Fulfill orders as agreed with the customer.</li>
                    <li>Provide clear pricing and timelines.</li>
                    <li>Respond to customer inquiries promptly.</li>
                </ul>
            </div>

            <div>
                <h4>3. Prohibited Activities</h4>

                
                <h6>Users are prohibited from:</h6>
                <ul>
                    <li>Providing false or misleading information.</li>
                    <li>Engaging in fraudulent activities or scams.</li>
                    <li>Violating any applicable local, national, or international laws.</li>
                </ul>
            </div>

            
            <div className='py-3'>
                <h4>4. Payments</h4>
                <ul>
                    <li>
                    Payment terms, methods, and timelines must be agreed upon directly between customers and tailors.</li>
                    <li>
                    The platform is not responsible for any payment disputes.</li>
                </ul>
            </div>

            <div className='pb-3'>
                <h4>5. Dispute Resolution</h4>
                <p>In case of disputes, the platform may mediate to help resolve the issue. However, the final resolution is the responsibility of the customer and tailor.
                </p>
            </div>


            <div>
                <h4>6. Liability Limitations
                </h4>
                <h6>We are not liable for:
                </h6>
                <ul>
                    <li>Poor quality or delayed services provided by tailors.</li>
                    <li>
Any financial losses, damages, or disputes arising from the use of the platform.
</li>
                </ul>
            </div>

            <div className='py-3'>
                <h4>7. Termination of Access</h4>
                <p>
                We reserve the right to terminate access to the platform for any user who violates these terms.</p>
            </div>

            <div>
                <h4>8. Privacy Policy</h4>
                <p>
                Your personal information is handled in accordance with our [Privacy Policy]. Please review it for more details.</p>
            </div>


            <div className='py-3'>
                <h4>9. Changes to Terms
                </h4>
                <p>
                We may update these terms from time to time. Continued use of the platform constitutes acceptance of the updated terms.</p>
            </div>


            <div>
                <h4>10. Contact Information</h4>
                <p>For any questions or concerns, please contact us at [Your Contact Information].</p>
            </div>


        </div>
     </div>
    </>
  )
}

export default Terms_Conditions