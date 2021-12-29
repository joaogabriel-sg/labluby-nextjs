import { Fragment, ReactNode } from "react";

import { MainNavigation } from "@components";

type Props = {
  children: ReactNode | ReactNode[];
};

export function Layout({ children }: Props) {
  return (
    <Fragment>
      <MainNavigation />
      <main>{children}</main>
    </Fragment>
  );
}
