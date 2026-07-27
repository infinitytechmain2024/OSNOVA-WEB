import { Link, type LinkComponentProps } from "@tanstack/react-router";

type Props = Omit<LinkComponentProps<"a">, "to"> & { to: string };

/** Link that accepts any in-app path (dynamic pages are served by the /$ splat route). */
export function AppLink({ to, ...rest }: Props) {
  return <Link to={to as never} {...(rest as object)} />;
}
