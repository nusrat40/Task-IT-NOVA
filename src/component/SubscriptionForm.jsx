import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
import { QRCodeCanvas } from "qrcode.react";


const SubscriptionForm = () => {

    const {register,handleSubmit,formState:{errors}} = useForm();
    const [qrData, setQrData]=useState(null);
    const [loading, setLoading]=useState(false);

    const onSubmit = (data) => {
        setLoading(true);
        setTimeout(() => {
            setQrData(`${window.location.origin}/confirm?phone=${data.phone}`);
            toast.success("QR Code generated successfully!");
            setLoading(false);
        }, 1500);
    };



    return (
        <div className='flex justify-center items-center min-h-screen bg-gray-100 p-4'>
            <Toaster></Toaster>

           <div className="w-full max-w-md p-6 shadow-lg bg-white rounded-lg">
           
                <h2 className='text-xl font-semibold text-center mb-4'>Subscribe Now</h2>
                <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
                    <div>
                        <input type="tel"
                        placeholder='Enter your phone number'
                        {...register("phone",{
                            required:"Phone number is required",
                            pattern:{
                                value: /^[0-9]{10,15}$/,
                                message: "Invalid phone number format",
                            }
                        })}
                        className='w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400'
                        />
                        {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
                        
                    </div>

                    <button
                    type="submit"
                    className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition disabled:opacity-50"
                    disabled={loading}
                    >
                    {loading ? "Generating QR..." : "Get QR Code"}
                    </button>

                </form>
             
                {qrData && (
          <div className="mt-6 flex flex-col items-center">
            <p className="text-gray-700 mb-2">Scan this QR code to confirm:</p>
            <QRCodeCanvas value={qrData} size={150} />  {/* ✅ Fixed */}
          </div>
        )}
        
           </div>
            
        </div>
    );
};

export default SubscriptionForm;