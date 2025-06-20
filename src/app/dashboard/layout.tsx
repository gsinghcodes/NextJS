export default function DashboardLayout({
  children,
  notifications,
  revenue,
  user,
  login,
}: {
  children: React.ReactNode;
  notifications: React.ReactNode;
  revenue: React.ReactNode;
  user: React.ReactNode;
  login: React.ReactNode;
}) {
    const isLoggedin = true

    return (
        isLoggedin? <div>
            {children}
            {notifications}
            {revenue}
            {user}
        </div>:
        <div>{login}</div>
    )
}
