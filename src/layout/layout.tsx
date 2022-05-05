import { memo, ReactNode, VFC } from "react";

type props = {
  children: ReactNode;
};

export const Layout: VFC<props> = memo((props) => {
  const { children } = props;
  return <>{children}</>;
});
