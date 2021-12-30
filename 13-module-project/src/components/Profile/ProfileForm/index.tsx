import { FormEvent, useRef } from "react";

import classes from "./styles.module.css";

type ChangePasswordData = {
  newPassword: string;
  oldPassword: string;
};

type Props = {
  onChangePassword: (data: ChangePasswordData) => Promise<void>;
};

export function ProfileForm({ onChangePassword }: Props) {
  const newPasswordInputRef = useRef<HTMLInputElement>(null);
  const oldPasswordInputRef = useRef<HTMLInputElement>(null);

  async function submitHandler(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const newPassword = newPasswordInputRef.current!.value;
    const oldPassword = oldPasswordInputRef.current!.value;

    onChangePassword({ newPassword, oldPassword });
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input type="password" id="new-password" ref={newPasswordInputRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="old-password">Old Password</label>
        <input type="password" id="old-password" ref={oldPasswordInputRef} />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}
