import React from "react";
import { Formik } from "formik";
import { Container, Header, Form } from "semantic-ui-react";

const options = [
  { key: "k", text: "Kindergarten", value: "k" },
  { key: "1", text: "1st Grade", value: "1" },
  { key: "2", text: "2nd Grade", value: "2" },
  { key: "3", text: "3rd Grade", value: "3" },
  { key: "4", text: "4th Grade", value: "4" },
  { key: "5", text: "5th Grade", value: "5" }
];

export default function Application(props) {
  return (
    <Container style={{ marginTop: "50px" }}>
      <Header
        content="Middleburg Charter School Application"
        subheader="For the school year 2019-2020"
      />
      <Formik
        initialValues={{ name: "jared" }}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
          }, 1000);
        }}
        render={props => (
          <Form>
            <Form.Group widths="equal" onSubmit={props.handleSubmit}>
              <Form.Input
                fluid
                label="First name"
                placeholder="First name"
                name="firstname"
                value={props.values.firstName}
                onChange={props.handleChange}
              />
              <Form.Input
                fluid
                label="Last name"
                placeholder="Last name"
                name="lastname"
                value={props.values.lastName}
                onChange={props.handleChange}
              />
              <Form.Select
                fluid
                label="Grade"
                options={options}
                placeholder="Grade"
              />
            </Form.Group>
            <Form.TextArea
              label="About"
              placeholder="Tell us more about you..."
              name="about"
              value={props.values.about}
              onChange={props.handleChange}
            />
            By clicking submit, you are agreeing to our terms and conditions.
            <Form.Button type="submit" style={{ marginTop: 20 }}>
              Submit
            </Form.Button>
          </Form>
        )}
      />
    </Container>
  );
}
