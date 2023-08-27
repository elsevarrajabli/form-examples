import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Components/Home";
import BasicForm from "./Components/01_BasicForm";
import NestedObjects from "./Components/02_NestedObjects";
import SettingDefaultValues from "./Components/03_SettingDefaultValues";
import SettingFormValues from "./Components/04_SettingFormValues";
import SettingFieldValue from "./Components/05_SettingFieldValue";
import FormValidation from "./Components/06_FormValidation";
import SettingErrors from "./Components/07_SettingErrors";
import ConditionalRender from "./Components/08_ConditionalRender";
import ConditionalEnabling from "./Components/09_ConditionalEnabling";
import ArraysAndDynamicFields from "./Components/10_ArraysAndDynamicFields";
import RadioButtonFields from "./Components/11_CheckboxAndRadioButtonFields";
import CheckboxAndRadioButtonFields from './Components/11_CheckboxAndRadioButtonFields';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="basic-form" element={<BasicForm />} />
          <Route path="nested-objects" element={<NestedObjects />} />
          <Route
            path="setting-default-values"
            element={<SettingDefaultValues />}
          />
          <Route path="setting-form-values" element={<SettingFormValues />} />
          <Route path="setting-field-value" element={<SettingFieldValue />} />
          <Route path="form-validation" element={<FormValidation />} />
          <Route path="setting-errors" element={<SettingErrors />} />
          <Route path="conditional-render" element={<ConditionalRender />} />
          <Route
            path="conditional-enabling"
            element={<ConditionalEnabling />}
          />
          <Route
            path="arrays-and-dynamic-fields"
            element={<ArraysAndDynamicFields />}
          />
          <Route path="checkbox-and-radio-button-fields" element={<CheckboxAndRadioButtonFields />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
