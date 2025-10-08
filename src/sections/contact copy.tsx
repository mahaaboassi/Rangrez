import { useEffect, useState } from "react"
import logo from "../assets/images/logo.webp"
// for validation
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { Link } from "react-router-dom";
import { contactData } from "../data";
import Heading from "../components/heading";

type ContactFormValues = {
  name?: string
  email?: string
  company?: string
  country?: string
  job_title?: string
  phone?: string
  message?: string
}

type MailPayload = {
  body: string
  userEmail: string
  adminEmail: string
  subject: string
}

const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email format') // Ensures the email is valid
    .required('Email is required'),
    name: Yup.string().min(2,"Name must be at least 2 characters long").required('Name is required'),
    company: Yup.string().min(2,"Company must be at least 2 characters long"),
    job_title: Yup.string(), 
    country : Yup.string(), 
    phone : Yup.string().matches(/^[0-9+\-() ]*$/, 'Phone number is not valid'),   
    message : Yup.string().min(2,"Message must be at least 2 characters long").required('Message is required'),   
  });

const Contact = ()=>{
    useEffect(()=>{window.scrollTo({ top: 0})},[])
    const { register, handleSubmit, formState: { errors } } = useForm(
        {resolver: yupResolver(validationSchema), 
            mode: 'onChange'   }
    );
    const [ loading, setLoading ] = useState(false)
    const [ openPopup, setOpenPopup ] = useState({
        isOpen : false,
        message : <></>
    })
    const onSubmit = async(value:ContactFormValues)=>{

        
        setLoading(true)
        const temp: MailPayload  = {
            body : ` <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px; background-color: #f9f9f9;">
                        <h2 style="color: #2c3e50; text-align: center;">📩 New Contact Message</h2>

                        <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
                        <tr>
                            <td style="padding: 8px; font-weight: bold; color: #333;">Name:</td>
                            <td style="padding: 8px; color: #555;">${value.name || '-'}</td>
                        </tr>
                        <tr>
                            <td style="padding: 8px; font-weight: bold; color: #333;">Email:</td>
                            <td style="padding: 8px; color: #555;">${value.email || '-'}</td>
                        </tr>
                        <tr>
                            <td style="padding: 8px; font-weight: bold; color: #333;">Company:</td>
                            <td style="padding: 8px; color: #555;">${value.company || '-'}</td>
                        </tr>
                        <tr>
                            <td style="padding: 8px; font-weight: bold; color: #333;">Country:</td>
                            <td style="padding: 8px; color: #555;">${value.country || '-'}</td>
                        </tr>
                        <tr>
                            <td style="padding: 8px; font-weight: bold; color: #333;">Job Title:</td>
                            <td style="padding: 8px; color: #555;">${value.job_title || '-'}</td>
                        </tr>
                        <tr>
                            <td style="padding: 8px; font-weight: bold; color: #333;">Phone:</td>
                            <td style="padding: 8px; color: #555;">${value.phone || '-'}</td>
                        </tr>
                        <tr>
                            <td style="padding: 8px; font-weight: bold; color: #333;">Message:</td>
                            <td style="padding: 8px; color: #555;">${value.message || '-'}</td>
                        </tr>
                        </table>

                        <hr style="margin-top: 30px; border: none; border-top: 1px solid #ccc;" />
                        <p style="font-size: 13px; color: #888; text-align: center;">This message was submitted from the website contact form.</p>
                    </div>`,
           userEmail : value.email || "",
           adminEmail : "info@rangrez.net" ,
           subject : "New Inquiry Received from TRN Website"

        }



        const res = await fetch("https://api.arizglobal.com/api/mail", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(temp),
        });
        const data = await res.json();
        if (data.success) {
            setOpenPopup({
                    isOpen : true,
                    message : <>
                        <p><strong>Thank you for reaching out to us!</strong> </p>
                        <p className="py-2">Your message has been successfully sent. </p> 
                        <p>Our team will get back to you as soon as possible.</p>
                    </>
                })
            setLoading(false)
        } else {
            if(data.status == 422 ){
                setOpenPopup({
                    isOpen : true,
                    message : <>
                        <p><strong>Oops!</strong></p>
                        <p className="py-2">{data.message}</p>
                        <p>Please try again.</p>
                    </>
                })
            }else{
                setOpenPopup({
                    isOpen : true,
                    message : <>
                        <p><strong>Oops! Something went wrong.</strong></p>
                        <p className="py-2">We couldn't send your message.</p>
                        <p>Please try again in a moment.</p>
                    </>
                })
            }
                
                 setLoading(false)
        }
    }
    const reset = ()=> setOpenPopup({
        isOpen : false,
        message : <></>
    })
    return(<div  id="contact" className="flex flex-col gap-7 md:gap-10 lg:gap-20 container-page">

            {openPopup.isOpen && <div className="pop-up p-12">
                <div className="flex justify-center  ">
                    <img className="w-42" src={logo} alt="logo" />
                </div>
                <div className="py-4">
                    {openPopup.message}
                </div>
                <div className="flex justify-center">
                    <button onClick={reset}>Close</button>
                </div>
            </div>}
            <div className="grid grid-cols-3 gap-5 lg:gap-10">
                <div className="col-span-3 md:col-span-2">
                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-1 md:gap-2 p-4 md:p-8">
                        <Heading title="Contact" desc="Get in touch with The Rangrez Network (TRN)." />
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 ">
                                <div className="w-full">
                                    <input {...register("name")} className="w-full" placeholder="Name"  />
                                    {errors.name && <p className="p-0.5 text-error">{errors.name.message}</p>}
                                </div>
                                <div className="w-full">
                                    <input {...register("email")} className="w-full" placeholder="Email"  />
                                    {errors.email && <p className="p-0.5 text-error">{errors.email.message}</p>}
                                </div>
                            </div>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
                                <div className="w-full">
                                    <input {...register("company")} className="w-full" placeholder="Company"  />
                                    {errors.company && <p className="p-0.5 text-error">{errors.company.message}</p>}
                                </div>
                                <div className="w-full">
                                    <input {...register("job_title")} className="w-full" placeholder="Job Title"  />
                                    {errors.job_title && <p className="p-0.5 text-error">{errors.job_title.message}</p>}
                                </div>
                            </div>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
                                <div className="w-full">
                                    <input {...register("country")} className="w-full" placeholder="Country"  />
                                    {errors.country && <p className="p-0.5 text-error">{errors.country.message}</p>}
                                </div>
                                <div className="w-full ">
                                    <input {...register("phone")} type="number" className="w-full" placeholder="Phone"  />
                                    {errors.phone && <p className="p-0.5 text-error">{errors.phone.message}</p>}
                                </div>
                            </div>
                            <div>
                                <textarea {...register("message")} className="w-full" placeholder="Message" rows={4} />
                                {errors.message && <p className="p-0.5 text-error">{errors.message.message}</p>}
                            </div>
                            <div className="flex justify-center ">
                                <button className="relative w-full flex justify-center items-center" type="submit">{loading ?  <span className="spinner"></span>  :"Submit"}</button>
                            </div>

                    </form>
                </div>
                <div className="col-span-3 md:col-span-1 ">
                    <div className="flex flex-col justify-between gap-2 h-full">
                        <div className="flex flex-col gap-5">
                            {
                                contactData.map((e,idx)=>(<Link to={`${e.link}`} target="_blank"  key={`contact_Info_${e.title}_${idx}`}>
                                <div className="flex items-center gap-2 container-contact p-4">
                                    
                                    <div className="flex items-center icon">{e.icon}</div>
                                    <div className="flex w-full flex-col gap-1">
                                        <h2><strong>{e.title}</strong></h2>
                                        <div className="w-full flex flex-col justify-center">
                                            <p>{e.value}</p> 
                                            
                                        </div>
                                    </div>

                                </div>
                                </Link>))
                            }
                        </div>
                        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3616.041970458845!2d55.1684549253754!3d24.998689777839235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f734a5c744f37%3A0x6e047855710d82a6!2sBayan%20Building!5e0!3m2!1sen!2sae!4v1758713197362!5m2!1sen!2sae" loading="lazy"></iframe> */}
                        
                    </div>
                </div>
            </div>
        </div>




    )
}
export default Contact;