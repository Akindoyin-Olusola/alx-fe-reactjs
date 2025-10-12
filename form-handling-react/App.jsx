import Posts from "./components/Posts";
import FormikForm from "./components/FormikForm";

function App() {
  return (
    <div className="App min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-center my-6">React Query + Formik Demo</h1>
      <div className="max-w-4xl mx-auto space-y-10">
        <FormikForm />
        <Posts />
      </div>
    </div>
  );
}

export default App;
