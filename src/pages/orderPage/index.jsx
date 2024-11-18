import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../../componants/LanguageSwitcher";
import { useFormik } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";

function OrderPage() {
  const { t } = useTranslation();

  const initialValues = {
    loginPhone: "",
    contactPhone: "",
    email: "",
    name: "",
    address: "",
    nr: "",
    postalCode: "",
    city: "",
    country: "",
    sessions: "8",
    paymentMethod: "",
    cardHolder: "",
    cardNumber: "",
    termsAccepted: false,
  };

  const validationSchema = Yup.object({
    loginPhone: Yup.string()
      .required("Login phone number is required")
      .matches(
        /^(\+?[1-9]\d{1,14})$/,
        "Please enter a valid international phone number"
      ),
    contactPhone: Yup.string()
      .required("Contact phone number is required")
      .matches(
        /^(\+?[1-9]\d{1,14})$/,
        "Please enter a valid international phone number"
      ),
    email: Yup.string()
      .required("Email is required")
      .email("Please enter a valid email address")
      .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|net|org|edu|gov|mil|co)$/i,
        "Please enter a valid email address"
      ),
    name: Yup.string()
      .required("Name is required")
      .min(3, "Name must be at least 3 characters")
      .max(50, "Name must not exceed 50 characters"),
    address: Yup.string()
      .required("Address is required")
      .max(100, "Address must not exceed 100 characters"),
    nr: Yup.string()
      .required("Address number is required")
      .matches(/^\d+$/, "Address number must contain only numbers"),
    postalCode: Yup.string()
      .required("Postal code is required")
      .matches(/^\d{4,10}$/, "Postal code must contain only numbers"),
    city: Yup.string()
      .required("City is required")
      .min(2, "City must be at least 2 characters"),
    country: Yup.string()
      .required("Country is required")
      .min(2, "Country must be at least 2 characters"),
    paymentMethod: Yup.string().required("Payment method is required"),
    termsAccepted: Yup.bool()
      .oneOf([true], "You must accept the terms and conditions.")
      .required("You must accept the terms and conditions."),
  });

  async function onSubmit(values, { resetForm }) {
    toast.success("Form Submitted Successfully!"); 
    console.log(values);
    resetForm();
  }

  const myFormik = useFormik({
    initialValues: initialValues,
    onSubmit: onSubmit,
    validationSchema: validationSchema,
  });

  return (
    <>
      <LanguageSwitcher />
      <form onSubmit={myFormik.handleSubmit}>
        <div className="container max-w-5xl mx-auto p-4  md:flex">
          {/* Form Section */}
          <div className="bg-white py-8  px-14 md:w-3/5">
            <h2 className="text-xl text-center font-bold text-gray-800">
              {t("Registration & Booking at GoStudent")}
            </h2>
            <p className="text-sm text-center font-bold text-gray-700 mb-6">
              {t("The leading platform for online tutoring.")}
            </p>

            {/* Form Fields  */}
            {/* Login Phone Number  */}
            <div className="my-10">
              <label className="block text-gray-500 mb-2">
                {t("LOGIN PHONE NUMBER")}
                <span className="text-sm  text-black ps-1 ">
                  ({t("preferably the student's")})
                </span>
              </label>
              <div>
                <PhoneInput
                  type="text"
                  country={"eg"}
                  placeholder={t("phone number")}
                  containerClass="flex w-full"
                  inputClass="flex-1"
                  enableSearch={true}
                  inputStyle={{
                    backgroundColor: "#f3f4f6",
                    paddingBlock: "0px",
                    outline: "none",
                    border: "none",
                  }}
                  buttonStyle={{
                    outline: "none",
                    border: "none",
                  }}
                  containerStyle={{
                    padding: "10px 0px",
                    backgroundColor: "#f3f4f6",
                    borderRadius: "0.375rem",
                  }}
                  onChange={(value) =>
                    myFormik.setFieldValue("loginPhone", value)
                  }
                  value={myFormik.values.loginPhone}
                />
                {myFormik.touched.loginPhone && myFormik.errors.loginPhone && (
                  <p className="text-red-500 text-xs mt-1">
                    {myFormik.errors.loginPhone}
                  </p>
                )}
              </div>
            </div>

            {/* Contact Phone Number  */}
            <div className="mb-10">
              <label className="block text-gray-500 mb-2">
                CONTACT PHONE NUMBER
                <span className="text-sm text-black ps-1">
                  ({t("preferably the parent's")})
                </span>
              </label>
              <div>
                <PhoneInput
                  type="text"
                  country={"eg"}
                  placeholder={t("phone number")}
                  containerClass="flex w-full"
                  inputClass="flex-1"
                  enableSearch={true}
                  inputStyle={{
                    backgroundColor: "#f3f4f6",
                    paddingBlock: "0px",
                    outline: "none",
                    border: "none",
                  }}
                  buttonStyle={{
                    outline: "none",
                    border: "none",
                  }}
                  containerStyle={{
                    padding: "10px 0px",
                    backgroundColor: "#f3f4f6",
                    borderRadius: "0.375rem",
                  }}
                  value={myFormik.values.contactPhone}
                  onChange={(value) =>
                    myFormik.setFieldValue("contactPhone", value)
                  }
                />
                {myFormik.touched.contactPhone &&
                  myFormik.errors.contactPhone && (
                    <p className="text-red-500 text-xs mt-1">
                      {myFormik.errors.contactPhone}
                    </p>
                  )}
              </div>
            </div>

            {/* Email Address  */}
            <div className="mb-10">
              <label className="block text-gray-500 mb-2">
                {t("CONTACT EMAIL ADDRESS")}
                <span className="text-sm text-black ps-1">
                  ({t("preferably the parent's")})
                </span>
              </label>
              <input
                type="email"
                className="w-full  rounded-md px-2  py-4 bg-gray-100 outline-none border-none"
                {...myFormik.getFieldProps("email")}
              />
              {myFormik.touched.email && myFormik.errors.email && (
                <p className="text-red-500 text-xs mt-1">
                  {myFormik.errors.email}
                </p>
              )}
            </div>

            {/* Contact Name  */}
            <div className="mb-10">
              <label className="block text-gray-500 mb-2">
                {t("CONTACT NAME")}
              </label>
              <input
                type="text"
                className="w-full rounded-md px-2  py-4 bg-gray-100 outline-none border-none"
                {...myFormik.getFieldProps("name")}
              />
              {myFormik.touched.name && myFormik.errors.name && (
                <p className="text-red-500 text-xs mt-1">
                  {myFormik.errors.name}
                </p>
              )}
            </div>

            {/* Billing Address  */}
            <div className="mb-10">
              <h3 className="text-gray-500 mb-2">{t("BILLING ADDRESS")}</h3>
              <div className="flex gap-x-4">
                <div className="w-5/6 mb-5">
                  <input
                    type="text"
                    className="w-full p-2 border rounded-md mb-5 px-2  py-4 bg-gray-100 outline-none border-none"
                    placeholder={t("Address")}
                    {...myFormik.getFieldProps("address")}
                  />
                  {myFormik.touched.address && myFormik.errors.address && (
                    <p className="text-red-500 text-xs mt-1">
                      {myFormik.errors.address}
                    </p>
                  )}
                </div>
                <div className="w-1/6 mb-5">
                  <input
                    type="text"
                    className="w-full p-2 border rounded-md mb-5 px-2  py-4 bg-gray-100 outline-none border-none"
                    placeholder={t("Nr")}
                    {...myFormik.getFieldProps("nr")}
                  />
                  {myFormik.touched.nr && myFormik.errors.nr && (
                    <p className="text-red-500 text-xs mt-1">
                      {myFormik.errors.nr}
                    </p>
                  )}
                </div>
              </div>

              <div className="flex gap-x-4">
                <div className="w-1/3">
                  <input
                    type="text"
                    className="w-full p-2 border rounded-md px-2  py-4 bg-gray-100 outline-none border-none"
                    placeholder={t("Postal Code")}
                    {...myFormik.getFieldProps("postalCode")}
                  />
                  {myFormik.touched.postalCode &&
                    myFormik.errors.postalCode && (
                      <p className="text-red-500 text-xs mt-1">
                        {myFormik.errors.postalCode}
                      </p>
                    )}
                </div>

                <div className="w-1/3">
                  <input
                    type="text"
                    className="w-full p-2 border rounded-md px-2  py-4 bg-gray-100 outline-none border-none"
                    placeholder={t("City")}
                    {...myFormik.getFieldProps("city")}
                  />
                  {myFormik.touched.city && myFormik.errors.city && (
                    <p className="text-red-500 text-xs mt-1">
                      {myFormik.errors.city}
                    </p>
                  )}
                </div>

                <div className="w-1/3">
                  <input
                    type="text"
                    className="w-full p-2 border rounded-md px-2  py-4 bg-gray-100 outline-none border-none"
                    placeholder={t("Country")}
                    {...myFormik.getFieldProps("country")}
                  />
                  {myFormik.touched.country && myFormik.errors.country && (
                    <p className="text-red-500 text-xs mt-1">
                      {myFormik.errors.country}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Monthly Sessions  */}
            <div className="mb-10">
              <label className="block text-gray-500 mb-2">
                {t("MONTHLY SESSIONS")}
              </label>
              <select
                className="w-full p-2  rounded-md px-2  py-4 bg-gray-100 outline-none "
                value={myFormik.values.sessions}
                onChange={(e) =>
                  myFormik.setFieldValue("sessions", e.target.value)
                }
              >
                <option>{t("8 sessions")}</option>
                <option>{t("12 sessions")}</option>
                <option>{t("16 sessions")}</option>
              </select>
            </div>

            {/* Payment Method  */}
            <div>
              <h3 className="text-gray-500  mb-2">
                {t("SELECT PAYMENT METHOD")}
              </h3>
              <div>
                {myFormik.touched.paymentMethod &&
                  myFormik.errors.paymentMethod && (
                    <p className="text-red-500 text-xs mt-1">
                      {myFormik.errors.paymentMethod}
                    </p>
                  )}
                <div className="flex items-center p-3 border-2  border-b-0 rounded-tr-lg rounded-tl-lg">
                  <input
                    type="radio"
                    id="sepa"
                    name="payment"
                    className="mr-2"
                    onChange={
                      () => myFormik.setFieldValue("paymentMethod", "sepa") // Set to 'sepa' instead of 'cash'
                    }
                  />
                  <label htmlFor="sepa">
                    <img
                      src="https://seeklogo.com/images/S/sepa-logo-0818BC70FD-seeklogo.com.png"
                      alt="SEPA Logo"
                      className="w-14 h-6 object-contain"
                    />
                  </label>
                </div>
                <div className="border-2 p-3">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="card"
                      name="payment"
                      className="mr-2"
                      onChange={
                        () => myFormik.setFieldValue("paymentMethod", "card") // Set to 'card'
                      }
                    />
                    <label htmlFor="card">
                      <img
                        src="https://wallpapers.com/images/hd/visa-mastercard-logos-wh429a8o742pgm38.jpg"
                        alt="SEPA Logo"
                        className="w-20 h-6 object-contain"
                      />
                    </label>
                  </div>
                  <input
                    type="text"
                    className="w-full px-2  py-4 bg-gray-100 outline-none border-none  rounded-md my-4"
                    placeholder={t("Card holder")}
                    {...myFormik.getFieldProps("cardHolder")}
                  />
                  {myFormik.touched.cardHolder &&
                    myFormik.errors.cardHolder && (
                      <p className="text-red-500 text-xs mt-1">
                        {myFormik.errors.cardHolder}
                      </p>
                    )}
                  <input
                    type="text"
                    className="w-full px-2  py-4 bg-gray-100 outline-none   rounded-md mb-10 "
                    placeholder={t("Card number")}
                    {...myFormik.getFieldProps("cardNumber")}
                  />
                  {myFormik.touched.cardNumber &&
                    myFormik.errors.cardNumber && (
                      <p className="text-red-500 text-xs mt-1">
                        {myFormik.errors.cardNumber}
                      </p>
                    )}
                </div>
              </div>
              <h3 className="text-gray-400  italic text-sm mt-2">
                {t("100% secure payment all data is encrypted")}
              </h3>
            </div>
          </div>

          {/* Order Overview  */}
          <div className="bg-gray-100 py-8  px-10 md:w-2/5 flex flex-col justify-between">
            <div>
              <h3 className="text-sm font-semibold text-gray-800 mb-4">
                {t("ORDER OVERVIEW")}
              </h3>
              {/* Duration Selection  */}
              <div className="grid grid-cols-3">
                <p className="px-2 py-6 text-start border text-xs font-medium text-gray-400 hover:bg-blue-100 cursor-pointer">
                  {t("6 MONTHS")}
                </p>
                <p className="px-2 py-6 text-start border text-xs font-medium text-gray-400 hover:bg-blue-100 cursor-pointer">
                  {t("9 MONTHS")}
                </p>
                <p className="px-2 py-6 text-start border text-xs font-medium text-gray-400 hover:bg-blue-100 cursor-pointer">
                  {t("12 MONTHS")}
                </p>
                <p className="px-2 py-6 text-start border text-xs font-medium text-gray-400 hover:bg-blue-100 cursor-pointer">
                  {t("18 MONTHS")}
                </p>
                <p className="px-2 py-6 text-start border text-xs font-medium text-gray-400 hover:bg-blue-100 cursor-pointer">
                  {t("24 MONTHS")}
                </p>
                <p className="px-2 py-6 text-start border text-xs font-medium text-gray-400 hover:bg-blue-100 cursor-pointer">
                  {t("36 MONTHS")}
                </p>
              </div>

              {/*Slider */}
              <div className="flex items-center mt-6 mb-12 gap-x-3">
                <div className="flex items-center">
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-10 h-5 bg-gray-300 rounded-full peer peer-checked:bg-blue-500 peer-focus:ring-2 peer-focus:ring-blue-300 transition-all duration-300"></div>
                    <div className="absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full shadow peer-checked:translate-x-5 transition-transform duration-300"></div>
                  </label>
                </div>
                <p className="text-xs">
                  {t("Pay in advance - EXTRA 5% DISCOUNT")}
                </p>
              </div>

              {/* Price Details  */}
              <div className=" text-xs text-gray-400 uppercase font-medium">
                <div className="flex justify-between mb-6 ">
                  <span>{t("Number of Sessions P.M.")}</span>
                  <span className="text-black">8</span>
                </div>
                <div className="flex justify-between mb-6">
                  <span>{t("Regular Price")}</span>
                  <span className="line-through  text-black">29.60€</span>
                </div>
                <div className="flex justify-between mb-6">
                  <span>{t("Your Price")}</span>
                  <span className="text-black">28.40€</span>
                </div>
                <div className="flex justify-between text-lime-400 mb-6 border-b-2 border-white pb-4">
                  <span>{t("Discount 4%")}</span>
                  <span className="text-lg font-bold ">-9.60€</span>
                </div>
                <div className="flex justify-between mb-6">
                  <span>{t("Setup Fee")}</span>
                  <span className="text-lg text-blue-600 font-bold">0.00€</span>
                </div>
                <div className="flex justify-between  mb-6">
                  <span>{t("Total P.M.")}</span>
                  <span className="text-lg text-blue-600 font-bold">
                    227.20€
                  </span>
                </div>
              </div>
              {/* Terms and Order Button  */}
              <div className="mt-6">
                <div className="flex items-start space-x-2">
                  <input
                    type="checkbox"
                    id="terms"
                    className="w-4 h-4"
                    checked={myFormik.values.termsAccepted}
                    onChange={(e) =>
                      myFormik.setFieldValue("termsAccepted", e.target.checked)
                    }
                  />
                  <label htmlFor="terms" className="text-xs text-gray-600">
                    {t("I accept the")}
                    <a href="#" className="text-blue-500 px-1 ">
                      {t("Terms & Conditions")}
                    </a>
                    {t("and understand my")}
                    <a href="#" className="text-blue-500 px-1">
                      {t("right of withdrawal")}
                    </a>
                    {t(
                      "as well as the circumstances that lead to a repeal of the same."
                    )}
                  </label>
                </div>
                <button
                  type="submit"
                  // className="mt-4 w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600"
                  className={`mt-4 w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600  ${
                    myFormik.values.termsAccepted
                      ? "opacity-100 cursor-pointer"
                      : "opacity-50 cursor-not-allowed"
                  }`}
                  disabled={!myFormik.values.termsAccepted}
                >
                  {t("Order Now")}
                </button>
              </div>
            </div>
            <p className="uppercase text-gray-400 font-bold text-sm">
              {t("95% satisfaction rate!")}
            </p>
          </div>
        </div>
      </form>
    </>
  );
}

export default OrderPage;
