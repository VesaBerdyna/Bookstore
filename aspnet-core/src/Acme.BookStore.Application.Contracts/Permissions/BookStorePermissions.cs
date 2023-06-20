namespace Acme.BookStore.Permissions;

public static class BookStorePermissions
{
    public const string GroupName = "BookStore";

    // public static class Dashboard
    // {
    //     public const string DashboardGroup = GroupName + ".Dashboard";
    //     public const string Host = DashboardGroup + ".Host";
    //     public const string Tenant = GroupName + ".Tenant";
    // }

    // Added items
    public static class Books
    {
        public const string Default = GroupName + ".Books";
        public const string Create = Default + ".Create";
        public const string Edit = Default + ".Edit";
        public const string Delete = Default + ".Delete";
    }

     public static class Authors
    {
        public const string Default = GroupName + ".Authors";
        public const string Create = Default + ".Create";
        public const string Edit = Default + ".Edit";
        public const string Delete = Default + ".Delete";
    }
}
