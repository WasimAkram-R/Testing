import React from 'react'

const Policy = () => {
  return (
    <>
     <div className="container-fluid py-md-5 py-4">
        <div className="container">
             <div>
                <h3 className='text-center displaytext' style={{color:"var(--primary-color)"}}>PRIVACY & POLICY</h3>
                <p className='' style={{backgroundColor: "var(--primary-color)",height:"2px"}}></p>

             </div>  
             
             <div className="py-3">
                <h4 className=' text-uppercase 'style={{color:"var(--secondary-color)"}}>1.  Information We Collect</h4>
                <p style={{color:" var(--text-color)"}} className='displaypara'>We collect the following types of information from users:</p>
                <h6 className='displaypara' style={{color:"var(--primary-color)"}}>a. Personal Information</h6>
                <p style={{color:" var(--text-color)"}} className='displaypara'>When you register for an account, place an order, or interact with our website, we may collect the following personal details::</p>
                <ul style={{color:" var(--text-color)"}} className='displaypara'>
                    <li>Name</li>
                    <li>Email address</li>
                    <li>Phone number</li>
                    <li>Delivery address</li>
                    <li>Payment information (if applicable)</li>
                    <li>Profile and preferences (e.g., measurements, clothing styles)</li>
                </ul>


                <h6 className='displaypara' style={{color:"var(--primary-color)"}}>b. Usage Data</h6>
                <p style={{color:" var(--text-color)"}} className='displaypara'>We may collect information about how you interact with our website, including:</p>
                <ul style={{color:" var(--text-color)"}} className='displaypara'>
                    <li>IP address</li>
                    <li>Browser type and version</li>
                    <li>Pages visited</li>
                    <li>Time spent on the website</li>
                    <li>Referring URL</li>
                    <li>Location data</li>
                </ul>
             </div>
            
            <div className="pb-3">
                <h4 className=' text-uppercase ' style={{color:"var(--secondary-color)"}}>2. How We Use Your Information</h4>
                
                <p style={{color:" var(--text-color)"}} className='displaypara'>We use your information for the following purposes:</p>
                <ul style={{color:" var(--text-color)"}} className='displaypara'>
                    <li>To provide, maintain, and improve our services (connecting you with tailors).</li>
                    <li>To personalize your experience and provide recommendations based on your preferences and measurements.</li>
                    <li>To process orders, payments, and customer support inquiries.</li>
                    <li>To send important account-related communications, such as confirmations, updates, and notifications.</li>
                    <li>To send promotional emails or marketing materials (if you have opted in).</li>
                    <li>To comply with legal obligations and protect our legal rights.</li>
                </ul>

            </div>

            <div>
                <h4 className=' text-uppercase 'style={{color:"var(--secondary-color)"}}>3. How We Share Your Information</h4>

                <p style={{color:" var(--text-color)"}} className='displaypara'>We do not sell or rent your personal information. However, we may share your data with trusted third parties in the following circumstances:</p>

                <ul style={{color:" var(--text-color)"}}className='displaypara'>
                    <li><span className=""style={{color:"var(--secondary-color)"}} >Service Providers:</span> We may share your information with third-party service providers who assist us in providing services (such as payment processing, website hosting, or email marketing).</li>
                    <li><span className=""style={{color:"var(--secondary-color)"}} >Tailors:</span> When you choose a tailor, we may share necessary information (such as your measurements or clothing preferences) to facilitate your order.</li>
                    <li><span className=""style={{color:"var(--secondary-color)"}} >Legal Compliance:</span> We may disclose your information to comply with legal obligations, court orders, or government requests.</li>
                    <li><span className=""style={{color:"var(--secondary-color)"}} >Business Transfers:</span> In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of the transaction.</li>
                </ul>
            </div>

            
            <div className='py-3'>
                <h4 className=' text-uppercase 'style={{color:"var(--secondary-color)"}}>4. How We Protect Your Information</h4>

                <p style={{color:" var(--text-color)"}} className='displaypara'>We implement a variety of security measures to protect your personal information:</p>

                <ul className='displaypara'>
                    <li style={{color:" var(--text-color)"}}>
                    <span className=""style={{color:"var(--secondary-color)"}} >Encryption:</span> We use encryption technologies (such as SSL/TLS) to protect your personal information during transmission.</li>
                    <li style={{color:" var(--text-color)"}}>
                    <span className=""style={{color:"var(--secondary-color)"}} >Access Control:</span> Only authorized personnel and service providers have access to your data, and they are bound by confidentiality agreements.</li>
                    <li style={{color:" var(--text-color)"}}>
                   <span className=""style={{color:"var(--secondary-color)"}} > Data Retention:</span> We retain your personal information only for as long as necessary to provide our services and comply with legal requirements..</li>
                </ul>
            </div>

            <div className='pb-3'>
                <h4 className=' text-uppercase 'style={{color:"var(--secondary-color)"}}>5. Your Rights and Choices</h4>
                <p className='displaypara' style={{color:" var(--text-color)"}}>Depending on your location, you may have certain rights regarding your personal information:
                </p>
                <ul className='displaypara'>
                    <li style={{color:" var(--text-color)"}}>
                    <span  className=""style={{color:"var(--secondary-color)"}} >Access:</span> You can request a copy of the personal information we have about you.</li>
                    <li style={{color:" var(--text-color)"}}>
                    <span className=""style={{color:"var(--secondary-color)"}} >Correction:</span> You can request corrections to any inaccurate or incomplete information.</li>
                    <li style={{color:" var(--text-color)"}}>
                    <span  className=""style={{color:"var(--secondary-color)"}} >Deletion:</span> You can request that we delete your personal data, subject to legal exceptions.</li>
                    <li style={{color:" var(--text-color)"}}>
                   <span className=""style={{color:"var(--secondary-color)"}} > Opt-out of Marketing:</span> You can opt out of receiving marketing emails at any time by using the unsubscribe link in the email or by contacting us directly.</li>
                   <li style={{color:" var(--text-color)"}}>
                   <span className=""style={{color:"var(--secondary-color)"}} > Data Portability:</span> You can request a copy of your personal data in a structured, commonly used, and machine-readable format.</li>
                </ul>
                <p className='displaypara' style={{color:" var(--text-color)"}}>To exercise your rights, please contact us at [contact email].
                </p>
            </div>


            <div>
                <h4  className=' text-uppercase 'style={{color:"var(--secondary-color)"}}>6. Cookies and Tracking Technologies
                </h4>
                <p className='displaypara' style={{color:" var(--text-color)"}}>We use cookies and similar tracking technologies to enhance your experience on our website. Cookies are small files stored on your device that help us improve functionality, analyze site traffic, and personalize content.
                </p>
                <p className='displaypara' style={{color:" var(--text-color)"}}>You can control cookie settings through your browser settings. Please note that disabling cookies may impact your user experience on our website.
                </p>
            </div>

            <div className='py-3'>
                <h4 className='text-uppercase ' style={{color:"var(--secondary-color)"}}>7. Third-Party Links</h4>
                <p className='displaypara' style={{color:" var(--text-color)"}}>
                Our website may contain links to third-party websites that are not operated by us. We are not responsible for the content, privacy practices, or security of these websites. We encourage you to review the privacy policies of any third-party sites you visit.</p>
            </div>

            <div>
                <h4 className=' text-uppercase 'style={{color:"var(--secondary-color)"}}>8. Children’s Privacy</h4>
                <p className='displaypara' style={{color:" var(--text-color)"}}>
                Our website is not intended for individuals under the age of 13, and we do not knowingly collect personal information from children. If we become aware that we have collected personal data from a child under 13, we will take steps to delete such information.</p>
            </div>


            <div className='py-3'>
                <h4 className=' text-uppercase 'style={{color:"var(--secondary-color)"}}>9. Changes to This Privacy Policy
                </h4>
                <p className='displaypara' style={{color:" var(--text-color)"}}>
                We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated "Last Updated" date. We encourage you to review this Privacy Policy periodically for any changes. Continued use of our website after changes to this policy indicates your acceptance of those changes.</p>
            </div>


            <div>
                <h4 className=' text-uppercase 'style={{color:"var(--secondary-color)"}}>10. Contact Us</h4>
                <p className='displaypara' style={{color:" var(--text-color)"}}>If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:</p>
                <p className='displaypara ' style={{color:" var(--secondary-color)"}}>[Company Name]</p>
                <p className='displaypara ' style={{color:" var(--secondary-color)"}}>[Contact Address]</p>
                <p className='displaypara' style={{color:" var(--text-color)"}}> <span className=''style={{color:"var(--secondary-color)"}}>Email:</span> [contact email]</p>
                <p className='displaypara' style={{color:" var(--text-color)"}}> <span className=''style={{color:"var(--secondary-color)"}}>Phone:</span> [contact phone number]</p>
            </div>
                

             <div className='pt-4'>
             <p className='' style={{backgroundColor: "var(--primary-color)",height:"2px"}}></p>
             <p className='displaypara' style={{color:" var(--text-color)"}}>This Privacy Policy provides transparency regarding how you collect and use customer data. Be sure to customize this policy with your company's specific details (like company name, contact information, and applicable laws). If you're based in a region with stringent privacy laws (e.g., GDPR in Europe), it may be advisable to consult with a legal professional to ensure compliance.</p>
            </div>    

        </div>
     </div>
    </>
  )
}

export default Policy