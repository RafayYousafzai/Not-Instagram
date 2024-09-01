import { View, Text, StyleSheet, Pressable, Alert } from "react-native";
import React from "react";
import { TextInput } from "react-native-gesture-handler";

import { Formik } from "formik";
import * as Yup from "yup";
import emailValidator from "email-validator";

import { firebase } from "../../firebase/firebase";

const LoginForm = ({ navigation }) => {
  const LoginFormSchema = Yup.object().shape({
    email: Yup.string().email().required("An email is required"),
    password: Yup.string()
      .required()
      .min(6, "Your password has to have atleast 6 charector"),
  });

  const onLogin = async (email, password) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // User successfully authenticated
        firebase.auth().signInWithEmailAndPassword(email, password);
        console.log("Signed In,", userCredential);
      })
      .catch((error) => {
        // Error occurred during authentication
        Alert.alert(
          "My Lord... ",
          error.message + "\n\n ... What would you like to do next?",
          [
            { text: "OK", onPress: () => console.log("OK"), style: "cancel" },
            { text: "Sign up", onPress: () => navigation.push("SignupScreen") },
          ]
        );
      });
  };

  return (
    <View style={styles.wrapper}>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => {
          onLogin(values.email, values.password);
          // console.log(values.email, values.password);
        }}
        validationSchema={LoginFormSchema}
        validateOnMount={true}
      >
        {({ handleBlur, handleChange, handleSubmit, values, isValid }) => (
          <>
            <View
              style={[
                styles.inputField,
                {
                  borderColor:
                    values.email.length < 1 ||
                    emailValidator.validate(values.email)
                      ? "#ccc"
                      : "red",
                },
              ]}
            >
              <TextInput
                placeholderTextColor="#444"
                placeholder="Phone number,username or email"
                autoCapitalize="none"
                keyboardType="email-address"
                textContentType="emailAddress"
                autoFocus={true}
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
              />
            </View>
            <View
              style={[
                styles.inputField,
                {
                  borderColor:
                    1 > values.password.length || values.password.length >= 6
                      ? "#ccc"
                      : "red",
                },
              ]}
            >
              <TextInput
                placeholderTextColor="#444"
                placeholder="Password"
                autoCapitalize="none"
                textContentType="password"
                // autoFocus={true}
                autoCorrect={false}
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
              />
            </View>
            <View style={{ alignItems: "flex-end", marginBottom: 20 }}>
              <Text style={{ color: "#6BB0F5", fontSize: 12 }}>
                Forgot Password
              </Text>
            </View>
            <Pressable
              style={styles.button(isValid)}
              disabled={!isValid}
              onPress={handleSubmit}
            >
              <Text style={[styles.buttonText, { fontSize: 20 }]}>Log in</Text>
            </Pressable>

            <View style={styles.signUpContainer}>
              <Text>Don't have an account </Text>
              <Pressable>
                <Text
                  style={{ color: "#6BB0F5" }}
                  onPress={() => navigation.push("SignupScreen")}
                >
                  {" "}
                  Sign up
                </Text>
              </Pressable>
            </View>
          </>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: { marginTop: 80 },
  inputField: {
    // borderColor: "red",
    borderWidth: 1,
    borderRadius: 5,
    padding: 12,
    backgroundColor: "#FAFAFA",
    marginBottom: 10,
  },

  button: (isValid) => ({
    backgroundColor: isValid ? "#0096F6" : "#9ACAF7",
    alignItems: "center",
    justifyContent: "center",
    minHeight: 42,
    borderRadius: 4,
  }),
  buttonText: {
    fontWeight: "600",
    color: "#fff",
    fontSize: 20,
  },
  signUpContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
});

export default LoginForm;
