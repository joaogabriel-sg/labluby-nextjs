import { ProfileForm } from "@components";

import classes from "./styles.module.css";

type ChangePasswordData = {
  newPassword: string;
  oldPassword: string;
};

export function UserProfile() {
  async function changePasswordHandler({
    newPassword,
    oldPassword,
  }: ChangePasswordData) {
    const response = await fetch("/api/user/change-password", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ newPassword, oldPassword }),
    });

    const data = await response.json();

    console.log(data);
  }

  return (
    <section className={classes.profile}>
      <h1>Your User Profile</h1>
      <ProfileForm onChangePassword={changePasswordHandler} />
    </section>
  );
}
