import { Metadata } from "next";
export const metadata: Metadata = {
  title: "CVGo - kreator ",
};

export default function CreatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
