import { useSearchParams } from "react-router-dom";

const ConfirmationPage = () => {
  const [searchParams] = useSearchParams();
  const phone = searchParams.get("phone");

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-md text-center">
        <h2 className="text-xl font-semibold mb-4 text-green-600">✅ Subscription Confirmed!</h2>
        <p className="text-gray-700 mb-4">
          Thank you! Your phone number <span className="font-bold">{phone}</span> has been successfully registered.
        </p>
      </div>
    </div>
  );
};

export default ConfirmationPage;
