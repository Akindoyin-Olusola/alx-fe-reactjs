import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// ✅ Validation schema using Yup
const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email address").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

export default function FormikForm() {
  // ✅ Initial form values
  const initialValues = {
    username: "",
    email: "",
    password: "",
  };

  // ✅ Handle submission
  const handleSubmit = (values, { resetForm, setSubmitting, setStatus }) => {
    console.log("Form Data:", values);
    setTimeout(() => {
      setStatus({ success: "Registration successful! 🎉" });
      resetForm();
      setSubmitting(false);
    }, 1000);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-2xl shadow-md mt-10">
      <h2 className="text-2xl font-bold text-center mb-4">🧾 Register with Formik</h2>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, status }) => (
          <Form className="space-y-4">
            <div>
              <label className="block font-medium">Username</label>
              <Field
                type="text"
                name="username"
                placeholder="Enter your username"
                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <ErrorMessage name="username" component="p" className="text-red-500 text-sm" />
            </div>

            <div>
              <label className="block font-medium">Email</label>
              <Field
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <ErrorMessage name="email" component="p" className="text-red-500 text-sm" />
            </div>

            <div>
              <label className="block font-medium">Password</label>
              <Field
                type="password"
                name="password"
                placeholder="Enter your password"
                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <ErrorMessage name="password" component="p" className="text-red-500 text-sm" />
            </div>

            {status?.success && (
              <p className="text-green-600 text-sm">{status.success}</p>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full text-white py-2 rounded-lg transition-all ${
                isSubmitting ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600"
              }`}
            >
              {isSubmitting ? "Submitting..." : "Register"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
